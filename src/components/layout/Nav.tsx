import { Link } from "react-router-dom"

interface NavProps{
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  className?: string
}

export const Nav = ({children,className}:NavProps) => {
  return (
    <nav className={`bg-teal-700 py-5 px-8 grid md:grid-cols-2 md:gap-0 gap-5 ${className}`}>
      <h1 className="text-4xl text-white font-semibold md:text-start text-center">
        <Link to="/">
          Todo App
        </Link>
      </h1>
      <ul className="w-full flex flex-wrap gap-5 justify-center md:justify-end text-white items-center font-semibold">
        {children}
      </ul>
    </nav>
  )
}
