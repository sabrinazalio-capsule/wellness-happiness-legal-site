# Happiness To Go – Páginas legales

Web de **Términos y condiciones** y **Solicitud de eliminación de datos** para la app Happiness To Go. Desarrollada con **Vite + React**. La eliminación de datos se ejecuta **de forma automática** mediante la Supabase Edge Function al enviar el formulario (sin pasos manuales).

## Contenido

- **/** – Términos y condiciones (inglés)
- **/delete-data** – Solicitud de eliminación de datos; el formulario llama al backend y la limpieza es automática
- Estilos en `src/index.css` (mismos que la versión estática)

## Requisitos

- Node.js 18+
- npm o pnpm

## Configuración

1. Copia el archivo de ejemplo de variables de entorno:
   ```bash
   cp .env.example .env
   ```
2. Edita `.env` y rellena con los valores de tu proyecto Supabase (Dashboard → Project Settings → API):
   - `VITE_SUPABASE_URL` – URL del proyecto (ej. `https://xxx.supabase.co`)
   - `VITE_SUPABASE_ANON_KEY` – Clave anon (pública); la misma que usa la app principal

**No subas `.env` al repositorio** (está en `.gitignore`). En despliegues (Vercel, Netlify, etc.) configura estas variables en el panel del proveedor.

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build y preview

```bash
npm run build
npm run preview
```

El build queda en `dist/`.

## Backend (Edge Function)

El formulario de eliminación llama a la Supabase Edge Function **`delete-user-data`** del proyecto principal (wellness-happiness-community):

- **Ruta:** `supabase/functions/delete-user-data/index.ts`
- **Qué hace:** recibe `email` y `confirmEmail`, comprueba que coincidan, busca el usuario en `profiles` por email y borra en orden: post_likes, comments, community_posts, journal_entries, daily_glow_completions, user_progress, app_users, profiles y por último el usuario en Auth.

### Desplegar la Edge Function

Desde la raíz del proyecto principal (wellness-happiness-community):

1. Instala [Supabase CLI](https://supabase.com/docs/guides/cli) y haz `supabase login`.
2. Enlaza el proyecto (si aún no): `supabase link --project-ref <tu-project-ref>`.
3. Despliega: `supabase functions deploy delete-user-data`

## Publicar (GitHub Pages, Vercel, Netlify)

- **Vercel / Netlify:** Conecta el repo, configura `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en las variables de entorno, y usa el comando de build por defecto (`npm run build`). La raíz de publicación es `dist`.
- **GitHub Pages:** Haz build con `npm run build`. Si el sitio está en un subpath (ej. `https://usuario.github.io/legal-site/`), en `vite.config.js` define `base: '/legal-site/'`. Sube el contenido de `dist` a la rama o carpeta que uses para Pages.

Para que la eliminación funcione, la Edge Function `delete-user-data` debe estar desplegada en el mismo proyecto Supabase que usa la app (y las variables de entorno deben apuntar a ese proyecto).

## Flujo de eliminación (automático)

1. El usuario rellena email, confirmación y marca la casilla en **/delete-data**.
2. Al enviar, el frontend hace `POST` a `SUPABASE_URL/functions/v1/delete-user-data` con `{ email, confirmEmail }` y `Authorization: Bearer SUPABASE_ANON_KEY`.
3. La Edge Function valida, busca el usuario por email en `profiles` y ejecuta todas las eliminaciones en base de datos y en Auth.
4. El frontend muestra éxito o error. No hay pasos manuales; todo es automático.
