import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

import user from "../../assets/user.png"
function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };
  return (

    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-primary-content hover:bg-gray-300 duration-300 rounded-md">
    <label
      htmlFor="my-drawer-2"
      className="btn btn-ghost drawer-button lg:hidden absolute left-5"
    >
      <CiMenuFries className="text-gray-700 text-xl" />
    </label>
    <div className="flex space-x-3 items-center justify-center h-[8vh] bg-primary-content hover:bg-gray-300 duration-300">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={user} />
        </div>
      </div>
      <div>
        <h1 className="text-xl">{selectedConversation.fullname}</h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  </div>
  )
}

export default Chatuser
