import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#EAEEFE,#e3cc70)] p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="bg-[#e3cc70] hover:bg-[#cbb65e] text-white px-4 py-2 rounded-md"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Full Name</label>
              <input 
                type="text"
                disabled={!isEditing}
                value={user?.FirsName || ""}
                className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input 
                type="email"
                disabled={true}
                value={user?.email || ""}
                className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Phone Number</label>
              <input 
                type="tel"
                disabled={!isEditing}
                value={user?.phone || ""}
                className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Address</label>
              <textarea 
                disabled={!isEditing}
                value={user?.address || ""}
                rows={3}
                className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">PAN Number</label>
              <input 
                type="text"
                disabled={!isEditing}
                value={user?.pan || ""}
                className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Aadhaar Number</label>
              <input 
                type="text"
                disabled={!isEditing}
                value={user?.aadhaar || ""}
                className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Status</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-sm font-medium text-gray-600">Account Type</h3>
              <p className="text-lg font-semibold text-gray-800">
                {user?.accountType || "Standard"}
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-sm font-medium text-gray-600">KYC Status</h3>
              <p className="text-lg font-semibold text-green-600">
                {user?.kycStatus || "Verified"}
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-sm font-medium text-gray-600">Member Since</h3>
              <p className="text-lg font-semibold text-gray-800">
                {new Date(user?.createdAt).toLocaleDateString() || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;