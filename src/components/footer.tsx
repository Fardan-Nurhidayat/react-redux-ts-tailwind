export default function Footer() {
  return (
    <footer className='relative bottom-0 left-0 w-full text-center py-4 text-light_sea_green-400 bg-baby_powder-900 shadow-md'>
      <p>
        &copy; {new Date().getFullYear()} Develop with {" "}
        <span
          role='img'
          aria-label='love'>
          ❤️
        </span>{" "}
        By Fardan Nurhidayat
      </p>
    </footer>
  );
}