export function CTASection() {
  return (
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
  );
}
