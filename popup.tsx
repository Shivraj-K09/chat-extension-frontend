"use client"

import { useChat } from "ai/react"
import { SendHorizontal } from "lucide-react"

import { Button } from "~components/ui/Button"
import { Input } from "~components/ui/Input"

import "~style.css"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat"
  })

  const hasMessages = messages.length > 0

  return (
    <div className="container w-[500px] h-[500px] pt-8 flex flex-col bg-black text-white">
      <h1 className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500 mb-3 animate-gradientAnimation">
        Chatbot Extension
      </h1>
      <div
        className={`message-container overflow-y-auto max-h-[320px] ${
          hasMessages
            ? "border-2 rounded-md border-dotted border-gray-600/70"
            : ""
        } px-6 py-4`}>
        {hasMessages ? (
          messages.map((m) => (
            <div
              key={m.id}
              className="text-base border-b border-gray-800 mb-2 pb-2">
              {m.role === "user" ? "User: " : "Chatbot: "}
              {m.content}
            </div>
          ))
        ) : (
          <div className="text-center text-xl">Talk to Chatbot</div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="container fixed bottom-4 left-0 right-0">
        <div className="flex gap-4">
          <Input
            value={input}
            onChange={handleInputChange}
            className=""
            placeholder="Enter Message"
          />
          <Button
            variant="secondary"
            type="submit"
            className="shining-button text-white bg-gradient-to-r from-indigo-500 to-cyan-500">
            <SendHorizontal className="w-6 h-6" />
          </Button>
        </div>
      </form>
    </div>
  )
}
