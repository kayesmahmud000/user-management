
'use client'
import { useState, useCallback } from "react"
import SearchInputWithButton from "./SearchInputWithButton";
import UserDataTable from "./UserDataTable";
import PaginationControls from "./PaginationControls";

const UserManagement = ({ initialUsers }) => {
  const [searchText, setSearchText] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(initialUsers)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  
// handleSearch
  const handleSearch = useCallback((query) => {
    if (!query.trim()) {
      setFilteredUsers(initialUsers)
      setCurrentPage(1)
      return
    }
    
    const lowerCaseQuery = query.toLowerCase()
    const filtered = initialUsers.filter(user => 
      user.name.toLowerCase().includes(lowerCaseQuery) || 
      user.email.toLowerCase().includes(lowerCaseQuery)
    )
    
    setFilteredUsers(filtered)
    setCurrentPage(1)
  }, [initialUsers])
  
  // Calculate pagination values
  const totalUsers = filteredUsers.length
  const totalPages = Math.ceil(totalUsers / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)
  
  // Create pagination controls
  const paginationControls = totalPages > 1 ? (
    <PaginationControls 
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  ) : null

  return (
    <div className="bg-white w-full rounded-xl shadow-md px-5 py-5 min-h-[100px]">
      <h2 className="text-2xl font-semibold">User Management</h2>
      
      <div className="w-full my-5">
        <SearchInputWithButton 
          onSearch={handleSearch}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </div>
      
      <div>
        <UserDataTable 
          users={paginatedUsers} 
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalUsers={totalUsers}
          paginationControls={paginationControls}
        />
      </div>
    </div>
  );
};

export default UserManagement;