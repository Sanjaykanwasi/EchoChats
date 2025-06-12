import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
// const user_id = "user_2yOZwEMdhffgoAz6F2fcskv2np9gmfj8nsjxxbhtjr65pwxckv2r9m85adp2xp4ff2bg2r52hhqmh5p6bZToQ642Dg";

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();

  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  // Create User Token
  const token = serverClient.createToken(user.data.id);
  console.log("NEW USER CREATED", token);
  const client = await clerkClient();
  await serverClient.upsertUser({ id: user.data.id });

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });
  //Access to every chat channel
  const slugs = [
    "java-chat",
    "javascript-chat",
    "react-chat",
    "python-chat",
    "nextjs-chat",
    "tailwind-chat",
    "html-chat",
  ];

  slugs.forEach(async (item) => {
    const channel = serverClient.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: "Discussion on" + " " + capitalize(item),
      created_by_id: user.data.id,
    });

    await channel.create();
    channel.addMembers([user.data.id]);
  });

  return Response.json({ message: "Hello World" });
}
