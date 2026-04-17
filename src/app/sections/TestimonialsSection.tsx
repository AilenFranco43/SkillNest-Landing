import { useEffect } from "react";
import { WIDGETS_CONFIG } from "../config/widgets";

export function TestimonialsSection() {
 useEffect(() => {
  const initWidget = () => {
    if (!window.TestimonialWidget) return;

    window.TestimonialWidget.init({
      apiUrl: WIDGETS_CONFIG.api.url,
      widgetUrl: WIDGETS_CONFIG.widget.url,
      theme: WIDGETS_CONFIG.testimonials.theme,

      testimonials: {
        containerId: "testimonials-widget",
        limit: WIDGETS_CONFIG.testimonials.limit.toString(),
        mode: WIDGETS_CONFIG.testimonials.mode,
      },

      form: {
        containerId: "testimonial-form-widget",
      },
    });
  };

  const existingScript = document.getElementById("testimonial-widget-script");

  if (existingScript) {
    initWidget(); // 👈 IMPORTANTE
    return;
  }

  const script = document.createElement("script");
  script.src = `${WIDGETS_CONFIG.widget.url}/widget/widget.js`;
  script.id = "testimonial-widget-script";
  script.async = true;

  script.onload = initWidget;

  script.onerror = () => {
    console.error("Error cargando widget script:", script.src);
  };

  document.body.appendChild(script);
}, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Comentarios reales de nuestra comunidad de aprendizaje
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-medium text-blue-700">
              Powered by Testimonials API
            </span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="">
          <div id="testimonials-widget" />
        </div>

        {/* Form */}
        <div className="border-t pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              ¿Quieres compartir tu experiencia?
            </h3>
            <p className="text-lg text-gray-600">
              Envíanos tu testimonio y ayuda a otros estudiantes a descubrir SkillNest
            </p>
          </div>

          <div id="testimonial-form-widget" />
        </div>
      </div>
    </section>
  );
}