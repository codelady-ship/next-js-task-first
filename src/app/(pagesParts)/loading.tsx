import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-2xl font-semibold mr-4">Loading...</div>
      <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;
