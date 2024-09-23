"use client";

const ChatMessage = ({
  message,
  time,
  isAnswer = false,
}: {
  message: string;
  time: string;
  isAnswer?: boolean;
}) => {
  const messageVariantClass = isAnswer
    ? "self-start text-left bg-gray-200"
    : "self-end text-right";

  const messageTime = new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`${messageVariantClass} border border-black w-5/6 rounded-lg p-2 my-1`}
    >
      <div className="message-content text-black">
        <p className="w-full text-md">{message}</p>
        <p className="w-full text-xs">{messageTime}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
