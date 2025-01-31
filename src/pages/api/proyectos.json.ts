export const projects = [
  {
    id: '11',
    title: 'Trello App',
    descripcionCorta: '',
    image: '/img/proyecto-trelloApp.png',
    url: '/proyecto/11',
    description: '',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demoUrl: 'https://orlandotellez.github.io/trello-app/',
    githubUrl: 'https://github.com/OrlandoTellez/trello-app'
  },
  {
    id: '10',
    title: 'Twitter Clon',
    descripcionCorta: 'Toda la interfaz de twitter(x)',
    image: '/img/proyecto-twiterClon.png',
    url: '/proyecto/10',
    description: 'Página que presenta toda la interfaz gráfica de la red social Twitter(x)',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demoUrl: 'https://twiter-clon.vercel.app/',
    githubUrl: 'https://github.com/OrlandoTellez/twiter-clon'
  },
  {
    id: '9',
    title: 'Página de postres',
    descripcionCorta: 'Catálogo interactivo de postres con carrito de compras.',
    image: '/img/proyecto-carritoCompra.png',
    url: '/proyecto/9',
    description: 'Página que presenta un catálogo de postres con la funcionalidad de un carrito de compras. Desarrollada con HTML, CSS y JavaScript, es ideal para negocios de repostería.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demoUrl: 'https://orlandotellez.github.io/pagina-productosCarritoCompra/',
    githubUrl: 'https://github.com/OrlandoTellez/pagina-productosCarritoCompra'
  },
  {
    id: '8',
    title: 'Temporizador',
    descripcionCorta: 'Aplicación funcional de temporizador creada con JavaScript.',
    image: '/img/proyecto-temporizador.png',
    url: '/proyecto/8',
    description: 'Un temporizador desarrollado con HTML, CSS y JavaScript. Permite configurar y controlar intervalos de tiempo de manera intuitiva.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demoUrl: 'https://reto-temporizador.vercel.app/',
    githubUrl: 'https://github.com/OrlandoTellez/reto-temporizador'
  },
  {
    id: '7',
    title: 'Cafe API',
    descripcionCorta: 'Listado dinámico de cafés basado en una API.',
    image: '/img/proyecto-cafe.png',
    url: '/proyecto/7',
    description: 'Proyecto que muestra un listado de cafés disponibles, generado dinámicamente desde una API. Desarrollado con HTML, CSS y JavaScript, destaca por su diseño moderno y su funcionalidad.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demoUrl: 'https://proyecto-cafe-listado.vercel.app/',
    githubUrl: 'https://github.com/OrlandoTellez/proyecto-cafeListado'
  },
  {
    id: '6',
    title: 'Página Reviews',
    descripcionCorta: 'Sitio web para dejar reseñas y opiniones sobre servicios o productos.',
    image: '/img/proyecto-paginaReviews.png',
    url: '/proyecto/6',
    description: 'Esta página permite a los usuarios dejar opiniones y calificaciones sobre servicios o productos. Desarrollada con HTML, CSS y JavaScript, cuenta con un diseño atractivo y funcional.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demoUrl: 'https://orlandotellez.github.io/desafio-pageTestimonio/',
    githubUrl: 'https://github.com/OrlandoTellez/desafio-pageTestimonio'
  },
  {
    id: '5',
    title: 'Calculadora',
    descripcionCorta: 'Calculadora funcional interactiva creada con JavaScript.',
    image: '/img/proyecto-calculadora.png',
    url: '/proyecto/5',
    description: 'Proyecto que consiste en una calculadora funcional y fácil de usar. Desarrollada con HTML, CSS y JavaScript, incluye funcionalidades básicas como suma, resta, multiplicación y división.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demoUrl: 'https://orlandotellez.github.io/proyecto-calculadora/',
    githubUrl: 'https://github.com/OrlandoTellez/proyecto-calculadora'
  },
  {
    id: '4',
    title: 'Pokedex',
    descripcionCorta: 'Aplicación web estilo Pokédex para consultar información de Pokémon.',
    image: '/img/proyecto-pokeapi.png',
    url: '/proyecto/4',
    description: 'Una Pokédex desarrollada con HTML, CSS y JavaScript. Permite consultar información básica sobre Pokémon, como sus características y habilidades.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demoUrl: 'https://poke-dex-practica.vercel.app/',
    githubUrl: 'https://github.com/OrlandoTellez/PokeDexPractica'
  },
  {
    id: '3',
    title: 'Home Page',
    descripcionCorta: 'Página de inicio diseñada para presentar un servicio.',
    image: '/img/proyecto-homePage.png',
    url: '/proyecto/3',
    description: 'Página inicial que puede ser utilizada para presentar un servicio o producto. Desarrollada con HTML, CSS y JavaScript, destaca por su diseño limpio y funcional.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demoUrl: 'https://orlandotellez.github.io/desafio-simpleHomepage/',
    githubUrl: 'https://github.com/OrlandoTellez/desafio-simpleHomepage'
  },
  {
    id: '2',
    title: 'Landing Page Reto',
    descripcionCorta: 'Landing page creada con React para un reto de diseño.',
    image: '/img/proyecto-landing.png',
    url: '/proyecto/2',
    description: 'Una landing page desarrollada con React como parte del reto de crear 100 páginas web. Presenta un diseño moderno para captar la atención de los visitantes y mostrar información clara.',
    technologies: ['React', 'Javascript', 'CSS', 'Vite'],
    demoUrl: 'https://react-reto.vercel.app/',
    githubUrl: 'https://github.com/OrlandoTellez/landingPageReto'
  },
  {
    id: '1',
    title: 'Gym',
    descripcionCorta: 'Página web de gimnasio para mostrar servicios y sesiones de ejercicio.',
    image: '/img/proyecto-gym.png',
    url: '/proyecto/1',
    description: 'Sitio web diseñado para un gimnasio, donde el negocio puede ofrecer sus servicios y mostrar información detallada sobre las sesiones de ejercicios disponibles. Este proyecto es parte del reto de crear 100 páginas web.',
    technologies: ['Astro', 'Javascript', 'CSS'],
    demoUrl: 'https://gym-plantilla.vercel.app/',
    githubUrl: 'https://github.com/OrlandoTellez/gym'
  }
];

  
  export const GET = async () => {
    return new Response(JSON.stringify(projects), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  };