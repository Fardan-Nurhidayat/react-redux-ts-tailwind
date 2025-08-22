export default function Navbar() {
  return (
    <nav className='p-3 text-gold-sm text-light_sea_green-400 bg-baby_powder-900 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-gold-lg font-bold'>Resepku</h1>
        <ul className='flex space-x-4'>
          <li><a href='#' className='hover:text-gold-sm'>Home</a></li>
          <li><a href='#' className='hover:text-gold-sm'>Recipes</a></li>
          <li><a href='#' className='hover:text-gold-sm'>About</a></li>
          <li><a href='#' className='hover:text-gold-sm'>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}