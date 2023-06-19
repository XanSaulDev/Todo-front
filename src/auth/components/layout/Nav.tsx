import { Link, NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <nav className="bg-teal-700 py-5 px-8 flex justify-between">
      <h1 className="text-4xl text-white font-semibold">
        <Link to="/">
          Todo App
        </Link>
      </h1>
      <ul className="flex gap-5 text-white items-center font-semibold">
        <NavLink to="/auth/login" >
          
          <li className="transition-colors duration-300 ease-in-out hover:text-teal-400 cursor-pointer border-2 py-2 px-4 rounded-md hover:border-teal-400">
            Login
          </li>
        </NavLink>
        <li className="transition-colors duration-300 ease-in-out hover:text-teal-400 cursor-pointer">
          <NavLink to="/auth/register">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
