#Fase 1 - analisis de proyecto Ecohuerta
---
**Mapa de secciones**
---
Seasons: Lo que hace es explicar como las temporadas afectan al producto.

CTA (call to action): hace que el usuario se suscriba o haga otra accion.

Producto: muestran el tipo de producto que se va a vender en una tarjeta con su imagen.

Hero: lo que hace es que en la parte derecha tiene una imagen y en la izquierda tiene dos botones que lo dirijen al formulario de compra y a los productos.

Testimonials: son las opiniones de las personas.

Suscripcion: Lo que hace es registrar un correo donde puede llegar las novedades de ecohuertas.

header: incluye el logo y la funcion que es para cambiar a modo oscuro.
 
footer: incluye la informacion final.

---

## inventario de tokens

los tokens siempre van a estar en el bloque @theme

Colores:Se usan variables con nombres como --color-eco-50 hasta --color-eco-700.  
Representan una paleta natural basada en verdes y tonos tierra.  

fuentes: se usa la fuente predeterminada que es sans-serif

Breakpoints:Definen los tamanos sm, md, lg, xl.  
Permiten que el diseño sea responsive y se adapte a celulares

---

##utilidades por seccion

Hero: Usa clases como flex, justify-center, bg-eco-100, text-4xl.  
Ayudan a centrar el contenido, mantener una proporcion.

Grid de cultivos: Usa grid, grid-cols-3, gap-6, rounded-xl, shadow-md.  
Organiza las tarjetas con buen espacio y se vean organizados.

CTA: Utiliza bg-eco-500, text-white, p-6, rounded-lg, hover:bg-eco-600.  
Crea contraste y resalta la accion al interactuar.

---

## Dark mode

El modo oscuro se implementa con la clase .dark, en las clases se usan variantes como dark:bg-gray-900 o dark:text-white, esto permite cambiar los colores de fondo y texto.

Ventajas de la estrategia por clase (.dark): 
- Permite control sobre el tema.  
- Facil de probar y alternar con JavaScript.  
- No depende de la configuracion del sistema del usuario.  
  
---

## Componentes reutilizables

En el bloque @layer components, se encuentran componentes como:  
- .btn-primary: para botones principales.  
- .card: para tarjetas de cultivos o testimonios. 

Estos componentes se reutilizan en varias partes del sitio, lo que hace es que reduce errores de estilo.

---

## Accesibilidad visual

Contraste: Los tonos verdes y neutros tienen suficiente contraste con el texto claro.

Jerarquia tipografica: Los titulos usan tamaños grandes, y los parrafos tiene un text-base.

Foco visible: Los elementos interactivos (botones, inputs) muestran el borde.

Etiquetas: Los formularios usan label asociadas a cada input.

Mejora propuesta: el boton del modo oscuro deberia ser mas visible.

---

## Propuesta de mejora conceptual

haria una distribucion un poco mejor en los productos para que el cliente se sienta aun mas satisfecho con la pagina
