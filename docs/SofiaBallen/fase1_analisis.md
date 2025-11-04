# Fase 1 - Analisis del proyecto EcoHuerta

---

## Mapa de secciones

**Header**  
Contiene el logo y el boton que tiene la funcion de cambiar el tema claro u oscuro.

**Hero**  
Tiene una imagen a la derecha de la division y en la parte izquierda contiene dos botones en donde nos redirige al 
formulario de suscripcion a la pagina y al contenido (que son los productos).

**Productos**  
Muestra diferentes tipos de cultivos en tarjetas que contienen una imagen y una descripcion del producto.

**Seasons**  
Explica las temporadas del año y como afectan los cultivos.

**Testimonials**  
Presenta opiniones o comentarios de usuarios.

**CTA (Call to Action)**  
Invita al usuario a realizar una accion como suscribirse o explorar mas contenido.

**Contacto**  
Formulario o enlaces para comunicarse con los creadores del sitio.

**Suscripcion**  
Permite registrar un correo para recibir novedades o recursos sobre EcoHuerta.

**Footer**  
Incluye informacion final, redes sociales y derechos reservados.

---

## Inventario de tokens

Los tokens se definen dentro de @theme en el bloque de Tailwind.

**Colores**  
Se usan variables con nombres como --color-eco-50 hasta --color-eco-700.  
Representan una paleta natural basada en verdes y tonos tierra.  
Sirven para mantener armonia y contraste entre fondo, texto y elementos.

**Fuentes**  
Se usa una fuente sans-serif definida en los tokens.  

**Breakpoints**  
Definen los tamanos sm, md, lg, xl.  
Permiten que el diseño sea responsive y se adapte a celulares, tablets y pantallas grandes.

---

## Utilidades por seccion

**Hero**  
Usa clases como flex, items-center, justify-center, bg-eco-100, text-4xl.  
Ayudan a centrar el contenido, mantener proporciones y crear jerarquia visual.

**Grid de cultivos**  
Usa grid, grid-cols-3, gap-6, rounded-xl, shadow-md.  
Organiza las tarjetas con buen espacio y se vean organizados.

**CTA**  
Utiliza bg-eco-500, text-white, p-6, rounded-lg, hover:bg-eco-600.  
Crea contraste y resalta la accion con buena visibilidad al interactuar.

Estas utilidades mejoran la consistencia, la legibilidad y facilitan la adaptacion a distintos dispositivos.

---

## Dark mode

El modo oscuro se implementa con la clase .dark aplicada al elemento <html>.  
Dentro de las clases se usan variantes como dark:bg-gray-900 o dark:text-white.  
Esto permite cambiar los colores de fondo y texto sin duplicar codigo.

**Ventajas de la estrategia por clase (.dark):**  
- Permite control manual sobre el tema.  
- Facil de probar y alternar con JavaScript.  
- No depende de la configuracion del sistema del usuario.  
- Evita conflictos de estilos.

---

## Componentes reutilizables

En el bloque @layer components se definen componentes como:  
- .btn-primary: para botones principales.  
- .card: para tarjetas de cultivos o testimonios.  
- .input: para campos de formulario.

Estos componentes se reutilizan en varias partes del sitio, lo que mantiene la coherencia visual y reduce errores de estilo.

---

## Accesibilidad visual

**Contraste:**
Los tonos verdes y neutros tienen suficiente contraste con el texto claro.

**Jerarquia tipografica:**
Los titulos usan tamaños grandes (text-3xl, text-4xl), y los parrafos usan text-base, facilitando la lectura.

**Foco visible:**
Los elementos interactivos (botones, inputs) muestran un borde o sombra al recibir foco.

**Etiquetas:**
Los formularios usan label asociadas a cada input, lo cual mejora la navegacion con lector de pantalla.

**Mejora propuesta:**
Agregar un boton de cambio de modo oscuro visible en el header para accesibilidad directa.

---

## Propuesta de mejora conceptual

Yo mejoraria la distribucion del contenido en el Footer, y agregando un medio de comunicacion en caso de que 
a alguien le haya gustado la pagina y quiera solicitar una para su negocio.