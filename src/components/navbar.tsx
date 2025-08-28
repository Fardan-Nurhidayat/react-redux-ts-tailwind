// define list of navigation links
interface NavLink {
  name: string;
  href: string;
}
const navLinks:NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Recipes', href: '#receipes' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className='p-3 text-gold-sm text-light_sea_green-400 bg-baby_powder-900 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-gold-lg font-bold'>Resepku</h1>
        <ul className='flex space-x-4'>
          {navLinks.map((link) => (
            <li key={link.name}> 
              <a href={link.href} className='hover:text-gold-400'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}