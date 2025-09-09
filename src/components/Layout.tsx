import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { ContextUseState, User } from "../context/contextUser";
import { useContext } from "react";
import EditProfileModal from "./EditProfileModal";

const Layout = () => {
  const { user, setUser, isEditing, setIsEditing } = useContext(ContextUseState)!;

  const handleSaveProfile = (updatedUser: { name: string; phone?: string }) => {
    if (!user) return;
    const newUser: User = { ...user, ...updatedUser };
    setUser(newUser);
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
  };
  return (
    <div className="flex h-screen  overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar role={user?.role} />

      {/* Main content */}
      <div className="flex flex-col flex-1 min-h-screen overflow-y-auto">
        {/* Navbar */}
        <Navbar user={user} onEdit={() => setIsEditing(true)} />

        {/* Content */}
        <Outlet />
      </div>
      {/* Edit Profile Modal */}
      {isEditing && user && (
        <EditProfileModal
          user={user}
          onSave={handleSaveProfile}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  )
}

export default Layout