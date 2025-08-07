// Script de diagnóstico para el CMS
import axios from 'axios';

const API_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';

console.log('🔍 Iniciando diagnóstico del CMS...');
console.log('📍 URL configurada:', API_URL);

async function diagnosticarCMS() {
  try {
    console.log('\n1️⃣ Probando conexión básica a Strapi...');
    const healthCheck = await axios.get(`${API_URL}/_health`, {
      timeout: 5000
    });
    console.log('✅ Strapi está corriendo');
    
  } catch (error) {
    console.log('❌ Strapi no está corriendo o no es accesible');
    console.log('   Error:', error.message);
    console.log('\n💡 Soluciones:');
    console.log('   - Asegúrate de que Strapi esté corriendo: npm run develop');
    console.log('   - Verifica que esté en http://localhost:1337');
    return;
  }

  try {
    console.log('\n2️⃣ Probando endpoint de noticias...');
    const response = await axios.get(`${API_URL}/api/noticias?populate=*`);
    
    console.log('✅ Endpoint de noticias accesible');
    console.log('📊 Datos recibidos:');
    console.log(`   - Total de noticias: ${response.data.data?.length || 0}`);
    
    if (response.data.data && response.data.data.length > 0) {
      console.log('\n📝 Primera noticia encontrada:');
      const noticia = response.data.data[0];
      console.log('   - ID:', noticia.id);
      console.log('   - Título:', noticia.attributes?.titulo || 'Sin título');
      console.log('   - Fecha:', noticia.attributes?.fecha || noticia.attributes?.publishedAt);
      console.log('   - Categoría:', noticia.attributes?.categoria || 'Sin categoría');
      console.log('   - Publicada:', noticia.attributes?.publishedAt ? 'Sí' : 'No');
    } else {
      console.log('⚠️  No hay noticias en Strapi');
      console.log('\n💡 Soluciones:');
      console.log('   - Ve a http://localhost:1337/admin');
      console.log('   - Crea una noticia');
      console.log('   - Asegúrate de hacer clic en "Publish"');
    }
    
  } catch (error) {
    if (error.response?.status === 403) {
      console.log('❌ Error de permisos (403 Forbidden)');
      console.log('\n💡 Solución:');
      console.log('   - Ve a Strapi Admin → Settings → Users & Permissions → Roles');
      console.log('   - Edita "Public" role');
      console.log('   - En "Noticia", activa "find" y "findOne"');
      console.log('   - Guarda los cambios');
    } else {
      console.log('❌ Error al acceder a noticias:', error.message);
      console.log('   Status:', error.response?.status);
      console.log('   Data:', error.response?.data);
    }
  }
}

// Ejecutar diagnóstico
diagnosticarCMS().then(() => {
  console.log('\n🏁 Diagnóstico completado');
}).catch((error) => {
  console.log('💥 Error en diagnóstico:', error.message);
});