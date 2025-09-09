import React from "react";

type StatsProps = {
  role: string;
  usersCount: number;
  clientsCount: number;
};

const Stats: React.FC<StatsProps> = ({ role, usersCount, clientsCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {(role === "Manager" || role === "HR") && (
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-lg font-bold">Users</h2>
          <p className="text-3xl">{usersCount}</p>
        </div>
      )}
      {(role === "Manager" || role === "Sales") && (
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-lg font-bold">Clients</h2>
          <p className="text-3xl">{clientsCount}</p>
        </div>
      )}
    </div>
  );
};

export default Stats;
