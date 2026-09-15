import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { FaGithub } from "react-icons/fa";
import { FadeUp } from "./animations/FadeUp";

export function ProyectosGrid() {
  const proyectos = [
    {
      id: 1,
      title: "Mi Portafolio",
      className: "md:col-span-2",
      thumbnail: "/img/portafolio.webp",
      content: (
        <div>
          <h3 className="text-4xl font-bold mb-2 text-white">Mi Portafolio</h3>
          <p className="text-gray-200 text-sm md:text-base mb-6">
            Un sitio web de portafolio personal con un diseño moderno y
            adaptable, enfocado en la experiencia del usuario, para presentar mi
            perfil, mis habilidades, y un poco de mis tecnologías.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              TailWindCSS
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              HTML5
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              Jinja2
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              AOS Scroll
            </span>
          </div>
          <a
            href="https://github.com/gl0w-w/portafolioo.git"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-800 text-white text-sm font-bold rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FaGithub className="mr-2" /> Código &rarr;
          </a>
        </div>
      ),
    },
    {
      id: 2,
      title: "Ferremas",
      className: "col-span-1",
      thumbnail: "/img/ferremas.webp",
      content: (
        <div>
          <h3 className="text-4xl font-bold mb-2 text-white">Ferremas</h3>
          <p className="text-gray-200 text-sm md:text-base mb-6">
            Una plataforma web que se centra en la optimización de tiempo y la
            gestión de productos para una ferretería.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              Django
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              Bootstrap
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              MySQL
            </span>
          </div>
          <a
            href="https://github.com/gl0w-w/Ferremas.git"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-800 text-white text-sm font-bold rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FaGithub className="mr-2" /> Código &rarr;
          </a>
        </div>
      ),
    },
    {
      id: 3,
      title: "MïeM App",
      className: "col-span-1",
      thumbnail: "/img/miem.webp",
      content: (
        <div>
          <h3 className="text-4xl font-bold mb-2 text-white">MïeM App</h3>
          <p className="text-gray-200 text-sm md:text-base mb-6">
            Una aplicación móvil que te ayuda a dar más visibilidad a tu
            emprendimiento.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              TypeScript
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              Angular
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              Ionic
            </span>
          </div>
          <a
            href="https://github.com/gl0w-w/MieM.git"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-800 text-white text-sm font-bold rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FaGithub className="mr-2" /> Código &rarr;
          </a>
        </div>
      ),
    },
    {
      id: 4,
      title: "Portafolio v2.0",
      className: "col-span-2",
      thumbnail: "/img/miem.webp",
      content: (
        <div>
          <h3 className="text-4xl font-bold mb-2 text-white">Portafolio v2.0</h3>
          <p className="text-gray-200 text-sm md:text-base mb-6">
            Una versión altamente mejorada de mi portafolio virtual, para demostrar
            mis nuevas tecnologías y mis nuevas habilidades a la hora de crear una web.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              Astro
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              React
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              JavaScript
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              TypeScript
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-gray-900 border border-gray-700 rounded-full text-white">
              TailWindCSS
            </span>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-800 text-white text-sm font-bold rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FaGithub className="mr-2" /> Código &rarr;
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[600px] md:h-[800px] w-full">
      <FadeUp delay={0.2} className="h-full w-full">
        <LayoutGrid cards={proyectos} />
      </FadeUp>
    </div>
  );
}
