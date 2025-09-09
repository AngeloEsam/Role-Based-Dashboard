import { useContext, useState } from "react";
import { ContextUseState, User } from "../context/contextUser";

const UsersPage = () => {
  const context = useContext(ContextUseState);
  const users = context?.users ?? [];
  const user = context?.user;

  const role = user?.role;
  const [userList, setUserList] = useState<User[]>(users);

  const handleDelete = (id: number) => {
    if (role !== "HR") return; // Manager can't delete
    if (user?.id === id) return; // HR can't delete himself
    setUserList(userList.filter((u) => u.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users Management</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userList.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{u.id}</td>
                <td className="px-6 py-4 font-medium text-gray-800">{u.name}</td>
                <td className="px-6 py-4">{u.role}</td>
                <td className="px-6 py-4 text-center">
                  {role === "HR" ? (
                    <button
                      onClick={() => handleDelete(u.id)}
                      disabled={user?.id === u.id} // HR can't delete himself
                      className={`px-4 py-2 rounded text-white font-medium transition ${
                        user?.id === u.id
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      Delete
                    </button>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 rounded bg-gray-400 text-white font-medium cursor-not-allowed"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
