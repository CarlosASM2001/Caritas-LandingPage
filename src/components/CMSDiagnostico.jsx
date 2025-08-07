import React, { useState, useEffect } from 'react';
import { getNoticiasConFallback } from '../services/cmsSimple';
import { noticiasData } from '../data/noticiasData';

const CMSDiagnostico = () => {
  const [diagnostico, setDiagnostico] = useState({
    estado: 'Iniciando...',
    strapi_corriendo: null,
    noticias_cms: [],
    noticias_estaticas: noticiasData.length,
    error: null,
    url_configurada: process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337'
  });

  useEffect(() => {
    realizarDiagnostico();
  }, []);

  const realizarDiagnostico = async () => {
    setDiagnostico(prev => ({ ...prev, estado: 'Ejecutando diagnóstico...' }));

    try {
      // Test 1: Verificar conexión básica
      const response = await fetch(`${diagnostico.url_configurada}/api/noticias?populate=*`);
      
      if (response.ok) {
        const data = await response.json();
        setDiagnostico(prev => ({
          ...prev,
          estado: 'Diagnóstico completado',
          strapi_corriendo: true,
          noticias_cms: data.data || [],
          error: null
        }));
      } else if (response.status === 403) {
        setDiagnostico(prev => ({
          ...prev,
          estado: 'Error de permisos',
          strapi_corriendo: true,
          error: 'Error 403: Permisos no configurados correctamente'
        }));
      } else {
        setDiagnostico(prev => ({
          ...prev,
          estado: 'Error de respuesta',
          strapi_corriendo: true,
          error: `Error ${response.status}: ${response.statusText}`
        }));
      }
    } catch (error) {
      setDiagnostico(prev => ({
        ...prev,
        estado: 'Strapi no accesible',
        strapi_corriendo: false,
        error: error.message
      }));
    }
  };

  const testearFuncionCompleta = async () => {
    setDiagnostico(prev => ({ ...prev, estado: 'Probando función completa...' }));
    
    try {
      const noticias = await getNoticiasConFallback(noticiasData);
      setDiagnostico(prev => ({
        ...prev,
        estado: 'Función probada',
        noticias_finales: noticias.length,
        usando_cms: noticias.length !== noticiasData.length || 
                   (noticias[0] && noticias[0].id && typeof noticias[0].id === 'number')
      }));
    } catch (error) {
      setDiagnostico(prev => ({
        ...prev,
        error: `Error en función: ${error.message}`
      }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          🔍 Diagnóstico del CMS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-semibold text-blue-800">Estado</h3>
            <p className="text-blue-700">{diagnostico.estado}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold text-gray-800">URL Configurada</h3>
            <p className="text-gray-700 text-sm">{diagnostico.url_configurada}</p>
          </div>
        </div>

        {/* Resultados del diagnóstico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className={`p-4 rounded ${diagnostico.strapi_corriendo === null ? 'bg-gray-100' : diagnostico.strapi_corriendo ? 'bg-green-100' : 'bg-red-100'}`}>
            <h3 className="font-semibold">Strapi Funcionando</h3>
            <p className="text-2xl">
              {diagnostico.strapi_corriendo === null ? '⏳' : diagnostico.strapi_corriendo ? '✅' : '❌'}
            </p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded">
            <h3 className="font-semibold text-yellow-800">Noticias en CMS</h3>
            <p className="text-2xl text-yellow-700">{diagnostico.noticias_cms.length}</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-semibold text-purple-800">Noticias Estáticas</h3>
            <p className="text-2xl text-purple-700">{diagnostico.noticias_estaticas}</p>
          </div>
        </div>

        {/* Error si existe */}
        {diagnostico.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <h3 className="font-bold">Error detectado:</h3>
            <p>{diagnostico.error}</p>
          </div>
        )}

        {/* Noticias del CMS */}
        {diagnostico.noticias_cms.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">📰 Noticias encontradas en Strapi:</h3>
            <div className="space-y-2">
              {diagnostico.noticias_cms.map((noticia, index) => (
                <div key={noticia.id} className="bg-green-50 p-3 rounded border">
                  <p><strong>#{index + 1}:</strong> {noticia.attributes?.titulo || 'Sin título'}</p>
                  <p className="text-sm text-gray-600">
                    Fecha: {noticia.attributes?.fecha || noticia.attributes?.publishedAt || 'Sin fecha'}
                  </p>
                  <p className="text-sm text-gray-600">
                    Categoría: {noticia.attributes?.categoria || 'Sin categoría'}
                  </p>
                  <p className="text-sm text-gray-600">
                    Publicada: {noticia.attributes?.publishedAt ? 'Sí' : 'No'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex gap-3">
          <button
            onClick={realizarDiagnostico}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            🔄 Repetir Diagnóstico
          </button>
          
          <button
            onClick={testearFuncionCompleta}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            🧪 Probar Función Completa
          </button>
        </div>

        {/* Instrucciones según el estado */}
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">💡 Siguientes pasos:</h3>
          
          {!diagnostico.strapi_corriendo && (
            <div className="text-red-700">
              <p><strong>1.</strong> Asegúrate de que Strapi esté corriendo:</p>
              <code className="bg-gray-200 p-1 rounded">npm run develop</code>
              <p className="mt-2"><strong>2.</strong> Verifica que esté en http://localhost:1337</p>
            </div>
          )}
          
          {diagnostico.strapi_corriendo && diagnostico.error?.includes('403') && (
            <div className="text-yellow-700">
              <p><strong>1.</strong> Ve a Strapi Admin: http://localhost:1337/admin</p>
              <p><strong>2.</strong> Settings → Users & Permissions → Roles</p>
              <p><strong>3.</strong> Edita "Public" → En "Noticia" activa "find" y "findOne"</p>
              <p><strong>4.</strong> Guarda los cambios</p>
            </div>
          )}
          
          {diagnostico.strapi_corriendo && diagnostico.noticias_cms.length === 0 && (
            <div className="text-blue-700">
              <p><strong>1.</strong> Ve a Strapi Admin: http://localhost:1337/admin</p>
              <p><strong>2.</strong> Crea un "Content Type" llamado "Noticia"</p>
              <p><strong>3.</strong> Agrega campos: titulo, contenido, fecha, categoria, imagen</p>
              <p><strong>4.</strong> Crea una noticia y asegúrate de hacer clic en "Publish"</p>
            </div>
          )}
          
          {diagnostico.noticias_cms.length > 0 && (
            <div className="text-green-700">
              <p>✅ ¡Todo se ve bien! Las noticias deberían aparecer en tu página.</p>
              <p>Si no aparecen, revisa la consola del navegador para errores.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CMSDiagnostico;