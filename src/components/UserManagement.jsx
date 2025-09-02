import SearchInputWithButton from "./SearchInputWithButton";


const UserManagement = () => {
    return (
        <div className="bg-white w-full rounded-xl shadow-md px-5 py-5 min-h-[100px]">
            <h2 className="text-2xl font-semibold">User Management </h2>

            <div className="w-full">
                <SearchInputWithButton/>
            </div>
        </div>
    );
};

export default UserManagement;