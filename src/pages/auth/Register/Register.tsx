import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useState } from "react";
import { Link } from "react-router";
export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register data:", formData);
  }
  return (
    <div className='bg-white border border-gray-300 rounded-lg p-6 w-full max-w-md shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
      <form onSubmit={handleSubmit} >
        <div className='mb-4'>
          <Label
            htmlFor='username'
            text='Username'
          />
          <Input
            type='text'
            id='username'
            name='username'
            placeholder='Masukkan username'
            value={formData.username}
            onChange={handleChnage}
          />
        </div>
        <div className='mb-4'>
          <Label
            htmlFor='email'
            text='Email'
          />
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Masukkan email'
            value={formData.email}
            onChange={handleChnage}
          />
        </div>
        <div className='mb-6'>
          <Label
            htmlFor='password'
            text='Password'
          />
          <Input
            type='password'
            id='password'
            name='password'
            placeholder='Masukkan password'
            value={formData.password}
            onChange={handleChnage}
          />
        </div>
        <div className="my-4">
          <Link
            to="/auth/login"
            className="text-sm text-light_sea_green-400 hover:underline">
            Sudah punya akun? 
            <span className="font-bold ml-1">
              Login
            </span>
          </Link>
        </div>
        <Button
          type='submit'
          className='w-full cursor-pointer'>
          Register
        </Button>
      </form>
    </div>
  );
}
