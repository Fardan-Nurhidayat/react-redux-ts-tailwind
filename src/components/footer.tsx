export default function Footer() {
  return (
    <footer className='bg-gray-50 text-slate-500 p-4 text-center text-base font-semibold'>
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