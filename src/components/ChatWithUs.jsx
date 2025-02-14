import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatWithUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {isOpen && (
        <div className="bg-white shadow-xl rounded-lg w-72 p-4 mb-3 border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Chat with Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600">How can we assist you today?</p>
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full mt-3 p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="w-full mt-2 bg-red-600 text-white py-2 rounded-md text-sm hover:bg-red-700 transition">
            Send
          </button>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatWithUs;
