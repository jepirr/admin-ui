HEAD


import React, { useEffect, useState } from "react"; 
import UserCard from "./UserCard";
import { getUsers } from "./Services"; 

function Exercise() {

  const [users, setUsers] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      try {

        const data = await getUsers();

        setUsers(data);
      } catch (error) {

        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };

    fetchData(); 
  }, []);

 

import React from "react";
import UserCard from "./UserCard";

function Exercise() {
7545434d444af075ea7c13626cac797ca3214cc1
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
HEAD
          {}
          {users.map((user) => (
            <UserCard 
              key={user.email} 
              {...user}         
            />
          ))}

          <UserCard
            name="April"
            email="april@gmail.com"
            street="Jl. Imam Bonjol"
            city="Semarang"
          />
          <UserCard
            name="Yani"
            email="yani@gmail.com"
            street="Jl. Sudirman"
            city="Ungaran"
          />
          <UserCard
            name="Safitri"
            email="safitri@gmail.com"
            street="Jl. Pemuda"
            city="Kendal"
          />
7545434d444af075ea7c13626cac797ca3214cc1
        </div>
      </div>
    </>
  );
}

export default Exercise;