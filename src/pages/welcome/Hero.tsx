import Button from "../../components/button";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const names = ["Baca", "Nikmati", "Masak"];
const initName = "Baca";

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isStarted) return;
    const interval = setInterval(() => {
      setCurrentIdx(prev => (prev + 1) % names.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [isStarted]);

  const displayName = isStarted ? names[currentIdx] : initName;

  return (
    <section
      className='py-16'
      aria-label='Hero Section'>
      <div className='container mx-auto text-center flex items-center justify-center'>
        <div className='md:w-1/2 lg:w-9/12 w-full'>
          <div className='flex items-center justify-center gap-2'>
            <AnimatePresence mode='wait'>
              <motion.span
                key={displayName}
                className='text-gold-lg font-bold text-light_sea_green-400'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1 }}>
                {displayName}
              </motion.span>
            </AnimatePresence>
            <h1 className='text-gold-lg font-bold text-light_sea_green-400'>
              aneka ragam resep yang ditulis dengan cinta
            </h1>
          </div>

          <motion.p className='text-gold-md mb-6 text-light_sea_green-600'>
            Pelajari dan rasakan berbagai resep lezat yang telah kami siapkan untuk Anda. Dari masakan sehari-hari hingga hidangan istimewa, kami punya semuanya.
          </motion.p>
          <Button
            style='primary'
            onClick={() => alert("Button Clicked!")}
            className='cursor-pointer'>
            Eksplor Resep
          </Button>
        </div>
      </div>
    </section>
  );
}

