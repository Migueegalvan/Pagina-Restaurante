# #  Restaurante
### Proyecto Next.js con Tailwind
Este es un proyecto [Next.js](https://nextjs.org/) inicializado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
##  Comenzando

Primero, inicia el servidor de desarrollo:

npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev

Abre [http://localhost:3000](http://localhost:3000/) en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `app/page.js`. La página se actualiza automáticamente a medida que editas el archivo.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.

## Usando Tailwind CSS

 Proyecto que  utiliza [Tailwind CSS](https://tailwindcss.com/) para el diseño de la interfaz. 

Para comenzar a usar Tailwind CSS, sigue estos pasos:

1.  Instala Tailwind CSS:

bash

Copiar código

`npm install -D tailwindcss
npx tailwindcss init`

2.  Configura `tailwind.config.js` con las rutas a tus archivos de componentes:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

