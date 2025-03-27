//client side-le data cekmek
"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link  from 'next/link';
import { IUser } from '@/Interface/User';
const Users = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        setUsers(data);
      })
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-center mb-6">Users Page (csr-le)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map(({ id, username }:IUser) => (
          <Link  href={`/products/${id}`} key={id} className="bg-white p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{username}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Users;
