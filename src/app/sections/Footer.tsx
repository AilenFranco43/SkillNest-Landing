import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
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
  );
}
