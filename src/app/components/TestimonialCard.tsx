import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  feedback: string;
  role?: string;
}

export function TestimonialCard({ name, feedback, role }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
      <div className="absolute -top-3 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
        <Quote className="w-5 h-5 text-white" />
      </div>
      <div className="mt-4">
        <p className="text-gray-700 leading-relaxed mb-4">{feedback}</p>
        <div className="border-t border-gray-100 pt-4">
          <p className="font-semibold text-gray-900">{name}</p>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative animate-pulse">
      <div className="absolute -top-3 left-6 w-10 h-10 rounded-full bg-gray-200" />
      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/6" />
        <div className="border-t border-gray-100 pt-4 mt-4">
          <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-24" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialsEmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-12 px-4">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <Quote className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No hay testimonios aún</h3>
      <p className="text-gray-500 text-center max-w-md">
        Todavía estamos recopilando comentarios de nuestros estudiantes. ¡Vuelve pronto!
      </p>
    </div>
  );
}