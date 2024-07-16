import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAlluser";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
function Seach() {

  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();
  console.log(allUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };
  return (
    <div className="h-[10vh] py-6">
      <div className="px-20 py-4">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3 ">
          <label className="input   input-bordered input-info w-[100%] flex items-center gap-2 ">
            <input type="text" className="grow" placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <button>
            <FaSearch className="text-5xl p-2 hover:bg-sky-100 rounded-full duration-300"/>
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Seach;
