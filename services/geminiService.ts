import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize the GenAI client once using the environment variable directly.
// As per guidelines, we use process.env.API_KEY directly and name the parameter.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<Chat> => {
  // Use ai.chats.create to start a conversation session.
  chatSession = ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  
  return chatSession;
};

export const sendMessageToGemini = async function* (message: string) {
  try {
    // Check for API key existence before attempting to call the API
    if (!process.env.API_KEY) {
      yield "The AI assistant is currently in offline mode because the API key is not configured. Please use the contact form to reach Dr. Lin directly.";
      return;
    }

    if (!chatSession) {
      await initializeChat();
    }

    if (!chatSession) {
      throw new Error("Failed to initialize chat session");
    }

    // Use sendMessageStream which takes the message parameter.
    const streamResult = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of streamResult) {
      // Access the .text property directly to get the generated content string.
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error: any) {
    console.error("Error sending message to Gemini:", error);
    
    // In case of any error (like a closed session), reset the session so it can be re-initialized.
    chatSession = null;
    
    if (error?.message?.includes("API_KEY")) {
      yield "I'm sorry, my API key seems to be invalid or missing. Please contact Dr. Lin through the form below.";
    } else {
      yield "I apologize, but I'm having trouble connecting right now. Please feel free to try again or use the contact form.";
    }
  }
};