import React, { useState } from "react";
import Heading from "../../../UI/Heading";

import usericon from "../../../../assets/user-image.png";
import boticon from "../../../../assets/user-image-big.png";
import icon1 from "../../../../assets/camera.svg";
import icon2 from "../../../../assets/clip.svg";
import icon3 from "../../../../assets/emoji.svg";
import icon4 from "../../../../assets/notification.svg";
import icon5 from "../../../../assets/search.svg";
import icon6 from "../../../../assets/like.svg";
import Button from "../../../UI/Button";

const MessagesDetailMainPage = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", content: "Hello!", sender: "user", time: "23:32" },
    { id: "2", content: "Hi there!", sender: "bot", time: "23:32" },
    { id: "1", content: "How are you?", sender: "user", time: "23:32" },
    { id: "2", content: "I am good!", sender: "bot", time: "23:32" },
    { id: "2", content: "What about you?", sender: "bot", time: "23:32" },
    { id: "1", content: "I am good too.", sender: "user", time: "23:32" },
    {
      id: "1",
      content: "Did you like our services?",
      sender: "user",
      time: "23:32",
    },
    {
      id: "2",
      content:
        "Indeed! I found out that among all of them you have the cheapest services to offer your customer.",
      sender: "bot",
      time: "23:32",
    },
    {
      id: "1",
      content:
        "Oh well than! I would like you to just give a review about our sevices in the comment section so that people would reach to us! It would be great if you could help us.",
      sender: "user",
      time: "23:32",
    },
  ]);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleSendMessage = () => {
    const newMessage = {
      id: userInput === "1" ? "1" : "2",
      content: userInput,
      sender: "bot",
      time: getCurrentTime(),
    };
    setMessages([...messages, newMessage]);
    setUserInput("");
  };
  return (
    <div className="px-5  xs:py-5  ">
      <div className="py-4 px-5 bg-slate-100  shadow-md">
        <div className="flex justify-between mb-4 border-b-[0.5px] border-b-slate-300 pb-1">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col my-1">
              <Heading
                text="Durva Brahmbhatt "
                variant="headingTitle"
                headingclassName="font-poppins !text-lg !font-bold tracking-wide"
              />
              <Heading
                text="Service"
                variant="subHeader"
                headingclassName="font-poppins text-sm"
              />
            </div>
          </div>
          <div className="lg:flex gap-3 justify-end my-2 xs:hidden">
            <img src={icon4} className="w-5 h-5" alt="Notification" />
            <img src={icon5} className="w-5 h-5" alt="Search" />
            <img src={icon6} className="w-5 h-5" alt="Like" />
          </div>
        </div>
        <div className=" xs:h-[60vh]  3xl:h-[70vh] overflow-y-scroll soft-sidebar">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 justify-start mb-3 ${
                message.sender === "user" ? "justify-start" : "justify-end"
              }`}
            >
              {message.sender === "user" && (
                <img src={usericon} className="w-8 h-8" alt="User Icon" />
              )}
              <div
                className={`rounded-lg p-2 ${
                  message.sender === "user"
                    ? "bg-gray-200"
                    : "bg-blue-500 text-white"
                }`}
                style={{ maxWidth: "60%" }}
              >
                {message.content}
                <div className="text-xs text-gray-6 00">{message.time}</div>
              </div>
              {message.sender !== "user" && (
                <img src={boticon} className="w-8 h-8" alt="Bot Icon" />
              )}
            </div>
          ))}
        </div>
        <div className="bg-slate-100 flex gap-4 sticky bottom-0 py-3 rounded-lg">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
          <img src={icon1} alt="Camera Icon" />
          <img src={icon2} alt="Clip Icon" />
          <img src={icon3} alt="Emoji Icon" />
          <Button
            buttonClassName="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessagesDetailMainPage;