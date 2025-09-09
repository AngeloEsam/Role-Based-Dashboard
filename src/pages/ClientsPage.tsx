import { useContext, useState } from "react";
import { ContextUseState, Client } from "../context/contextUser";

const ClientsPage = () => {
  const context = useContext(ContextUseState);
  const clients = context?.clients ?? [];
  const user = context?.user;

  const role = user?.role;
  const [clientList, setClientList] = useState<Client[]>(clients);
  const [newClient, setNewClient] = useState({ name: "", email: "", phone: "" });

  const handleAddClient = () => {
    if (role !== "Manager" && role !== "Sales") return;

    if (!newClient.name || !newClient.email || !newClient.phone) {
      alert("Please fill all fields!");
      return;
    }

    const newId = clientList.length ? clientList[clientList.length - 1].id + 1 : 1;
    const client: Client = { id: newId, ...newClient };
    setClientList([...clientList, client]);

    // Reset form
    setNewClient({ name: "", email: "", phone: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Clients Management</h1>

      {/* Add Client Form */}
      {(role === "Manager" || role === "Sales") && (
        <div className="mb-6 p-4 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Add New Client</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newClient.name}
              onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
              className="border px-3 py-2 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email"
              value={newClient.email}
              onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
              className="border px-3 py-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              value={newClient.phone}
              onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
              className="border px-3 py-2 rounded w-full"
            />
            <button
              onClick={handleAddClient}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>
        </div>
      )}

      {/* Clients Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clientList.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{c.id}</td>
                <td className="px-6 py-4 font-medium text-gray-800">{c.name}</td>
                <td className="px-6 py-4">{c.email}</td>
                <td className="px-6 py-4">{c.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsPage;
