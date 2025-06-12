import { StreamChat } from "stream-chat";

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const user_id =
  "user_2yOZwEMdhffgoAz6F2fcskv2np9gmfj8nsjxxbhtjr65pwxckv2r9m85adp2xp4ff2bg2r52hhqmh5p6bZToQ642Dg";

export async function GET() {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  const token = serverClient.createToken(user_id);
  console.log("Token:", token);
  return Response.json({ message: "Hello World" });
}
