import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className='py-16'
      aria-label='Hero Section'>
      <div className='container mx-auto text-center flex items-center justify-center'>
        <div className='md:w-1/2 lg:w-6/12 w-full'>
          <motion.h1
            animate={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='text-gold-lg font-bold text-light_sea_green-400'>
            Baca. Masak. Nikmati. aneka ragam resep yang ditulis dengan cinta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='text-gold-md mb-6 text-light_sea_green-600'>
            Pelajari dan rasakan berbagai resep lezat yang telah kami siapkan
            untuk Anda. Dari masakan sehari-hari hingga hidangan istimewa, kami
            punya semuanya.
          </motion.p>
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <a href='#receipes' className="no-underline text-sm font-semibold text-white bg-light_sea_green-400 hover:bg-light_sea_green-600 rounded px-6 py-3 shadow-md inline-block transition-colors duration-300">
              Eksplor Resep
            </a>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
