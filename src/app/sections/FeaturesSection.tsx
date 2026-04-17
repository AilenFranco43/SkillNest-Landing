import { Clock, Users, Award, BookOpen } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

const FEATURES = [
  {
    icon: Clock,
    title: 'Aprendizaje Flexible',
    description: 'Aprende a tu propio ritmo con acceso de por vida a los materiales del curso. Estudia cuando y donde sea mejor para ti.'
  },
  {
    icon: Users,
    title: 'Instructores Expertos',
    description: 'Aprende de profesionales de la industria con años de experiencia real. Obtén conocimientos que van más allá de los libros.'
  },
  {
    icon: Award,
    title: 'Cursos Certificados',
    description: 'Obtén certificaciones reconocidas que mejoran tu currículum y demuestran tu experiencia a empleadores de todo el mundo.'
  },
  {
    icon: BookOpen,
    title: 'Apoyo de la Comunidad',
    description: 'Únete a una vibrante comunidad de estudiantes. Obtén ayuda, comparte ideas y conecta con compañeros en el mismo camino.'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir SkillNest?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proporcionamos todo lo que necesitas para tener éxito en tu viaje de aprendizaje
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
