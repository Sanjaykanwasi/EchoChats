import { StreamChat } from "stream-chat";

const api_key = process.env.NEXT_PUBLIC_API_KEY;
const api_secret = process.env.NEXT_PUBLIC_SECRET;
const user_id = "john";

export async function GET() {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  const token = serverClient.createToken(user_id);

  return Response.json({ message: "Hello World" });
}
