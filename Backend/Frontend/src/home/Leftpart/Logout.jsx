
import { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios"
import Cookies from "js-cookie"
import toast from "react-hot-toast";
function Logout() {
   const [loading,setLoading]=useState(false)
  const handleLogout=async()=>{
    setLoading(true)
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("logout Successfully")
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in Logout", error);
    }
  }
 
  return (
    <>
      <hr />
      <div className=" h-[10vh] bg-slate-300">
        <div>
          <BiLogOutCircle
            className="text-5xl text-slate-500 hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-3 mt-1"onClick={handleLogout}
          />
        </div>
      </div>
    </>
  );
}

export default Logout;
