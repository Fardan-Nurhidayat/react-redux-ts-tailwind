const programmingLanguage = [
  {
    name: "JavaScript",
    icon: "🟨",
    description: "ES6+, DOM Manipulation",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    description: "Type Safety, Interfaces",
  },
  {
    name: "PHP",
    icon: "🐘",
    description: "OOP, MVC Pattern",
  },
];

const frameworks = [
  {
    name: "Tailwind",
    icon: "🎨",
    description: "Utility-first CSS",
  },
  {
    name: "React",
    icon: "⚛️",
    description: "Hooks, Context, State",
  },
  {
    name: "Next.js",
    icon: "▲",
    description: "SSR, SSG, API Routes",
  },
  {
    name: "Laravel",
    icon: "🔴",
    description: "Eloquent, Blade, API",
  },
  {
    name: "Filament",
    icon: "💎",
    description: "Admin Panel, Forms",
  },
];

const tools = [
  {
    name: "Git",
    icon: "🌿",
    description: "Version Control, Branching",
  },
  {
    name: "GitHub",
    icon: "🐙",
    description: "CI/CD, Collaboration",
  },
  {
    name: "Figma",
    icon: "🎯",
    description: "UI/UX Design, Prototyping",
  },
];

const databases = [
  {
    name: "MySQL",
    icon: "🐬",
    description: "Relational DB, Optimization",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    description: "Advanced SQL, JSON",
  },
];

const skillCategories = [
  {
    title: "Programming Languages",
    data: programmingLanguage,
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50",
  },
  {
    title: "Frameworks & Libraries",
    data: frameworks,
    gradient: "from-green-500 to-teal-600",
    bgGradient: "from-green-50 to-teal-50",
  },
  {
    title: "Tools & Platforms",
    data: tools,
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    title: "Databases",
    data: databases,
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50",
  },
];

export default function About() {
  return (
    <section
      id='about'
      className='py-20 bg-baby_powder-500 scroll-mt-16'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-4 text-light_sea_green-400'>
            About Me
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mb-8'></div>
        </div>

        <div className='bg-white rounded-2xl p-8 shadow-lg mb-12'>
          <p className='text-lg mb-6 text-light_sea_green-600 leading-relaxed'>
            Halo! Saya{" "}
            <span className='font-semibold text-gold-600'>
              Fardan Nurhidayat
            </span>
            , seorang Full Stack Developer dengan pengalaman dalam membangun
            aplikasi web yang responsif dan user-friendly. Saat ini saya bekerja
            di{" "}
            <span className='font-semibold text-light_sea_green-500'>
              DraftCoding
            </span>{" "}
            sebagai Full Stack Developer.
          </p>
          <p className='text-lg mb-6 text-light_sea_green-600 leading-relaxed'>
            Berikut adalah beberapa teknologi yang saya kuasai:
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {skillCategories.map(category => (
          <div
            key={category.title}
            className='group'>
            <div
              className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50`}>
              {/* Category Header */}
              <div className='flex items-center gap-3 mb-6'>
                <div
                  className={`w-3 h-8 rounded-full bg-gradient-to-b ${category.gradient}`}></div>
                <h3 className='text-2xl font-bold text-light_sea_green-400'>
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className='grid grid-cols-1 gap-4'>
                {category.data.map(skill => (
                  <div
                    key={skill.name}
                    className='bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:scale-[1.02] transition-all duration-200 cursor-pointer group/skill border border-white/50'>
                    <div className='flex items-center gap-3'>
                      <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover/skill:scale-110 transition-transform duration-200'>
                        <span className='text-xl'>{skill.icon}</span>
                      </div>
                      <div className='flex-1'>
                        <h4 className='font-bold text-light_sea_green-600 text-lg mb-1'>
                          {skill.name}
                        </h4>
                        <p className='text-sm text-light_sea_green-500'>
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Stats */}
              <div className='mt-6 pt-4 border-t border-white/30'>
                <div className='flex justify-center'>
                  <span className='text-light_sea_green-600 font-medium'>
                    {category.data.length} Skills
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
