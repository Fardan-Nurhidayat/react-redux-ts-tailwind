import React from "react";
import { motion } from "motion/react";
interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description:
      "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    image: "/images/welcome/image-1.png",
  },
  {
    id: 2,
    title: "Chicken Teriyaki",
    description: "Grilled chicken glazed with savory-sweet teriyaki sauce.",
    image: "/images/welcome/image-1.png",
  },
  {
    id: 3,
    title: "Vegetable Curry",
    description: "A flavorful curry packed with fresh vegetables and spices.",
    image: "/images/welcome/image-1.png",
  },
];

const Receipes: React.FC = () => {
  return (
    <section
      id="receipes"
      className='py-16 bg-baby_powder-50'
      aria-label='Receipes Section'>
      <div className='max-w-5xl mx-auto px-4 text-center'>
        <motion.h2 
        initial='hidden'
        whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5}}
        className='text-gold-lg font-bold mb-8 text-light_sea_green-400'>
          Resep Pilihan
        </motion.h2>
        <div 
        className='grid gap-8 md:grid-cols-3'>
          {recipes.map(recipe => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: recipe.id * 0.2, duration: 0.5 }}
              key={recipe.id}
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
              <img
                src={recipe.image}
                alt={recipe.title}
                className='w-full h-48 object-cover rounded-md mb-4 border-2 border-light_sea_green-100'
              />
              <h3 className='text-gold-md font-semibold mb-2 text-light_sea_green-600'>
                {recipe.title}
              </h3>
              <p className='text-gold-sm text-light_sea_green-500'>
                {recipe.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Receipes;
