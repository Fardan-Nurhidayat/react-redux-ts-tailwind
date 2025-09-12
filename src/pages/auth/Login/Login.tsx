import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import { useState } from "react";
import { Link } from "react-router";
type LoginData = {
  email: string;
  password: string;
};
export default function Login() {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    authenticateUser(email, password);
  };

  const authenticateUser = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
        setFormData({ email: "", password: "" });
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className='bg-white border border-gray-300 rounded-lg p-6 w-full max-w-md shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <Label
            htmlFor='email'
            text='Email'
          />
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Masukan email anda'
            value={formData.email}
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
            placeholder='Masukan password anda'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className='my-4'>
          <Link
            to='/auth/register'
            className='text-sm text-light_sea_green-400 hover:underline'>
            Belum punya akun?
            <span className='font-bold ml-1'>Register</span>
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
