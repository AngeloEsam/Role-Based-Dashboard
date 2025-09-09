import React from "react";

type NavbarProps = {
  user: {
    name: string;
    role: string;
    photo: string;
    phone?: string;
  } | null;
  onEdit: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ user, onEdit }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h3 className="text-lg max-md:text-sm font-bold">Welcome, {user?.name}</h3>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold max-md:text-sm">{user?.name}</p>
          <p className="text-sm text-gray-500">{user?.role}</p>
        </div>
        <img
          src={user?.photo}
          alt="profile"
          className="w-10 h-10 rounded-full border"
        />
        <button
          onClick={onEdit}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Navbar;
