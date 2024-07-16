import useGetAllUsers from "../../context/useGetAlluser";
import Users from "./Users";

function User() {
  const [allUsers,loading]=useGetAllUsers();
  console.log(allUsers);
  return (
    <div className="pt-6">
      <h1 className="px-8 py-2 text-slate-500 font-semibold rounded-md bg-primary-content">
        Messages
      </h1>
      <div className="overflow-y-scroll hide-scroll py-1" style={{maxHeight:"calc(84vh - 10vh)"}}>
      {
        allUsers.map((user,index)=>(
          <Users key={index} user={user} />
        )
        )
      }
      </div>
    </div>
  );
}

export default User;
