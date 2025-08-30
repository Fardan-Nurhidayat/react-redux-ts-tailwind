import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import { useState } from "react";
import { Link } from "react-router";

type LoginData = {
  username: string;
  password: string;
}
export default function Login() {
  const [formData , setFormData] = useState<LoginData>({
    username: "",
    password: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
  }

  return (
    <div className='bg-white border border-gray-300 rounded-lg p-6 w-full max-w-md shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
      <form
        onSubmit={handleSubmit}>
        <div className='mb-4'>
          <Label
            htmlFor='username'
            text='Username'
          />
          <Input
            type='text'
            id='username'
            name='username'
            placeholder='Enter your username'
            value={formData.username}
            onChange={handleChange}
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
            placeholder='Enter your password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <Link
            to="/auth/register"
            className="text-sm text-light_sea_green-400 hover:underline">
            Belum punya akun? 
            <span className="font-bold ml-1">
              Register
            </span>
          </Link>
        </div>
        <Button
          type='submit'
          className='w-full'>
          Login
        </Button>
      </form>
    </div>
  );
}
