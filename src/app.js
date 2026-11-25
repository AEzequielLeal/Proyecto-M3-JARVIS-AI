
/* =========================
    ROUTING SPA - J.A.R.V.I.S.
========================= */

import { initChat } from "./chat.js";

// Rutas permitidas
const routes = ['/home', '/chat', '/about'];

// Mostrar la vista correspondiente
function showView() {
    const path = window.location.pathname;

    const route = routes.includes(path)
        ? path
        : '/home';

    // Mostrar una vista y ocultar las demás
    document.querySelectorAll('.view').forEach((view) => {
        view.hidden = view.id !== route.slice(1);
    });

    // Actualizar el enlace activo del menú
    document.querySelectorAll('.navigation a').forEach((link) => {
        const isActive = link.getAttribute('href') === route;

        link.classList.toggle('active', isActive);

        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

// Navegar sin recargar
function navigate(path) {
    if (!routes.includes(path)) return;

    if (window.location.pathname !== path) {
        history.pushState(null, '', path);
    }

    showView();
}

// Escuchar los clics en enlaces internos
document.querySelectorAll('a[href^="/"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        const path = link.getAttribute('href');

        if (!routes.includes(path)) return;

        event.preventDefault();
        navigate(path);
    });
});

// Detectar Back y Forward
window.addEventListener('popstate', showView);

// Establecer la ruta inicial
if (!routes.includes(window.location.pathname)) {
    history.replaceState(null, '', '/home');
}

// Mostrar la vista inicial
showView();
initChat();
