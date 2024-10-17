import type { APIRoute } from "astro";

export const GET: APIRoute = async({request}) => {
    const projects = [
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
            url: '/proyecto/1',
            description: 'Este es la primera página web realizada para el reto de 100 páginas web. Se trata de un sitio de gimnasio donde el negocio puede ofrecer sus servicios, en este caso, sesiones de ejercicios',
            technologies: ['Astro', 'Javascript', 'CSS'],
            demoUrl: 'https://react-reto.vercel.app/',
            githubUrl: 'https://github.com/OrlandoTellez/landingPageReto'
        },
        
    ];

    return new Response(JSON.stringify(projects), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}