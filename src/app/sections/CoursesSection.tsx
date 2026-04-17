import { CourseCard } from '../components/CourseCard';

const COURSES = [
  {
    id: 1,
    title: 'Desarrollo Web Full Stack',
    category: 'Tecnología',
    level: 'Intermedio',
    imageUrl: 'https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvdXJzZSUyMGNvZGluZ3xlbnwxfHx8fDE3NzQ4NTg2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Diseño UI/UX Masterclass',
    category: 'Diseño',
    level: 'Principiante',
    imageUrl: 'https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDg3MTcxOHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Estrategia de Negocios y Liderazgo',
    category: 'Negocios',
    level: 'Avanzado',
    imageUrl: 'https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ5MTIwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: 'Análisis de Datos y Visualización',
    category: 'Tecnología',
    level: 'Intermedio',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NDg3MDY0OXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    title: 'Diseño Gráfico Creativo',
    category: 'Diseño',
    level: 'Principiante',
    imageUrl: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzc0OTAyODU5fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    title: 'Fundamentos de Marketing Digital',
    category: 'Negocios',
    level: 'Principiante',
    imageUrl: 'https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGxhcHRvcCUyMHN0dWRlbnR8ZW58MXx8fHwxNzc0ODg1MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function CoursesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explora cursos populares
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comienza a aprender con nuestros cursos más populares y mejor valorados
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              level={course.level}
              imageUrl={course.imageUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all">
            Ver todos los cursos
          </button>
        </div>
      </div>
    </section>
  );
}
