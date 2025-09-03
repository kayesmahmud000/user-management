
"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

const UserDataTable = ({ users, currentPage, itemsPerPage, totalUsers, paginationControls }) => {
  const router = useRouter();
  
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalUsers);

  return (
    <>
      <Table>
        <TableCaption>Showing {startIndex} to {endIndex} of {totalUsers} users</TableCaption>
        <TableHeader>
          <TableRow className="bg-slate-50 border-b-0">
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-left">Email</TableHead>
            <TableHead className="text-left">Phone</TableHead>
            <TableHead className="text-left">Company</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, i) => (
            <TableRow
              key={i}
              onClick={() => router.push(`/user/${user?.id}`)}
              className="hover:bg-slate-50 border-b-gray-300 cursor-pointer"
            >
              <TableCell className="font-medium py-4">
                <div>{user?.name}</div>
                <div className="text-gray-500 font-normal text-sm">
                  {user?.username}
                </div>
              </TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?.phone}</TableCell>
              <TableCell>{user?.company?.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {paginationControls}
    </>
  );
};

export default UserDataTable;