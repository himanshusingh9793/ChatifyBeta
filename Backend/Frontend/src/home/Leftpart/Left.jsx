import Logout from "./Logout"
import Seach from "./Seach"
import User from "./User"

function Left() {
  return (
    <div className="w-full bg-base-300 text-slate-800">
      
      <Seach/>
      <div  className="overflow-y-scroll hide-scroll" style={{minHeight:"calc(84vh - 10vh)"}}>
    
      <User/>

    </div>
      <Logout/>
    </div>
  )
}

export default Left
