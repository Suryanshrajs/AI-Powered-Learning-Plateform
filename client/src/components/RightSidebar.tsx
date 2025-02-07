"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import ReactMarkdown from "react-markdown";
interface Props {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface Message {
  text: string;
  self: boolean; // true if user message, false if Gemini response
}

const ChatBot = ({ isOpen, toggleSidebar }: Props) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  useEffect(() => {
    // Scroll to the latest message
    sidebarRef.current?.scrollTo({
      top: sidebarRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const generateAnswers = async () => {
    if (!question.trim()) return;
    setMessages((prev) => [...prev, { text: question, self: true }]);
    setQuestion("");
    setMessages((prev) => [...prev, { text: "🔄", self: false }]);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: question }] }],
          }),
        }
      );
      const data = await response.json();
      const geminiResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: geminiResponse, self: false },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: "Error generating response. Please try again.", self: false },
      ]);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      generateAnswers();
    }
  };

  return (
    <div
      className={`transition-all duration-500 bg-gray-900 text-gray-300 h-full overflow-hidden ${
        isOpen ? "w-[29rem]" : "w-0"
      }`}
    >
      <div className="h-full border border-gray-600 flex flex-col">
        {/* Header */}
        <div className="w-full flex justify-start pt-2 pb-1 bg-gray-700">
          <RiCloseLargeFill
            onClick={toggleSidebar}
            className="cursor-pointer hover:bg-gray-500 transition-all duration-75 rounded-md h-10 w-10 px-2 text-2xl text-white"
          />
        </div>

        {/* Chat Messages */}
        <div
          ref={sidebarRef}
          className="flex-1 overflow-y-auto px-4 py-2 space-y-4 custom-scrollbar"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-sm p-3 rounded-b-xl clear-both ${
                msg.self
                  ? "float-left bg-gray-800 text-white rounded-r-xl"
                  : "float-right bg-gray-700 text-white rounded-l-xl"
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="border-t border-gray-600 bg-gray-800">
          <div className="flex items-center">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask Doubt"
              className="w-full outline-none py-2 px-4 text-white placeholder-gray-500 bg-gray-700 transition-all"
            />
            <button
              onClick={generateAnswers}
              className="bg-blue-600 text-white py-2 px-4 hover:bg-blue-500 transition-all "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
