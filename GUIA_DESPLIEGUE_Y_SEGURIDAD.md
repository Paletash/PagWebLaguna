# 🛡️ Guía de Despliegue Seguro y Configuración de Dominio con Cloudflare
**Proyecto:** OLD-LND 2026 · Observatorio Laboral Digital  
**Rama:** `seguridad-dominio`

Esta guía contiene los pasos exactos y las mejores prácticas para vincular tu nuevo dominio comprado, desplegar la web de forma segura y blindarla contra ciberataques.

---

## 📋 Resumen de Mejoras Incluidas en esta Rama
1. **Archivo `_headers`:** 
   - HSTS precargable por 1 año (`max-age=31536000`).
   - Content-Security-Policy (CSP) personalizada que permite Google Fonts y el endpoint del formulario (`formsubmit.co`), bloqueando cualquier inyección externa no autorizada.
   - Anti-Clickjacking (`X-Frame-Options: DENY`, `frame-ancestors 'none'`).
   - Anti-MIME Sniffing (`X-Content-Type-Options: nosniff`).
   - Restricción de permisos de hardware del navegador (`Permissions-Policy`).
   - Control de caché optimizado (HTML fresco en cada visita, assets estáticos cacheados en CDN).
2. **Auditoría de Enlaces y Scripts:**
   - Cero dependencias vulnerables en runtime.
   - Todos los enlaces internos utilizan rutas relativas limpias.
   - No hay vectores de *reverse-tabnabbing* ni inyecciones DOM no controladas.

---

## 🚀 Paso a Paso: Al Comprar y Conectar el Dominio

### 1. En el Registrador de Dominio (Namecheap, GoDaddy, Hostinger, DonDominio, etc.)
* **Activar "WHOIS Privacy" / "Protección de Privacidad":**
  Asegúrate de que la casilla de privacidad esté activa (en la mayoría de los registradores es gratuita). Esto evita que tus datos personales (nombre, teléfono, dirección, correo) queden expuestos públicamente en las bases de datos de dominios.

---

### 2. Conectar tu Dominio a Cloudflare (Plan Gratuito)
Cloudflare actuará como escudo protector entre los atacantes y tu servidor real.

1. Crea una cuenta gratuita en [cloudflare.com](https://dash.cloudflare.com/) si aún no la tienes.
2. Haz clic en **"Add a site" (Agregar un sitio)** e ingresa tu nuevo dominio (ej. `mi-dominio.com`).
3. Selecciona el **Plan Free ($0)**.
4. Cloudflare escaneará tus registros DNS actuales.
5. Cloudflare te asignará **dos servidores de nombres (Nameservers)** (por ejemplo: `ada.ns.cloudflare.com` y `bob.ns.cloudflare.com`).
6. Dirígete a la administración de tu registrador de dominio (donde lo compraste), busca la sección **Nameservers / Servidores de nombres**, cambia de los "Nameservers por defecto" a **"Custom Nameservers"** y pega los dos que te dio Cloudflare.
7. Guarda los cambios. La propagación suele demorar entre 5 minutos y un par de horas.

---

### 3. Activar el Blindaje de Seguridad en Cloudflare
Una vez activo el dominio en Cloudflare, configura estos apartados en el panel izquierdo:

#### A. SSL / TLS
* **Modo de cifrado:** Selecciona **Full (strict)** / **Completo (estricto)**.
* **Edge Certificates (Certificados en el borde):**
  * Activa **Always Use HTTPS** (Fuerza la redirección automática de http:// a https://).
  * Activa **Automatic HTTPS Rewrites**.
  * **Minimum TLS Version:** Selecciona **TLS 1.2** o **TLS 1.3** (bloquea protocolos antiguos inseguros como TLS 1.0 y 1.1).
  * Activa **Opportunistic Encryption**.

#### B. DNS y DNSSEC
* En **DNS > Settings**, busca **DNSSEC** y haz clic en **Enable DNSSEC**.
* Cloudflare te proporcionará los datos del registro `DS` (Key Tag, Digest Type, Digest). Cópialos y pégalos en la sección DNSSEC de tu registrador de dominio. Esto protege a tus usuarios de ataques de envenenamiento DNS (DNS Spoofing).

#### C. Seguridad y Firewall (WAF)
* En **Security > Bots**: Activa **Bot Fight Mode** (bloquea scrapers maliciosos y bots automatizados).
* En **Security > Settings**: Configura el nivel de seguridad en **Medium**.

---

### 4. Despliegue en Cloudflare Pages (Recomendado para esta Web)
Dado que tu sitio es estático, la forma más rápida, segura y gratuita de alojarlo es **Cloudflare Pages**:

1. En el panel de Cloudflare, ve a **Workers & Pages > Create application > Pages > Connect to Git**.
2. Conecta tu repositorio de GitHub y selecciona este proyecto.
3. En la configuración de compilación (Build Settings):
   - **Framework preset:** `None`
   - **Build command:** *(dejar vacío)*
   - **Build output directory:** `/` (o la raíz del repositorio)
4. Haz clic en **Save and Deploy**.
5. Una vez desplegado, ve a la pestaña **Custom Domains** dentro de tu proyecto en Pages y agrega:
   - `tudominio.com`
   - `www.tudominio.com`
6. ¡Listo! Cloudflare Pages leerá automáticamente tu archivo `_headers` y aplicará todas las reglas de seguridad.

---

### 5. Actualización Final de URLs en el Proyecto
Antes o justo después de desplegar, reemplaza el dominio de ejemplo (`https://old-lnd-2026.example`) por tu dominio final en:
- `robots.txt` (Línea 5: `Sitemap: https://tudominio.com/sitemap.xml`)
- `sitemap.xml` (Todas las etiquetas `<loc>https://tudominio.com/...`)

---

## 🔀 Cómo Unir esta Rama a `main` cuando Tengas el Dominio

Cuando hayas comprado el dominio y estés listo para publicar:

```bash
# 1. Asegúrate de estar en la rama principal
git checkout main

# 2. Fusiona los cambios de seguridad
git merge seguridad-dominio

# 3. Sube los cambios a tu repositorio remoto
git push origin main
```
