import { Link } from "react-router-dom"

interface NavProps{
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  className?: string
}

export const Nav = ({children,className}:NavProps) => {
  return (
    <nav className={`bg-teal-700 py-5 px-8 flex justify-between ${className}`}>
      <h1 className="text-4xl text-white font-semibold">
        <Link to="/">
          Todo App
        </Link>
      </h1>
      <ul className="flex gap-5 text-white items-center font-semibold">
        {children}
      </ul>
    </nav>
  )
}
