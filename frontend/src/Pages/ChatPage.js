import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setchats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setchats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chats) => (
        <div key={chats._id}>{chats.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
