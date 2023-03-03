import React, { useState } from "react";

const Admin = () => {
  const [key, setKey] = useState("");
  const [enteries, setEnteries] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event)=>{
    let value = event.target.value;
    setKey(value);
  }

  const handleClick = async (event)=>{
    event.preventDefault();
    setLoading(true);
    const response = await fetch(`/api/admin?key=${key}`);
    const json = await response.json();
    setLoading(false);
    if(json.success) setEnteries(json.students);
    else alert(json.error);

  }

  return (
    <>
      <div className="w-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="secretkey"
            >
              Secret Key
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="secretkey"
              type="password"
              placeholder="Secret Key"
              name="key"
              value={key}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick = {handleClick}
            >
              Show Enteries
            </button>
          </div>
        </form>
      </div>
      <div className="my-4 mx-12">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-slate-500 text-white ">
              <th>Name</th>
              <th>Roll Number</th>
              <th>College Name</th>
            </tr>
          </thead>
          <tbody>
            {enteries.length>0&&enteries.map((item, key) => {
              return (
                  <tr key={item.roll} className="bg-gray-100 text-center">
                    <td>{item.name}</td>
                    <td>{item.roll}</td>
                    <td>{item.col}</td>
                  </tr>
              );
            })}
          </tbody>
        </table>
        {loading&&<h1 className="text-4xl text-center">Loading...</h1>}
      </div>
    </>
  );
};

export default Admin;
