import UserManagement from "@/components/UserManagement";
import getAllUserData from "@/lib/getUserData";

export default async function Home() {
    const users = await getAllUserData()
  return (
    <div className=" container mx-auto px-5 py-5">
    <UserManagement initialUsers={users}/>
    </div>
  );
}
