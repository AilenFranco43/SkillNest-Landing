import { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Clock, 
  Award, 
  Users, 
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { FeatureCard } from './components/FeatureCard';
import { CourseCard } from './components/CourseCard';
import { 
  TestimonialCard, 
  TestimonialSkeleton, 
  TestimonialsEmptyState 
} from './components/TestimonialCard';
import { TestimonialForm } from './components/TestimonialForm';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  role: string;
}

function App() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);

  // Simular llamada a API para testimonios
  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoadingTestimonials(true);
      
      // Simular delay del API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Datos mock de testimonios
      const mockTestimonials: Testimonial[] = [
        {
          id: 1,
          name: 'Sarah Chen',
          feedback: '¡SkillNest transformó mi carrera! El curso de desarrollo web fue completo y los instructores fueron increíblemente solidarios. Conseguí el trabajo de mis sueños en 3 meses.',
          role: 'Desarrolladora Full Stack'
        },
        {
          id: 2,
          name: 'Miguel Rodríguez',
          feedback: 'La flexibilidad para aprender a mi propio ritmo fue exactamente lo que necesitaba. El curso de diseño UI/UX me dio las habilidades y confianza para empezar a trabajar como freelancer.',
          role: 'Diseñador UX'
        },
        {
          id: 3,
          name: 'Emily Thompson',
          feedback: '¡Contenido excepcional y comunidad increíble! El curso de estrategia empresarial me ayudó a lanzar mi startup. Las certificaciones son reconocidas por las mejores empresas.',
          role: 'Emprendedora'
        },
        {
          id: 4,
          name: 'David Kim',
          feedback: 'He probado muchas plataformas online, pero SkillNest se destaca. Los cursos están actualizados, son prácticos, y los instructores expertos realmente se preocupan por el éxito de los estudiantes.',
          role: 'Analista de Datos'
        },
        {
          id: 5,
          name: 'Jessica Patel',
          feedback: 'La certificación que recibí después de completar el curso de marketing abrió muchas puertas. ¡La inversión en mí misma valió absolutamente la pena!',
          role: 'Gerente de Marketing'
        },
        {
          id: 6,
          name: 'Alex Johnson',
          feedback: 'Ser parte de la comunidad SkillNest ha sido increíble. El apoyo entre compañeros y las oportunidades de networking son tan valiosas como los cursos mismos.',
          role: 'Diseñador de Productos'
        }
      ];
      
      setTestimonials(mockTestimonials);
      setIsLoadingTestimonials(false);
    };

    fetchTestimonials();
  }, []);

  const handleNewTestimonial = (data: { name: string; role: string; feedback: string }) => {
    console.log('Nuevo testimonio enviado:', data);
    // Aquí se enviaría al API real
  };

  const courses = [
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

  const features = [
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Sección Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 opacity-60" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido Izquierdo */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-6">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Bienvenido a SkillNest</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Aprende nuevas habilidades.
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Haz crecer tu futuro.</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Desbloquea tu potencial con cursos dirigidos por expertos en tecnología, diseño y negocios. 
                Únete a miles de estudiantes construyendo carreras más brillantes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                  Comenzar a aprender
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all border border-gray-200">
                  Explorar cursos
                </button>
              </div>
            </div>
            
            {/* Imagen Derecha */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGxhcHRvcCUyMHN0dWRlbnR8ZW58MXx8fHwxNzc0ODg1MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Aprendizaje en línea"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Características */}
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
            {features.map((feature) => (
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

      {/* Sección de Vista Previa de Cursos */}
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
            {courses.map((course) => (
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

      {/* Sección de Testimonios - Estilo Widget API */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros estudiantes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              Comentarios reales de nuestra comunidad de aprendizaje
            </p>
            {/* Indicador de Widget API */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-medium text-blue-700">Powered by Testimonials API</span>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoadingTestimonials ? (
              // Skeletons de Carga
              <>
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
              </>
            ) : testimonials.length > 0 ? (
              // Tarjetas de Testimonios
              testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  feedback={testimonial.feedback}
                  role={testimonial.role}
                />
              ))
            ) : (
              // Estado Vacío
              <TestimonialsEmptyState />
            )}
          </div>

          {/* Formulario de Testimonios */}
          <div className="mt-16 max-w-2xl mx-auto">
            <TestimonialForm onSubmit={handleNewTestimonial} />
          </div>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comienza tu viaje de aprendizaje hoy
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Únete a más de 50,000 estudiantes que ya están aprendiendo en SkillNest. 
            Transforma tu carrera con cursos líderes en la industria.
          </p>
          <button className="px-10 py-5 bg-white text-purple-600 rounded-xl font-bold shadow-2xl hover:shadow-xl hover:scale-105 transition-all text-lg">
            Únete ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Marca */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">SkillNest</span>
              </div>
              <p className="text-gray-400">
                Empoderando estudiantes en todo el mundo con educación en línea de calidad.
              </p>
            </div>
            
            {/* Enlaces */}
            <div>
              <h3 className="font-semibold text-white mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">Cursos</a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">Sobre Nosotros</a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">Contacto</a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </div>
            
            {/* Redes Sociales */}
            <div>
              <h3 className="font-semibold text-white mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2026 SkillNest. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
