import React, { useState } from "react";

type EditProfileModalProps = {
  user: { name: string; phone?: string };
  onSave: (updatedUser: { name: string; phone?: string }) => void;
  onClose: () => void;
};

const EditProfileModal: React.FC<EditProfileModalProps> = ({ user, onSave, onClose }) => {
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, phone });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 w-96 shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />
        <label className="block mb-2 text-sm font-medium">Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileModal;
