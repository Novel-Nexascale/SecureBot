import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})

export const runtime = 'edge'

/**
 * Handles a POST request by generating a response based on the input messages using the OpenAI API.
 * @param req - The request object containing the input messages in the body.
 * @returns A streaming text response object.
 */
export async function POST(req: Request) {
  try {
    // Extract the messages from the request body
    const { messages } = await req.json();

    // Call the OpenAI API to create a chat completion using the gpt-3.5-turbo model and the input messages
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: messages,
    });

    // Create a streaming text response using the API response
    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error:', error);
    throw error;
  }
}
