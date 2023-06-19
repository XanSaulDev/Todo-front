import { Link, NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <nav className="bg-teal-700 py-4 px-8 flex justify-between">
      <h1 className="text-4xl text-white font-semibold">
        <Link to="/">
          Todo App
        </Link>
      </h1>
      <ul className="flex gap-5 text-white items-center font-semibold">
        <li className="transition-colors duration-300 ease-in-out hover:text-slate-400 cursor-pointer">
          <NavLink to="/auth/login" >
            Login
          </NavLink>
        </li>
        <li className="transition-colors duration-300 ease-in-out hover:text-slate-400 cursor-pointer">
          <NavLink to="/auth/register">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
