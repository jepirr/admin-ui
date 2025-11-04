HEAD


import React, { useState } from "react";

function UserCard(props) {

  const { name, email, street, city, ...rest } = props;
  


import React, { useState } from "react";

function UserCard(props) {
  const { name, email, street, city } = props;
7545434d444af075ea7c13626cac797ca3214cc1
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>

HEAD
      {}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}

      {}
      <button
        className={`mt-4 text-white p-2 rounded-md ${
          clicked ? "bg-green-600" : "bg-gray-500" 
        }`}

      <button
        className={`${
          clicked ? "bg-green-600" : "bg-gray-500"
        } text-white p-2 rounded-md`}
7545434d444af075ea7c13626cac797ca3214cc1
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

HEAD
export default UserCard;

export default UserCard;

/*
Catatan soal Langkah 5: Var / Let / Const

Di semua kode ini, saya udah ngikutin best practice dari dokumennya. 
Saya cuma pakai `const` (kayak const { name... } dan const [clicked... ]).

Alasannya karea nilai-nilai ini (data props yg di-destrukturisasi 
sama array dari useState) itu gak pernah saya assign ulang nilainya 
secara langsung. Ini bikin kode saya jadi lebih aman dan ngurangin 
risiko bug aneh-aneh.
*/
7545434d444af075ea7c13626cac797ca3214cc1
