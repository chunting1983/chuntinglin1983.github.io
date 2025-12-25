
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

/**
 * Sends a message to Gemini using the Chat API.
 * We create a fresh instance of GoogleGenAI on every call to ensure 
 * we always use the most up-to-date environment configuration/API key.
 * 
 * @param message The current user message string
 * @param history Array of previous conversation turns
 */
export const sendMessageToGemini = async function* (
  message: string, 
  history: { role: 'user' | 'model', parts: { text: string }[] }[]
) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Create a new chat session with the provided history
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      history: history,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // sendMessageStream only accepts the message parameter.
    const streamResult = await chat.sendMessageStream({ message });
    
    for await (const chunk of streamResult) {
      // Accessing the .text property directly from the response chunk as per guidelines.
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error: any) {
    console.error("Error sending message to Gemini:", error);
    
    // Specific error handling for key/permission issues
    if (error?.message?.includes("API_KEY") || error?.message?.includes("403") || error?.message?.includes("401")) {
      yield "I'm sorry, I'm having trouble accessing my configuration right now. Please try again in a moment or contact Dr. Lin directly via the contact form.";
    } else if (error?.message?.includes("Requested entity was not found")) {
      yield "It seems there is an issue with the current model configuration. Please try again later.";
    } else {
      yield "I apologize, but I encountered an unexpected error. Please feel free to try again.";
    }
  }
};
