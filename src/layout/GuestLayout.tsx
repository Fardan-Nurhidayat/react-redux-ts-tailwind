import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GuestLayout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 pt-16'>
        {" "}
        {/* pt-16 untuk offset navbar fixed */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
