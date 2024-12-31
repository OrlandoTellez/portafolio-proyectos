export const projects = [
    {
      id: '1',
      title: 'Gym',
      descripcionCorta: 'Sitio web de gimnasio',
      image: '/img/proyecto-gym.png',
      url: '/proyecto/1',
      description: 'Este es la primera página web realizada para el reto de 100 páginas web. Se trata de un sitio de gimnasio donde el negocio puede ofrecer sus servicios, en este caso, sesiones de ejercicios',
      technologies: ['Astro', 'Javascript', 'CSS'],
      demoUrl: 'https://gym-plantilla.vercel.app/',
      githubUrl: 'https://github.com/OrlandoTellez/gym'
    },
    {
      id: '2',
      title: 'Landing Page Reto',
      descripcionCorta: 'Sitio web de un reto usando react',
      image: '/img/proyecto-landing.png',
      url: '/proyecto/2',
      description: 'Este es la primera página web realizada para el reto de 100 páginas web. Se trata de un sitio de gimnasio donde el negocio puede ofrecer sus servicios, en este caso, sesiones de ejercicios',
      technologies: ['React', 'Javascript', 'CSS', 'Vite'],
      demoUrl: 'https://react-reto.vercel.app/',
      githubUrl: 'https://github.com/OrlandoTellez/landingPageReto'
    },
    {
      id: '3',
      title: 'Home Page',
      descripcionCorta: 'Sitio web que funciona como pagina de inicio de un servicio',
      image: '/img/proyecto-homePage.png',
      url: '/proyecto/3',
      description: 'Este es la primera página web realizada para el reto de 100 páginas web. Se trata de un sitio de gimnasio donde el negocio puede ofrecer sus servicios, en este caso, sesiones de ejercicios',
      technologies: ['HTML', 'CSS', 'Javascript'],
      demoUrl: 'https://react-reto.vercel.app/',
      githubUrl: 'https://github.com/OrlandoTellez/landingPageReto'
    },
    {
      id: '4',
      title: 'Pokedex',
      descripcionCorta: 'Pokedex desarrollada con HTML, CSS y JavaScript. Siguiendo el curso de freeCodeCamp ',
      image: '/img/proyecto-pokeapi.png',
      url: '/proyecto/4',
      description: 'Este es la primera página web realizada para el reto de 100 páginas web. Se trata de un sitio de gimnasio donde el negocio puede ofrecer sus servicios, en este caso, sesiones de ejercicios',
      technologies: ['HTML', 'CSS', 'Javascript'],
      demoUrl: 'https://poke-dex-practica.vercel.app/',
      githubUrl: 'https://github.com/OrlandoTellez/PokeDexPractica'
    },
    {
      id: '5',
      title: 'Calculadora',
      descripcionCorta: 'Pokedex desarrollada con HTML, CSS y JavaScript. Siguiendo el curso de freeCodeCamp',
      image: '/img/proyecto-calculadora.png',
      url: '/proyecto/5',
      description: 'Este es la primera página web realizada para el reto de 100 páginas web. Se trata de un sitio de gimnasio donde el negocio puede ofrecer sus servicios, en este caso, sesiones de ejercicios',
      technologies: ['HTML', 'CSS', 'Javascript'],
      demoUrl: 'https://orlandotellez.github.io/proyecto-calculadora/',
      githubUrl: 'https://github.com/OrlandoTellez/proyecto-calculadora'
    },
    {
      id: '6',
      title: 'Pagina Reviews',
      descripcionCorta: 'Pokedex desarrollada con HTML, CSS y JavaScript. Siguiendo el curso de freeCodeCamp ',
      image: '/img/proyecto-paginaReviews.png',
      url: '/proyecto/6',
      description: 'Este es la primera página web realizada para el reto de 100 páginas web. Se trata de un sitio de gimnasio donde el negocio puede ofrecer sus servicios, en este caso, sesiones de ejercicios',
      technologies: ['HTML', 'CSS', 'Javascript'],
      demoUrl: 'https://orlandotellez.github.io/proyecto-calculadora/',
      githubUrl: 'https://github.com/OrlandoTellez/proyecto-calculadora'
    },
    {
      id: '7',
      title: 'Cafe Api',
      descripcionCorta: 'Pokedex desarrollada con HTML, CSS y JavaScript. Siguiendo el curso de freeCodeCamp ',
      image: '/img/proyecto-cafe.png',
      url: '/proyecto/7',
      description: 'Este es la primera página web realizada para el reto de 100 páginas web. Se trata de un sitio de gimnasio donde el negocio puede ofrecer sus servicios, en este caso, sesiones de ejercicios',
      technologies: ['HTML', 'CSS', 'Javascript'],
      demoUrl: 'https://proyecto-cafe-listado.vercel.app/',
      githubUrl: 'https://github.com/OrlandoTellez/proyecto-cafeListado'
    },
    {
      id: '8',
      title: 'Temporizador',
      descripcionCorta: 'Pokedex desarrollada con HTML, CSS y JavaScript. Siguiendo el curso de freeCodeCamp ',
      image: '/img/proyecto-temporizador.png',
      url: '/proyecto/8',
      description: 'Este es la primera página web realizada para el reto de 100 páginas web. Se trata de un sitio de gimnasio donde el negocio puede ofrecer sus servicios, en este caso, sesiones de ejercicios',
      technologies: ['HTML', 'CSS', 'Javascript'],
      demoUrl: 'https://reto-temporizador.vercel.app/',
      githubUrl: 'https://github.com/OrlandoTellez/reto-temporizador'
    },
  ];
  
  export const GET = async () => {
    return new Response(JSON.stringify(projects), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  };