import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="flex justify-between w-full p-4 text-sm font-semibold shadow-lg shadow-gray-200 bg-form-color">
      <img src="" alt="" />
      <ul className="flex px-2 text-white gap-9">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
