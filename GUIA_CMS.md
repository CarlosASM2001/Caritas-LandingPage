# Guía de Integración CMS para Caritas

Esta guía te ayudará a configurar y usar un sistema de gestión de contenido (CMS) gratuito para tu aplicación Caritas.

## ¿Qué es un CMS?

Un Sistema de Gestión de Contenido (CMS) te permite:
- ✅ Crear y editar contenido sin tocar código
- ✅ Gestionar imágenes y archivos multimedia
- ✅ Organizar contenido por categorías
- ✅ Publicar/despublicar contenido fácilmente
- ✅ Permitir que diferentes usuarios gestionen el contenido

## Opción Recomendada: Strapi

**Strapi** es un CMS headless gratuito y de código abierto, perfecto para organizaciones como Caritas.

### Ventajas de Strapi:
- 🆓 **Completamente gratuito**
- 🔧 **Fácil de configurar**
- 🎨 **Panel de administración intuitivo**
- 🔐 **Control de usuarios y permisos**
- 📱 **API REST automática**
- 🌐 **Se puede hostear gratis**

## Instalación y Configuración

### Paso 1: Instalar Strapi

```bash
# Crear proyecto Strapi en carpeta separada
npx create-strapi-app@latest caritas-cms --quickstart

# Navegar al directorio
cd caritas-cms

# Iniciar Strapi
npm run develop
```

Strapi se abrirá en `http://localhost:1337`

### Paso 2: Configuración Inicial

1. **Crear cuenta de administrador**
   - Ve a `http://localhost:1337/admin`
   - Crea tu cuenta de administrador

2. **Configurar Content Types**
   
   **Para Noticias:**
   - Ve a Content-Types Builder
   - Crea "Noticia" (singular) / "Noticias" (plural)
   - Agrega campos:
     - `titulo` (Text, Required)
     - `contenido` (Rich Text, Required)
     - `fecha` (Date, Required)
     - `imagen` (Media - Single, Optional)
     - `categoria` (Enumeration: "Eventos", "Actividades", "Comunicados", "Proyectos")

   **Para Páginas:**
   - Crea "Pagina" / "Paginas"
   - Agrega campos:
     - `titulo` (Text, Required)
     - `contenido` (Rich Text, Required)
     - `slug` (Text, Required, Unique)

3. **Configurar Permisos**
   - Ve a Settings > Users & Permissions > Roles
   - Edita "Public" role
   - En "Application", habilita:
     - Noticia: `find` y `findOne`
     - Pagina: `find` y `findOne`
   - Guarda los cambios

### Paso 3: Configurar tu Aplicación React

1. **Instalar dependencias**
```bash
npm install axios
```

2. **Configurar variables de entorno**
```bash
# Crear archivo .env en la raíz del proyecto
echo "REACT_APP_STRAPI_URL=http://localhost:1337" > .env
```

3. **Usar los componentes creados**
   - Ya tienes `NoticiasConCMS.jsx` listo para usar
   - Los servicios y hooks están configurados en:
     - `src/services/cms.js`
     - `src/hooks/useCMS.js`

### Paso 4: Actualizar tu aplicación

Para usar la nueva página con CMS, actualiza tu router:

```jsx
// En tu App.jsx o router
import NoticiasConCMS from './pages/NoticiasConCMS';

// Reemplaza la ruta de noticias
<Route path="/noticias" element={<NoticiasConCMS />} />
```

## Cómo Usar el CMS

### Gestionar Noticias

1. Ve a `http://localhost:1337/admin`
2. En el menú lateral, haz clic en "Noticias"
3. Haz clic en "Create new entry"
4. Completa los campos:
   - **Título**: El título de la noticia
   - **Contenido**: El texto completo (con formato)
   - **Fecha**: Fecha de publicación
   - **Imagen**: Sube una imagen (opcional)
   - **Categoría**: Selecciona una categoría
5. Haz clic en "Save" y luego "Publish"

### Gestionar Páginas

1. En el admin, haz clic en "Paginas"
2. Crea nuevas páginas con:
   - **Título**: Título de la página
   - **Contenido**: Contenido de la página
   - **Slug**: URL amigable (ej: "quienes-somos")

## Hosting Gratuito

### Opciones para Strapi:
1. **Railway** - Hasta 500 horas gratis/mes
2. **Heroku** - Plan gratuito limitado
3. **DigitalOcean App Platform** - $5/mes (muy estable)
4. **VPS gratuito** - Oracle Cloud, Google Cloud (con créditos)

### Opciones para React:
1. **Vercel** - Gratuito para proyectos personales
2. **Netlify** - Gratuito con limitaciones generosas
3. **GitHub Pages** - Gratuito para repositorios públicos

## Alternativas a Strapi

### Si Strapi es muy complejo:

1. **Sanity** (Recomendado)
   - Plan gratuito: 100K requests/mes
   - Excelente experiencia de usuario
   - Hosting incluido

2. **Contentful**
   - Plan gratuito: 25K records
   - Muy maduro y estable
   - CDN global incluido

3. **Forestry/TinaCMS**
   - Se integra con GitHub
   - Ideal para sitios estáticos
   - Completamente gratuito

4. **NetlifyCMS (Decap CMS)**
   - Completamente gratuito
   - Se integra con Git
   - Perfecto para sitios simples

## Migración de Datos

Si ya tienes contenido estático, puedes:

1. **Migración manual**: Copia y pega el contenido existente
2. **Importación masiva**: Usa la API de Strapi para importar datos
3. **Script de migración**: Crea un script que lea tus datos actuales y los envíe a Strapi

## Mantenimiento

### Respaldos:
- Strapi almacena datos en SQLite por defecto
- Respalda regularmente la carpeta `.tmp` y `database.db`
- Para producción, usa PostgreSQL o MySQL

### Actualizaciones:
```bash
# Actualizar Strapi
npm run strapi version
npm update @strapi/strapi
```

### Monitoreo:
- Configura alertas para cuando Strapi esté caído
- Usa herramientas como Uptime Robot (gratuito)

## Soporte y Recursos

- **Documentación oficial**: https://strapi.io/documentation
- **Comunidad**: https://discord.strapi.io
- **Tutoriales**: YouTube "Strapi tutorial español"
- **Soporte**: GitHub Issues en tu repositorio

## Próximos Pasos

1. ✅ **Instalar Strapi** siguiendo el Paso 1
2. ✅ **Configurar Content Types** según el Paso 2
3. ✅ **Crear contenido de prueba** en el admin
4. ✅ **Probar la integración** con `NoticiasConCMS.jsx`
5. 📋 **Migrar contenido existente**
6. 📋 **Configurar hosting** para producción
7. 📋 **Entrenar usuarios** en el uso del CMS

¿Necesitas ayuda con algún paso específico? ¡No dudes en preguntar!