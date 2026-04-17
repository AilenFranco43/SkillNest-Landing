// URLs de APIs y servicios
const BACKEND_URL = "http://localhost:3000";
const WIDGETS_URL = "http://localhost:3002";
// ============================================
// CONFIGURACIÓN DE LOS WIDGETS
// ============================================
export const WIDGETS_CONFIG = {
  // URLs base - cambialas aquí para producción
  api: {
    url: BACKEND_URL,
  },
  widget: {
    url: WIDGETS_URL,
  },

  // Configuración de testimonios
  testimonials: {
    theme: "light", // 'light' | 'dark'
    limit: 6, // 1-50 testimonios
    mode: "grid", // 'grid' | 'carousel'
  },

  // Configuración de formulario
  form: {
    theme: "light", // 'light' | 'dark'
  },
};
