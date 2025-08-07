# CMS Simple para Gestión de Contenido - Caritas

Esta guía te mostrará cómo configurar un CMS **solo para gestionar el contenido** de tus secciones existentes como Noticias. Tu sitio seguirá funcionando normal, pero podrás editar el contenido desde un panel web.

## ✅ ¿Qué lograrás?

- **Panel web** para subir y editar noticias sin tocar código
- **Subida de imágenes** fácil y automática
- **Tu sitio funciona igual** - si el CMS falla, usa los datos que ya tienes
- **Sin complicaciones** - solo gestión de contenido, no páginas nuevas

## 🚀 Instalación Rápida

### Paso 1: Configurar Strapi (5 minutos)

```bash
# En una nueva carpeta (separada de tu proyecto)
npx create-strapi-app@latest caritas-contenido --quickstart
```

Esto abrirá Strapi en `http://localhost:1337`

### Paso 2: Configuración Inicial

1. **Crear tu cuenta admin**
   - Ve a `http://localhost:1337/admin`
   - Crea tu usuario administrador

2. **Crear el modelo de Noticias**
   - Ve a "Content-Types Builder" 
   - Haz clic en "Create new collection type"
   - Nombre: `Noticia` (singular)
   - Agrega estos campos:

   | Campo | Tipo | ¿Requerido? |
   |-------|------|-------------|
   | `titulo` | Text | ✅ Sí |
   | `contenido` | Rich Text | ✅ Sí |
   | `fecha` | Date | ✅ Sí |
   | `categoria` | Enumeration | No |
   | `imagen` | Media (Single) | No |

   Para **categoria**, agrega estas opciones:
   - Eventos
   - Actividades  
   - Comunicados
   - Proyectos

3. **Configurar permisos públicos**
   - Ve a "Settings" → "Users & Permissions" → "Roles"
   - Haz clic en "Public"
   - En la sección "Noticia", activa:
     - ✅ `find` (para obtener todas las noticias)
     - ✅ `findOne` (para obtener una noticia específica)
   - **Guarda los cambios**

### Paso 3: Configurar tu proyecto React

1. **Instalar dependencia**
```bash
npm install axios
```

2. **Crear archivo de configuración**
```bash
# Crear .env en la raíz de tu proyecto
echo "REACT_APP_STRAPI_URL=http://localhost:1337" > .env
```

¡Y ya está! Tu página de noticias ahora usará el CMS automáticamente.

## 📝 Cómo usar el CMS

### Crear una nueva noticia

1. Ve a `http://localhost:1337/admin`
2. En el menú lateral, haz clic en "Noticias"
3. Haz clic en "Create new entry"
4. Llena los campos:
   - **Título**: El título de tu noticia
   - **Contenido**: El texto completo (puedes usar negritas, cursivas, etc.)
   - **Fecha**: Cuándo publicar la noticia
   - **Categoría**: Selecciona una categoría
   - **Imagen**: Arrastra y suelta una imagen

5. Haz clic en "Save" y luego en "Publish"

### Editar una noticia existente

1. En "Noticias", haz clic en la noticia que quieres editar
2. Modifica lo que necesites
3. Haz clic en "Save" y "Publish"

### Eliminar una noticia

1. En la lista de noticias, haz clic en la papelera (🗑️)
2. Confirma la eliminación

## 🔧 Funcionalidades

### ✅ Lo que YA funciona:
- **Fallback automático**: Si Strapi no funciona, usa los datos estáticos
- **Búsqueda**: Funciona con contenido del CMS y estático
- **Filtros por categoría**: Se actualizan automáticamente
- **Imágenes**: Se manejan automáticamente
- **Responsive**: Funciona en móvil y desktop

### 🎯 Beneficios inmediatos:
- **Sin riesgo**: Tu sitio nunca se rompe
- **Fácil de usar**: Panel intuitivo para editores
- **Rápido**: Solo toma 10 minutos configurar
- **Gratis**: Strapi es completamente gratuito

## 🛠️ Solución de Problemas

### "No se cargan las noticias del CMS"
1. ¿Está Strapi corriendo? Ve a `http://localhost:1337`
2. ¿Configuraste los permisos públicos? Revisa el Paso 2.3
3. ¿Tienes el archivo `.env`? Debe contener `REACT_APP_STRAPI_URL=http://localhost:1337`

### "Error de CORS"
Si ves errores de CORS, agrega esto a `config/middlewares.js` en Strapi:

```javascript
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:3000', 'http://localhost:5173'] // Agrega tu puerto de React
    }
  },
  // ... resto de middlewares
];
```

### "Las imágenes no se muestran"
- Asegúrate de que Strapi esté corriendo en `http://localhost:1337`
- Las imágenes se sirven desde Strapi automáticamente

## 🚀 Para Producción

Cuando quieras poner tu sitio en vivo:

1. **Hosting de Strapi** (elige uno):
   - **Railway**: Gratuito hasta 500 horas/mes
   - **Heroku**: Plan básico $7/mes
   - **DigitalOcean**: $5/mes (muy estable)

2. **Actualizar configuración**:
   ```bash
   # En producción, cambia tu .env a:
   REACT_APP_STRAPI_URL=https://tu-strapi.railway.app
   ```

3. **Tu aplicación React** puede ir en:
   - **Vercel**: Gratuito
   - **Netlify**: Gratuito  
   - **GitHub Pages**: Gratuito

## 🎉 ¡Listo!

Tu CMS está configurado. Ahora puedes:

1. **Crear contenido** en `http://localhost:1337/admin`
2. **Ver tu sitio** funcionando normal
3. **Compartir acceso** al CMS con otros editores

### Próximos pasos (opcionales):

- 📋 Migrar tus noticias existentes al CMS
- 👥 Crear usuarios adicionales en Strapi  
- 🎨 Personalizar el panel de administración
- 📱 Configurar notificaciones por email

¿Tienes preguntas? ¡Solo pregunta!