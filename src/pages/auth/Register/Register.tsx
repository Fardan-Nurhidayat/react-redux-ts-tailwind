import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useState } from "react";
import { Link } from "react-router";
import type { RegisterCredentials } from "@/types/auth";
export default function Register() {
  const [formData, setFormData] = useState<RegisterCredentials>({
    nama: "",
    email: "",
    password: "",
  });

  const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // simple client validation
    if (!formData.nama || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.nama,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration successful! Please login.");
        setFormData({ nama: "", email: "", password: "" });
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Registration error:", error);
    }
  };
  return (
    <div className='bg-white border border-gray-300 rounded-lg p-6 w-full max-w-md shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <Label
            htmlFor='nama'
            text='Nama'
          />
          <Input
            type='text'
            id='nama'
            name='nama'
            placeholder='Masukkan nama'
            value={formData.nama}
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
        <div className='my-4'>
          <Link
            to='/auth/login'
            className='text-sm text-light_sea_green-400 hover:underline'>
            Sudah punya akun?
            <span className='font-bold ml-1'>Login</span>
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
