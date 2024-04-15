import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-screen p-2 text-white bg-black z-10">
            <ul className=" flex justify-center items-center">
                <li><Link to="/">WORK</Link></li>
                <li className="px-10"><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
    )
}