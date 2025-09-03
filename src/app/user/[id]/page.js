import { Button } from '@/components/ui/button';
import getUser from '@/lib/getUser';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";

const UserPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <div className=" p-5 lg:p-8  min-h-screen">
      <div className="container mx-auto bg-white shadow-md rounded-lg px-5 py-5 lg:px-10 lg:py-8">
        <div className='flex items-center justify-between mb-5'>
          <Link href='/'>  <Button className='bg-gray-300 font-thin lg:text-lg'><FaArrowLeft />
 Back to Users</Button></Link>
            <h1 className="lg:text-2xl font-semibold lg:mb-6">User Details</h1>
        </div>

        {/* Personal Information & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Personal Information */}
          <div className="bg-gray-100 p-4 lg:p-6 rounded-lg">
            <h2 className="font-semibold text-2xl mb-4">Personal Information</h2>
            <div className='mb-2'>
                <p><span className="text-gray-400 text-sm">Name</span></p>
            <p> <span className="font-medium lg:text-lg">{user?.name}</span></p>
            </div>
           <div className='mb-2'>
             <p><span className="text-gray-400 text-sm">Username</span></p>
            <p> <span className="font-medium lg:text-lg"> {user?.username}</span></p>
           </div>
           <div className='mb-2'>
             <p><span className="text-gray-400 text-sm">Email</span></p>
            <p> <span className="font-medium lg:text-lg"> {user?.email}</span></p>
           </div>
          <div className='mb-2'>
              <p><span className="text-gray-400 text-sm">Phone</span></p>
            <p> <span className="font-medium lg:text-lg"> {user?.phone}</span></p>
          </div>
            <div><p>
              <span className="text-gray-400 text-sm">Website</span>{' '}
             
            </p>
             <a
                href={`https://${user?.website}`}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {user?.website}
              </a></div>
          </div>

          {/* Address */}
          <div className="bg-gray-100 p-4 lg:p-6 rounded-lg">
            <h2 className="font-semibold text-2xl mb-4">Address</h2>
              <div className='mb-2'>
                <p><span className="text-gray-400 text-sm">Street</span></p>
            <p> <span className="font-medium lg:text-lg">{user?.address?.street}</span></p>
            </div>
           <div className='mb-2'>
             <p><span className="text-gray-400 text-sm">Suite</span></p>
            <p> <span className="font-medium lg:text-lg">  {user?.address?.suite}</span></p>
           </div>
           <div className='mb-2'>
             <p><span className="text-gray-400 text-sm">City</span></p>
            <p> <span className="font-medium lg:text-lg">{user?.address?.city}</span></p>
           </div>
          <div className='mb-2'>
              <p><span className="text-gray-400 text-sm">Zipcode</span></p>
            <p> <span className="font-medium lg:text-lg"> {user?.address?.zipcode}</span></p>
          </div>
          <div className='mb-2'>
              <p><span className="text-gray-400 text-sm">Geo Location</span></p>
            <p> <span className="font-medium lg:text-lg"> {user?.address?.geo?.lat}, {user?.address?.geo?.lng}</span></p>
          </div>
          </div>
        </div>

        {/* Company */}
        <div className="bg-gray-100 p-4 lg:p-6 rounded-lg">
          <h2 className="font-semibold lg:text-lg mb-4">Company</h2>

          <div className='lg:flex items-center justify-between text-left'>
               <div className='mb-2'>
              <p><span className="text-gray-400 text-sm">Company Name</span></p>
            <p> <span className="font-medium lg:text-lg">  {user?.company?.name}</span></p>
          </div>
             <div className='mb-2'>
              <p><span className="text-gray-400 text-sm">Catch Phrase</span></p>
            <p> <span className="font-medium lg:text-lg"> {user?.company?.catchPhrase}</span></p>
          </div>
             <div className='mb-2'>
              <p><span className="text-gray-400 text-sm text-left">Business</span></p>
            <p> <span className="font-medium lg:text-lg">  {user?.company?.bs}</span></p>
          </div>
          </div>
          
        </div>

       
      </div>
    </div>
  );
};

export default UserPage;
