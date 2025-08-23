import React from "react";

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
    image: "https://source.unsplash.com/400x300/?spaghetti,carbonara",
  },
  {
    id: 2,
    title: "Chicken Teriyaki",
    description: "Grilled chicken glazed with savory-sweet teriyaki sauce.",
    image: "https://source.unsplash.com/400x300/?chicken,teriyaki",
  },
  {
    id: 3,
    title: "Vegetable Curry",
    description: "A flavorful curry packed with fresh vegetables and spices.",
    image: "https://source.unsplash.com/400x300/?vegetable,curry",
  },
];

const Receipes: React.FC = () => {
  return (
    <section
      className='py-16 bg-baby_powder-50'
      aria-label='Receipes Section'>
      <div className='max-w-5xl mx-auto px-4 text-center'>
        <h2 className='text-gold-lg font-bold mb-8 text-light_sea_green-400'>
          Resep Pilihan
        </h2>
        <div className='grid gap-8 md:grid-cols-3'>
          {recipes.map(recipe => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Receipes;
