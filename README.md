# KAIZEN — sitio web

Abrí `index.html` en el navegador (o subí la carpeta completa a cualquier hosting estático).

## Lo que vas a editar
Todo está en `js/products.js`:
- `WHATSAPP_NUMBER` — **reemplazá `598XXXXXXXXX`** por tu número (ej. `59899123456`). Es el único lugar.
- `INSTAGRAM_USERNAME`, `STORE_NAME`, `STORE_LOCATION`, `MP_INSTALLMENTS`.
- `PRODUCTS` — una línea por perfume. Precios a mano (`transfer` y `mp`). `null` = "Consultar".

## Imágenes
Carpeta: `assets/images/products/`
- Formato recomendado: **4:5 (800×1000 px)**, `.webp` o `.jpg`.
- Para reemplazar una foto: guardá la nueva con el **mismo nombre**. No hay que tocar código.
- Para agregar una a un perfume sin imagen: copiá el archivo a esa carpeta y escribí su nombre en `image:` de ese producto.
- Logo y hero: `assets/images/logo/` (`kaizen-wordmark.png`, `kaizen-hero.jpg`, `og.jpg` para compartir).

## Estructura
```
index.html
css/styles.css
js/products.js   <- datos
js/app.js        <- lógica
assets/images/products | logo
```
