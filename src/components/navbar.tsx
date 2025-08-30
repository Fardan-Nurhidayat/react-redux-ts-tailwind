import { Link, useNavigate } from "react-router";
import Button from "./Button";

type NavLink = {
  name: string;
  href: string;
  type: "anchor" | "route";
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/", type: "anchor" },
  { name: "Recipes", href: "/receipes", type: "anchor" }, 
  { name: "About", href: "/about", type: "anchor" },
];

export default function Navbar() {
  const navigate = useNavigate();

  const handleAuthClick = (action: "login" | "register") => {
    navigate(`/auth/${action}`);
  };

  return (
    <nav className='fixed top-0 w-full z-50 p-3 text-gold-sm text-light_sea_green-400 bg-baby_powder-900 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo - navigasi ke home */}
        <Link
          to='/'
          className='text-gold-lg font-bold hover:text-gold-400'>
          ResepKita
        </Link>

        {/* Navigation Links */}
        <ul className='flex space-x-4'>
          {navLinks.map(link => (
            <li key={link.name}>
              {link.type === "anchor" ? (
                <a
                  href={link.href}
                  className='hover:text-gold-400'>
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className='hover:text-gold-400'>
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className='flex space-x-2'>
          <Button
            type="button"
            onClick={() => handleAuthClick("login")}
            style='primary' 
            className="cursor-pointer">
            Login
          </Button>
          <Button
            type="button"
            onClick={() => handleAuthClick("register")}
            style='secondary'
            className="cursor-pointer">
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
}
