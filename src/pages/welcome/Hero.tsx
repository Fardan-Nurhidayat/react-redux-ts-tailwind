import Button from "../../components/button";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-lg mb-6">This is a simple hero section.</p>
      <Button style="primary" onClick={() => alert("Button Clicked!")} className="cursor-pointer">
        Get Started
      </Button>
    </div>
  );
}