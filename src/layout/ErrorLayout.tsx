import { Outlet } from "react-router";
export default function ErrorLayout({
  status,
  message,
}: {
  status: number;
  message: string;
}) {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-1 pt-16'>
        {" "}{/* pt-16 untuk offset navbar fixed */}
        <div className='max-w-5xl mx-auto px-4 text-center py-20'>
          <h1 className='text-6xl font-bold mb-4 text-red-600'>{status}</h1>
          <p className='text-xl text-gray-700 mb-8'>{message}</p>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
