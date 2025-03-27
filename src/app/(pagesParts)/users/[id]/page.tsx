"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";


const Page = () => {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(({ data }) => {
        setUser(data);
      })
  }, [id]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">
        User Details-csr
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Username:</h2>
            <p className="text-lg text-gray-600">{user?.username}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Email:</h2>
            <p className="text-lg text-gray-600">{user?.email}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Full Name:</h2>
            <p className="text-lg text-gray-600">{user?.name}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Phone:</h2>
            <p className="text-lg text-gray-600">{user?.phone}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Address:</h2>
            <p className="text-lg text-gray-600">
              {user?.address?.street}, {user?.address?.city}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Company:</h2>
            <p className="text-lg text-gray-600">{user?.company?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
