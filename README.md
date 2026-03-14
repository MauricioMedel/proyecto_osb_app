# 🥦 ObesiApp — Landing Page

Landing page moderna para **ObesiApp**, una aplicación que combina **IA nutricional** y **gamificación** para prevenir la obesidad infantil.

---

## 🚀 Instalación y Ejecución

### Requisitos
- Node.js 18+ y npm 9+
- Angular CLI 19+

```bash
# 1. Instalar Angular CLI globalmente (si no lo tienes)
npm install -g @angular/cli

# 2. Entrar al directorio del proyecto
cd obesiapp

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
ng serve

# 5. Abrir en el navegador
# http://localhost:4200
```

### Build de producción
```bash
ng build --configuration production
# Los archivos se generan en: dist/obesiapp/browser/
```

---

## 🗂️ Estructura del Proyecto

```
src/
├── app/
│   ├── core/
│   │   └── components/
│   │       ├── navbar/          # Barra de navegación fija + menú hamburguesa
│   │       └── footer/          # Pie de página con equipo y contacto
│   │
│   ├── shared/
│   │   └── components/
│   │       └── section-title/   # Componente reutilizable de título de sección
│   │
│   ├── features/
│   │   └── landing/
│   │       ├── pages/
│   │       │   └── landing-page/  # Página principal (compone todo)
│   │       └── components/
│   │           ├── hero/          # Sección hero con mockup de teléfono
│   │           ├── problem/       # El problema (estadísticas)
│   │           ├── features/      # Qué es ObesiApp (3 pilares)
│   │           ├── how-it-works/  # Timeline de 5 pasos
│   │           ├── benefits/      # Grid de beneficios
│   │           ├── methodology/   # Stack tecnológico y metodología
│   │           └── cta/           # Call-to-action + formulario reactivo
│   │
│   ├── app.routes.ts            # Definición de rutas
│   ├── app.config.ts            # Configuración de la app (provideRouter, etc.)
│   └── app.component.ts         # Componente raíz con <router-outlet>
│
├── styles.scss                  # Variables CSS globales y estilos base
├── index.html
└── main.ts
```

---

## 🎨 Cómo Cambiar Colores

Edita las variables CSS en **`src/styles.scss`**:

```scss
:root {
  --primary: #144c75;      /* Azul oscuro principal */
  --secondary: #2372b2;    /* Azul secundario */
  --primary-2: #1f5b83;    /* Azul intermedio */
  --bg: #fffff7;           /* Fondo general */
  --success: #8fc93a;      /* Verde éxito */
  --yellow: #ffb703;       /* Amarillo/acentos */
  --orange: #fb8500;       /* Naranja/CTA */
  --danger: #c1121f;       /* Rojo error */
  --text: #232323;         /* Texto principal */
  --muted: #575757;        /* Texto secundario */
}
```

---

## 🔗 Cómo Cambiar Links del Navbar

Edita el array `navLinks` en **`src/app/core/components/navbar/navbar.component.ts`**:

```typescript
navLinks = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Problema', id: 'problema' },
  // Agrega o modifica aquí...
];
```

Los `id` deben coincidir con el atributo `id` de cada sección en el HTML.

---

## 🧩 Stack Tecnológico

| Tecnología | Uso |
|---|---|
| Angular 19 | Framework principal |
| Standalone Components | Sin NgModule |
| SCSS | Estilos por componente |
| Reactive Forms | Formulario del CTA |
| IntersectionObserver | Animaciones al hacer scroll |
| Google Fonts (Baloo 2 + Nunito) | Tipografía |

---

## ✅ Funcionalidades Implementadas

- ✅ Navbar fijo con scroll suave a secciones
- ✅ Menú hamburguesa responsive en móvil
- ✅ Hero animado con mockup de teléfono flotante
- ✅ Sección Problema con estadísticas
- ✅ Funciones: IA, Gamificación, Monitoreo
- ✅ Timeline Cómo Funciona (5 pasos)
- ✅ Grid de 6 Beneficios
- ✅ Metodología con stack tecnológico
- ✅ CTA con botones de descarga + formulario Reactive Forms
- ✅ Validaciones de formulario accesibles
- ✅ Footer completo con equipo y contacto
- ✅ Animaciones reveal con IntersectionObserver
- ✅ Totalmente responsive (mobile-first)
- ✅ Semántica HTML + aria-labels (accesible)

---

## 👨‍💻 Equipo UTCV

Proyecto desarrollado en la **Universidad Tecnológica del Centro de Veracruz (UTCV)**.

📧 Contacto: obesiapp@utcv.edu.mx
