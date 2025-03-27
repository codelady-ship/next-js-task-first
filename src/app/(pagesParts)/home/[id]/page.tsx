
import axios from 'axios';

const UserDetail = async ({ params }: any) => { 
  const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">{user?.data?.username} Details</h1>
      <div className="bg-white p-6 border rounded-lg shadow-md max-w-4xl mx-auto">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Full Name:</h2>
          <p className="text-lg text-gray-600">{user?.data?.name}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Email:</h2>
          <p className="text-lg text-gray-600">{user?.data?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
