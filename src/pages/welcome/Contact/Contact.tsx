import { motion } from "motion/react";

const contacts = [
  {
    id: 1,
    name: "Linkdin",
    link: "https://www.linkedin.com/in/fardan-nurhidayat/",
    icon: "🔗",
  },
  {
    id: 2,
    name: "WhatsApp",
    link: "https://wa.me/+6285937095388",
    icon: "💬",
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:fardannurhidayat12@gmail.com",
    icon: "✉️",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className='py-16 bg-baby_powder-50'
      aria-label='Contact Section'>
      <div className='max-w-5xl mx-auto px-4 text-center'>
        <motion.h2
          initial='hidden'
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='text-gold-lg font-bold mb-8 text-light_sea_green-400'>
          Contact Me
        </motion.h2>
        <div className='flex justify-center space-x-8'>
          {contacts.map(contact => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: contact.id * 0.2, duration: 0.5 }}
              key={contact.id}
              href={contact.link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center text-light_sea_green-500 hover:text-light_sea_green-600 transition-colors duration-300'>
              <span className='text-4xl mb-2'>{contact.icon}</span>
              <span className='text-gold-sm font-medium'>{contact.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
