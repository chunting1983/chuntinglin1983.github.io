import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!genAI) {
    // Safety check for process.env in browser environments
    let apiKey: string | undefined;
    try {
      if (typeof process !== 'undefined' && process.env) {
        apiKey = process.env.API_KEY;
      }
    } catch (e) {
      console.warn("Could not access process.env", e);
    }
    
    if (!apiKey) {
      console.warn("Gemini API Key is missing. Chat functionality will be limited.");
    }
    
    genAI = new GoogleGenAI({ apiKey: apiKey || 'dummy-key-for-ui-render' });
  }
  return genAI;
};

export const initializeChat = async (): Promise<Chat> => {
  const ai = getClient();
  
  // Create a new chat session
  chatSession = ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  
  return chatSession;
};

export const sendMessageToGemini = async function* (message: string) {
  try {
    if (!chatSession) {
      await initializeChat();
    }

    if (!chatSession) {
      throw new Error("Failed to initialize chat session");
    }

    const streamResult = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of streamResult) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error: any) {
    console.error("Error sending message to Gemini:", error);
    
    // Reset session on error to prevent stuck state
    chatSession = null;
    
    yield "I apologize, but I'm having trouble processing your request right now. This might be due to a connection issue or configuration. Please feel free to use the contact form to reach Dr. Lin directly.";
  }
};