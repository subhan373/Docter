import React from "react";

export default function Profile({ user }) {
  if (!user) return <p className="text-center mt-10">No user logged in.</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <div className="flex items-center gap-4">
        <img src="https://i.pravatar.cc/100" alt="User" className="w-20 h-20 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{user.fullName}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Birthday:</strong> {user.birthday}</p>
      </div>
    </div>
  );
}
