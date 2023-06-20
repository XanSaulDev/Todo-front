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
          <li>
            <NavLink 
              to="/login" 
              className="
                transition-colors duration-300 ease-in-out hover:text-teal-400 
                cursor-pointer border-2 py-2 px-5 rounded-md hover:border-teal-400" 
            >
                Login
            </NavLink>
          </li>
        <li className="transition-colors duration-300 ease-in-out hover:text-teal-400 cursor-pointer">
          <NavLink to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
