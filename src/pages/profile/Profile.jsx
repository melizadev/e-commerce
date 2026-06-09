import { useEffect } from "react";
import { useUser } from "../../context/UserContext";

const Profile = () => {
  const { userInfo } = useUser();

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className="min-h-[85vh] bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600">
            {userInfo?.username?.charAt(0).toUpperCase()}
          </div>

          <h1 className="mt-4 text-2xl font-bold text-gray-800">My Profile</h1>

          <p className="text-gray-500 text-sm">
            Manage your account information
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Username
            </label>

            <div className="mt-1 p-3 border rounded-lg bg-gray-50 text-gray-800">
              {userInfo?.username}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">
              Email
            </label>

            <div className="mt-1 p-3 border rounded-lg bg-gray-50 text-gray-800">
              {userInfo?.email}
            </div>
          </div>
        </div>

        <button className="w-full mt-8 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
