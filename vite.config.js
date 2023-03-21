
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    port: 3030,
  },
  preview: {
    port: 4270,
  },
  build: {
    // Acelerar el proceso de compilación de los archivos cuando generas el build
    incremental: true,
    // Habilitar un trabajo en conjunto con Babel para la interpretación correcta de las versiones del JS para los navegadores
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
   
    // Habilitar los cambios mediante caché
    cache: true,
    // Habilitar la opción de compresión para minimizar el tamaño de los archivos compilados.
    minify: true,
    // Especificar el ambiente en el cual estamos manejando este contexto de ejecución
    mode: "production",
    // Habilitar la configuración del build mediante chuncks parcelados
    chunks: true,
    // Habilitar la configuración para minimizar el tamaño de las librerías del proyecto que pasarán a producción
    moduleBundling: true,
    // Habilitar un partner del modo debug para habilitar más recomendaciones
    devCode: true,
    // Habilitar un modo debug para las ejecuciones de la generación del build
    debug: true,
    assetsDir: "assets",
  },
});

 