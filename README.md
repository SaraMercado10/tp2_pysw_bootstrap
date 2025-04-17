# Sitio Web Responsivo para Gimnasio con Bootstrap 5+ y jQuery

Este proyecto fue desarrollado por **Sara Mercado** como parte de una práctica académica en la materia APU 2008 de la Universidad Nacional de Jujuy, Facultad de Ingeniería.

---

## 🎯 Objetivo

El objetivo de este proyecto es desarrollar un sitio web responsivo para un gimnasio utilizando tecnologías modernas como **HTML5**, **CSS3**, **Bootstrap 5+** y **jQuery**. El sitio está diseñado para mejorar la interactividad, accesibilidad y experiencia del usuario mediante el uso de librerías de iconos, efectos dinámicos y optimización de recursos.

---

## 🛠 Tecnologías Utilizadas

- **HTML5**: Para la estructura semántica del sitio.
- **CSS3**: Personalización estilística y diseño responsivo.
- **Bootstrap 5+**: Framework CSS para componentes y diseño responsivo.
- **jQuery**: Para efectos dinámicos, control de eventos y mejoras interactivas.
- **Librerías de Iconos**:
  - [Bootstrap Icons](https://icons.getbootstrap.com/)
  - [Font Awesome](https://fontawesome.com/)
  - [Heroicons](https://heroicons.com/)
  - [Boxicons](https://boxicons.com/)
- **Sprites**: Reducción de solicitudes HTTP mediante sprites personalizados.
- **CountUp.js**: Para animaciones de contadores.
- **Masonry.js**: Para galerías tipo masonry.
- **AOS.js**: Para efectos de scroll reveal.

---

## 📂 Estructura del Proyecto

### 1. Página Principal (Home)
- **Header con Mega Menú**:
  - Navbar de Bootstrap integrado con jQuery para desplegar submenús.
- **Hero con Video de Fondo**:
  - Video de fondo con overlay animado usando `.fadeIn` y `.slideDown`.
- **Clases Destacadas**:
  - Cards de Bootstrap con efectos hover y animaciones jQuery.
- **Contador Animado**:
  - Uso de `setInterval` o CountUp.js para animar números.
- **Testimonios en Carrusel**:
  - Carousel de Bootstrap con personalización avanzada mediante jQuery.
- **Footer**:
  - Formulario con validación de Bootstrap y efecto spinner de jQuery.
  - Mapa integrado mediante iframe (Google Maps / OpenStreetMap).

---

### 2. Página de Clases
- **Filtros por Categoría**:
  - Implementación con checkbox + CSS o `.filter()` de jQuery.
- **Galería Tipo Masonry**:
  - Diseño con CSS Grid o Masonry.js para un efecto dinámico.
- **Tarjetas con Efecto Zoom**:
  - Cards de Bootstrap con overlays activados mediante `.hover()`.
- **Tabla de Horarios Responsiva**:
  - Tablas responsivas con `table-responsive` y breakpoints.

---

### 3. Entrenadores
- **Efecto Flip en Tarjetas**:
  - Transformaciones CSS (`rotateY`) controladas con jQuery.
- **Barras de Habilidades Animadas**:
  - Progress bars de Bootstrap animadas con `.animate()`.
- **Rating con Estrellas**:
  - Sistema de radio ocultos con hover y click manejados por jQuery.

---

### 4. Contacto Avanzado
- **Validación en Tiempo Real**:
  - Clases `is-invalid` / `is-valid` de Bootstrap + `.on("input")` de jQuery.
- **Spinner al Enviar**:
  - Spinner de Bootstrap activado con `.fadeIn()`.
- **Modal de Confirmación**:
  - Modal de Bootstrap mostrado con `.modal('show')`.

---

### 5. Página de Precios
- **Tabla con Hover**:
  - Tabla con `table-hover` y resaltado dinámico mediante jQuery.
- **Toggle Mensual/Anual**:
  - Botón toggle de Bootstrap + `.on("change")` para cambiar precios.
- **Tooltips Explicativos**:
  - Tooltips nativos de Bootstrap o personalizados con jQuery.

---

### 6. Blog Fitness (Estilo Revista)
- **Diseño Tipo Periódico**:
  - Diseño con CSS Grid y columnas de Bootstrap.
- **Filtros por Tags**:
  - Filtrado dinámico con `.filter()` de jQuery.
- **Comentarios con Avatares**:
  - Comentarios estilizados con pseudo-elementos CSS y dinamismo con jQuery.
- **Scroll Reveal**:
  - Efectos de revelado con IntersectionObserver o AOS.js.
