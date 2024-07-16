import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage";
import { useState } from "react";
function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <div className="flex space-x-1 h-[8vh]">
      <div className="w-[70%] mx-4">
        <input
          type="text"
          placeholder="Type here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input input-bordered input-primary w-full "
        />
      </div>
      <button>
        <IoSend className="text-4xl text-primary drop-shadow-2xl mb-6" />
      </button>
    </div>
      </div>
    
    </form>
  );
}

export default Typesend;
