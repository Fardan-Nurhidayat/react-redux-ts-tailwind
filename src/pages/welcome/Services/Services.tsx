import { motion } from "motion/react";

const ListServices = [
  {
    title: "Pencarian Resep",
    description:
      "Temukan resep favorit Anda dengan mudah menggunakan fitur pencarian kami yang cepat dan akurat.",
    icon: "search",
  },
  {
    title: "Kategori Resep",
    description:
      "Jelajahi berbagai kategori resep yang kami sediakan, mulai dari masakan tradisional hingga hidangan internasional.",
    icon: "category",
  },
  {
    title: "Tips Memasak",
    description:
      "Dapatkan tips dan trik memasak dari para ahli untuk meningkatkan keterampilan memasak Anda.",
    icon: "tips",
  },
  {
    title: "Favorit Saya",
    description: "Simpan resep favorit Anda untuk akses cepat di lain waktu.",
    icon: "favorite",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className='py-8 bg-baby_powder-50'
      aria-label='Services Section'>
      <div className='container mx-auto text-center'>
        <motion.h2
          initial='hidden'
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='text-gold-lg font-bold mb-8 text-light_sea_green-400'>
          Layanan Kami
        </motion.h2>
        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {ListServices.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              key={index}
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
              <div className='mb-4'>
                <img
                  src={`/icons/${service.icon}.svg`}
                  alt={`${service.title} icon`}
                  className='w-12 h-12 mx-auto text-light_sea_green-400'
                />
              </div>
              <h3 className='text-gold-md font-semibold mb-2 text-light_sea_green-600'>
                {service.title}
              </h3>
              <p className='text-gold-sm text-light_sea_green-500'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
