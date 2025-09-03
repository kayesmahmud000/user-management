
import getAllUserData from "@/lib/getUserData";
import SearchInputWithButton from "./SearchInputWithButton";
import UserDataTable from "./UserDataTable";


const  UserManagement  = async() => {
 const users =await getAllUserData()
 console.log(users)


    return (
        <div className="bg-white w-full rounded-xl shadow-md px-5 py-5 min-h-[100px]">
            <h2 className="text-2xl font-semibold">User Management </h2>

            <div className="w-full my-5">
                <SearchInputWithButton/>
            </div>
            <div>
                <UserDataTable users={users}/>
            </div>
        </div>
    );
};

export default UserManagement;