import { GoogleGenAI, Chat, GenerativeModel } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("Gemini API Key is missing. Chat functionality will be limited.");
    }
    genAI = new GoogleGenAI({ apiKey: apiKey || 'dummy-key-for-ui-render' });
  }
  return genAI;
};

export const initializeChat = async (): Promise<Chat> => {
  const ai = getClient();
  
  // Reset session on re-init
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
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    throw new Error("Failed to initialize chat session");
  }

  try {
    const streamResult = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of streamResult) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    yield "I apologize, but I'm having trouble connecting to the server right now. Please try again later or use the contact form.";
  }
};
