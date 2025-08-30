import { Link, Outlet } from "react-router";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
export default function AuthLayout() {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='absolute top-20 left-10 flex items-center text-gray-600'>
        <Link
          to='/'
          className='flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:underline transition-colors'>
          <ChevronLeftIcon className='h-5 w-5 mx-2' />
          Home
        </Link>
      </div>
      <Outlet />
    </div>
  );
}