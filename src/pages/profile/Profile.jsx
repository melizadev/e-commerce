import { Mail, User } from "lucide-react";
import { useUser } from "../../context/UserContext";

const Profile = () => {
  const { userInfo } = useUser();

  return (
    <section className="min-h-[85vh] bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-black text-white p-8 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center text-4xl font-bold">
            {userInfo?.username?.charAt(0).toUpperCase()}
          </div>

          <h1 className="mt-4 text-2xl font-bold">{userInfo?.username}</h1>

          <p className="text-gray-300 text-sm mt-1">Mi perfil</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="bg-gray-200 p-3 rounded-full">
              <User size={20} className="text-gray-600" />
            </div>

            <div>
              <p className="text-sm text-gray-500">Nombre de usuario</p>

              <p className="font-medium text-gray-800">{userInfo?.username}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="bg-gray-200 p-3 rounded-full">
              <Mail size={20} className="text-gray-600" />
            </div>

            <div>
              <p className="text-sm text-gray-500">Correo electrónico</p>

              <p className="font-medium text-gray-800 break-all">
                {userInfo?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
