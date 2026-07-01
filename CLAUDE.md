# Margarité — Instrucciones para Claude

## Proyecto
Landing page de suscripción floral premium. Marca de Mendoza, Argentina.
Estética: editorial europea, silenciosa, premium.
Referencias: Aesop, Flamingo Estate, Frama, Loewe Home.

## Stack
- React + TypeScript + Vite
- Tailwind CSS v4 (con `@theme` en index.css — NO tailwind.config.js)
- Framer Motion (`motion/react`)
- Lucide React (iconos, usar con moderación)

## Deploy
- **SIEMPRE** deploy a Vercel. Nunca servidor local.
- GitHub: https://github.com/RUBRAlab/margarite
- URL producción: https://margarite.vercel.app
- Team Vercel: rubralab
- Comando: `vercel deploy --prod --scope rubralab`

## Paleta de colores (NO modificar)
```
cream:      #FAF8EF
cream-warm: #F3ECD9
kraft:      #D8C7A0
kraft-deep: #B49E73
gold:       #E0AE1F
gold-deep:  #C7961A
ink:        #3D3D38
ink-soft:   #76746B
line:       #E6DEC9
```

## Tipografía (NO modificar)
- Serif: Cormorant Garamond (300, 400, 500, 600 — normal e italic)
- Sans: Hanken Grotesk (200, 300, 400, 500, 600)

## Identidad visual — reglas estrictas

### NO hacer
- No gradientes modernos
- No glassmorphism / neomorphism
- No sombras grandes
- No efectos 3D
- No colores nuevos fuera de la paleta
- No botones con border-radius grande (usar rectangulares o sin radius)
- No íconos decorativos en exceso
- No emojis
- No animaciones llamativas (nada de bounce, pulse, spin)
- No cards con fondo y sombra (estética SaaS)

### SÍ hacer
- Espacio en blanco generoso (py-32 md:py-52 como mínimo en secciones)
- Layouts editoriales alternados (imagen izq + texto der, y viceversa)
- Fotografía grande como protagonista
- Tipografía Cormorant en italic para acentos emocionales
- Animaciones lentas y suaves (duration mínimo 1.2s, ease [0.22,1,0.36,1])
- Microdetalles: líneas doradas finas, punto central en separadores
- Grain de papel sobre toda la página (ya implementado en .paper-grain)

## Clases CSS utilitarias personalizadas (index.css)
- `.paper-grain` — grain fijo sobre toda la página (en el wrapper raíz)
- `.gold-rule` — línea dorada horizontal muy fina
- `.dot-rule` + `.dot-rule-dot` — separador con punto central
- `.editorial-frame` — marco interior sutil sobre imágenes (via ::after)
- `.img-cinematic` — transición de scale cinematográfica
- `.img-cinematic-container` — wrapper para activar el hover
- `.section-eyebrow` — etiqueta de sección en uppercase pequeño
- `.vertical-rule` — línea vertical dorada degradada
- `.bg-numeral` — número tipográfico gigante decorativo

## Secciones actuales
1. Nav fijo con blur al hacer scroll
2. Hero — split editorial 52/48
3. Manifiesto — split full-height con imagen editorial
4. Valor — grid 3 columnas tipográfico
5. La Experiencia — 4 pasos alternados
6. Rituales — residencial + corporativo
7. El Compás — sección oscura (bg-ink), jueves
8. Imagen emocional 92vh
9. Imagen puente pre-formulario
10. Formulario de invitación privada (waitlist con AnimatePresence)
11. Footer

## Formulario
- Es un waitlist/membresía, NO ecommerce
- Campos: nombre, email, telefono, tipo (hogar/bodega/hotel/gastronomía), frecuencia
- Al enviar: estado de éxito con monograma SVG dorado
- Lógica: solo console.log por ahora, sin backend

## Imágenes
- Todas de Unsplash con parámetros: `?q=85&w=XXXX&auto=format&fit=crop`
- Aplicar siempre: `grayscale-[8%]` y `brightness-[94%]` para coherencia tonal
- Referenciar la variable `images` en App.tsx para centralizar URLs
