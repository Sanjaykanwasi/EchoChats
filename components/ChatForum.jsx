"use client";
import { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

const apiKey = process.env.NEXT_PUBLIC_KEY;
const userId =
  "user_2yOZwEMdhffgoAz6F2fcskv2np9gmfj8nsjxxbhtjr65pwxckv2r9m85adp2xp4ff2bg2r52hhqmh5p6bZToQ642Dg";
const userName = "Sanjay";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yeU9ad0VNZGhmZmdvQXo2RjJmY3NrdjJucDlnbWZqOG5zanh4Ymh0anI2NXB3eGNrdjJyOW04NWFkcDJ4cDRmZjJiZzJyNTJoaHFtaDVwNmJaVG9RNjQyRGcifQ.JHLs-wT0cCT-SLD92JlSUX8vwMXbD0VjH_aEFPknLtw";
const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};
export default function ChatForum({ slug }) {
  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  console.log(process.env.NEXT_PUBLIC_KEY);
  console.log("Hello from ChatForum");

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: "Discussion on " + slug,
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}
