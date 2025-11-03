🎼 FOREWORD: Aplicación Web de Streaming de Música
Este proyecto es el front-end de una aplicación de streaming de música, construido completamente con HTML5, Tailwind CSS 4 y JavaScript (Vanilla). Se ha puesto un énfasis especial en la Identidad Visual y la Accesibilidad (A11Y).

Diseñado y Desarrollado por:

Cristhian Padilla

Roderick Correa

Valery Ballen

<hr>

1. Estructura del Proyecto
El archivo index.html contiene la estructura, la definición de Tokens de Diseño, componentes reutilizables y la lógica de inicio del Dark Mode.

todos los archivos Contiene toda la estructura HTML semántica, la definición de Tokens (@theme), Componentes Reutilizables (@layer components) y el script de carga de tema.
Perfil (.perfil): Muestra información detallada de la cuenta del usuario, sus seguidores, playlists, opciones de edición, mejora de suscripción y los artistas más escuchados. Se muestra/oculta con JavaScript.
JavaScript (JS/main.js): Contiene el script que alterna la clase hidden para que la sección de Perfil solo se muestre cuando se hace click en el icono de perfil en la navegación (tanto para pantallas grandes como pequeñas).
Lógica de Tema (Inline Script): Contiene un script que gestiona los temas oscuro y claro, guardando la preferencia con localStorage para que el aspecto se mantenga entre sesiones.
Footer: Muestra los derechos de autor de la página y enlaces a las redes sociales.
Navegación (nav): Contiene los enlaces que dirigen a las demás páginas. Implementada en dos versiones: una barra lateral fija para desktop y una barra inferior fija para mobile.

susucripcion.html
Buscador: Contiene un formulario (<form>) con un input que sirve como buscador de la página y el botón de toggle de tema (id="themeToggle").

Hero: Es la sección principal (<section>) de llamada a la acción, que invita al usuario a suscribirse gratis por un mes.

Recomendaciones: Sección que recomienda a los usuarios canciones y artistas que les pueden gustar.





<hr>

🎨 2. Identidad Visual
2.1 Tokens de Diseño
Se creó una paleta de colores por medio de Tokens OKLCH (--color-fore-*) definidos en la directiva @theme de Tailwind CSS.

Los tokens --color-fore-* se utilizaron para los fondos principales y todo lo relacionado con el Dark Mode.

Se definieron otros tokens neutros para el Modo Claro (--color-surface-*).

Se especificó una tipografía adecuada (--fontFamily: "Inter") para la coherencia visual de la aplicación.

2.2 Componentes Reutilizables
Se utilizó la directiva @layer components para crear clases reutilizables que aseguran la consistencia del diseño y la accesibilidad:

.card: Se utilizó para la creación de las dos columnas principales en forma de tarjeta redondeada y con un efecto hover (hover:scale-103).

.btn: Se utilizó para los botones primarios, asegurando un color de acento y un foco visible.

.focus: Se utilizó para que la sección de navegación tuviera accesibilidad total. Permite a los usuarios navegar con el teclado usando la tecla Tab gracias al foco visible de alto contraste (focus:ring-2).

<hr>

🌙 3. Dark Mode
La implementación del Dark Mode es robusta e interactiva, combinando CSS y JavaScript.

Interacción Usuario: En el index.html, el botón con id="themeToggle" se utiliza para que el usuario pueda elegir manualmente el modo claro u oscuro.

Persistencia: La preferencia del usuario se guarda en el navegador con localStorage para que la aplicación mantenga el modo seleccionado en futuras sesiones.

Detección de Sistema: Se utiliza la variante dark de Tailwind (definida con @custom-variant dark (&:where(.dark, .dark *)); .dark) que detecta la preferencia del sistema operativo del usuario si no hay una preferencia guardada, aplicando los estilos del tema oscuro o claro definidos por los tokens.

<hr>


♿ 4. Accesibilidad (A11Y)
Se han incluido buenas prácticas de accesibilidad para mejorar la experiencia con lectores de pantalla y navegación por teclado:

Foco Visible (.focus, .btn): Uso de focus:ring-4 y focus:ring-2 para garantizar un contorno claro y de alto contraste al navegar con el teclado.

Jerarquía Textual: Uso correcto de h2 para los títulos de las secciones principales (Recomendaciones, Suscripción), evitando la duplicidad de h1 y manteniendo una estructura semántica clara.

Contraste de Color: La paleta OKLCH fue seleccionada buscando colores con luminancia controlada que mantengan un buen contraste en ambos temas (Claro y Oscuro).

ARIA Attributes: Se usa aria-label en los enlaces de redes sociales y aria-pressed en el botón de toggle de tema para proporcionar contexto a los lectores de pantalla.

color-scheme Meta Tag: Se usa meta name="color-scheme" content="light dark" /> para optimizar la representación del tema en el sistema operativo.

<hr>

🖼️5.Galería de Desarrollo y Versión Final

Proceso de creación del Hero y de las secciones de Recomendaciones.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/324a8a89-198b-490b-9e40-9d5771821957" />

Prueba de la responsividad en diferentes pantallas móviles.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/5eb521c7-8a80-438b-8e00-801dc24a7171" />

Primer modelo de la sección de perfil.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/5a3dfb4f-3691-4814-a778-3d638faed6a6" />

Pruebas de la versión final de Perfil con código y responsividad.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/0046b83e-cdb1-4525-b171-627877157016" />

Resultado final en pantallas grandes con tema oscuro y foco activo.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/7813216b-74ef-4f2a-ab39-0346cd91f0e4" />

Resultado final en pantallas grandes con tema claro.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/6791d82e-0b53-4fc9-8d5b-ab097ec543a9" />

Vista de la aplicación en dispositivos pequeños con tema claro.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/0bcab03f-f399-4e1e-8d2b-d964e8b5da8f" />

Vista de la aplicación en dispositivos pequeños con tema oscuro y foco activo.

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/14546c7c-198b-49c8-b6a4-2bf7beec1955" />
