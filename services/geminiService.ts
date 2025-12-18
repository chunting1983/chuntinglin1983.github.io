
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getApiKey = (): string => {
  // The API key must be obtained exclusively from the environment variable process.env.API_KEY.
  return process.env.API_KEY || "";
};

const getClient = (): GoogleGenAI => {
  if (!genAI) {
    const apiKey = getApiKey();
    if (!apiKey) {
      console.warn("Gemini API Key is missing. AI Chat functionality will be limited.");
    }
    // Initialize with named parameter as required.
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
};

export const initializeChat = async (): Promise<Chat> => {
  const ai = getClient();
  const apiKey = getApiKey();

  if (!apiKey) {
    throw new Error("MISSING_API_KEY");
  }
  
  // Fix: Property 'startChat' does not exist on type 'Models'. 
  // Use ai.chats.create to start a conversation.
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
    const apiKey = getApiKey();
    if (!apiKey) {
      yield "I'm currently in offline mode because my API key hasn't been configured. Please use the contact form to reach Dr. Lin directly, or try again later.";
      return;
    }

    if (!chatSession) {
      await initializeChat();
    }

    if (!chatSession) {
      throw new Error("Failed to initialize chat session");
    }

    // sendMessageStream only accepts the message parameter as per guidelines.
    const streamResult = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of streamResult) {
      // Accessing the .text property directly from the response chunk.
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error: any) {
    console.error("Error sending message to Gemini:", error);
    
    if (error.message === "MISSING_API_KEY") {
      yield "I'm sorry, I cannot connect to my brain right now (API key missing). Please contact Dr. Lin via LinkedIn or Email!";
    } else {
      chatSession = null;
      yield "I apologize, but I'm having trouble processing your request right now. This might be due to a connection issue. Please feel free to use the contact form below.";
    }
  }
};
