import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li className=" bg-black text-white  p-4 rounded-xl font-bold hover:bg-green-400 hover:text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="bg-cyan-500  p-4 rounded-xl font-bold hover:bg-green-400 hover:text-white">
        <NavLink to="/product">Product</NavLink>
      </li>
      <li className="bg-cyan-500  p-4 rounded-xl font-bold hover:bg-green-400 hover:text-white">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="bg-cyan-500  p-4 rounded-xl font-bold hover:bg-green-400 hover:text-white">
        <NavLink to="/service">Service</NavLink>
      </li>
      <li className="bg-cyan-500  p-4 rounded-xl font-bold hover:bg-green-400 hover:text-white">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-800 rounded-lg mt-2 shadow-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-active btn-secondary normal-case text-xl">E-commerce</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 gap-4 ">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-success">Button</a>
      </div>
    </div>
  );
};

export default Header;