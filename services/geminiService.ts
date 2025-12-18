import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

/**
 * Initializes or retrieves the existing chat session.
 * We follow the rule of creating the GoogleGenAI instance right before use
 * to ensure the API key is correctly pulled from the environment.
 */
export const getChatSession = async (): Promise<Chat> => {
  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async function* (message: string) {
  try {
    // Obtain the session (initializes if necessary)
    const session = await getChatSession();

    // sendMessageStream only accepts the message parameter.
    const streamResult = await session.sendMessageStream({ message });
    
    for await (const chunk of streamResult) {
      // Accessing the .text property directly from the response chunk.
      // We do not use chunk.text() as it is a property, not a method.
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error: any) {
    console.error("Error sending message to Gemini:", error);
    
    // Reset session on critical errors to allow re-initialization on next attempt
    chatSession = null;
    
    if (error?.message?.includes("API_KEY") || error?.message?.includes("403") || error?.message?.includes("401")) {
      yield "I'm sorry, I'm having trouble accessing my API key right now. Please try again in a moment or contact Dr. Lin directly via the contact form.";
    } else {
      yield "I apologize, but I encountered an unexpected error while processing your request. Please feel free to try again.";
    }
  }
};