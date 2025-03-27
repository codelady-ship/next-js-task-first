import React from 'react';
import axios from 'axios';
import { IUser } from '@/Interface/User';
import Link  from 'next/link';

const Home = async() => {
  const {data}= await axios.get('https://jsonplaceholder.typicode.com/users')

  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-center mb-6">Users Page (ssr-le)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map(({ id, username }:IUser) => (
          <div key={id} className="bg-white p-4 border rounded-lg shadow-md">
            <Link href={`/user/${id}`} className="text-xl font-semibold">{username}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
