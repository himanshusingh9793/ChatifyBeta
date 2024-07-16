
import { useSocketContext } from "../../context/SocketContext.jsx"
import useConversation from "../../zustand/useConversation.js";
// import { useSocketContext } from "../../context/SocketContext.jsx";
import logo from "../../assets/logo.png"
function Users({user}) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const {socket,onlineUsers}=useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  
  return (
    <div    className={`hover:bg-slate-600 duration-300 ${
      isSelected ? "bg-slate-300" : ""
    }`}
    onClick={() => setSelectedConversation(user)}>
      <div className="flex space-x-4 px-8 py-3 hover:bg-sky-100 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline?"online":""}`}>
          <div className="w-12 rounded-full">
            <img src={logo} />
          </div>
        </div>
        <div className="text-slate-500 font-semibold">
          <h1>{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default Users
