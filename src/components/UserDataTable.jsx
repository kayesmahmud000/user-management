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

const users = [
  {
    name: "Leanne Graham",
    username: "@Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    company: "Romaguera-Crona",
  },
  {
    name: "Ervin Howell",
    username: "@Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    company: "Deckow-Crist",
  },
  {
    name: "Clementine Bauch",
    username: "@Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    name: "Patricia Lebsack",
    username: "@Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    company: "Robel-Corkery",
  },
  {
    name: "Chelsey Dietrich",
    username: "@Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    company: "Keebler LLC",
  },
  {
    name: "Mrs. Dennis Schulist",
    username: "@Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    company: "Considine-Lockman",
  },
  {
    name: "Kurtis Weissnat",
    username: "@Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
    company: "Johns Group",
  },
  {
    name: "Nicholas Runolfsdottir V",
    username: "@Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
    company: "Abernathy Group",
  },
  {
    name: "Glenna Reichert",
    username: "@Delphine",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
    company: "Yost and Sons",
  },
  {
    name: "Clementina DuBuque",
    username: "@Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
    company: "Hoeger LLC",
  },
];

const UserDataTable = () => {
  return (
    <Table>
      <TableCaption>Showing 10 of 10 users</TableCaption>
      <TableHeader >
        <TableRow className='bg-slate-50 border-b-0 '>
          <TableHead className="text-left">Name</TableHead>
          <TableHead className="text-left">Email</TableHead>
          <TableHead className="text-left">Phone</TableHead>
          <TableHead className="text-left">Company</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, i) => (
          <TableRow key={i} className='hover:bg-slate-50 border-b-gray-300'>
            <TableCell className="font-medium py-4">
              <div>{user.name}</div>
              <div className="text-gray-500 font-normal text-sm">{user.username}</div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.company}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserDataTable;
