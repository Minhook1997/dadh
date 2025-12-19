import React, { useState } from 'react';
import { Download, Video, Calendar, Tag, ExternalLink } from 'lucide-react';

const ProductDashboard = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'MultiaimIA',
      version: 'v2.1.0',
      lastUpdate: '2024-12-15',
      downloadLink: 'https://github.com/tu-repo/multiaimia/releases',
      tutorialLink: 'https://youtube.com/watch?v=ejemplo1',
      description: 'Sistema de aim asistido con IA'
    },
    {
      id: 2,
      name: 'Bloodstrike AIMCOLOR',
      version: 'v1.5.3',
      lastUpdate: '2024-12-10',
      downloadLink: 'https://github.com/tu-repo/bloodstrike-aimcolor/releases',
      tutorialLink: 'https://youtube.com/watch?v=ejemplo2',
      description: 'Aim color para Bloodstrike'
    },
    {
      id: 3,
      name: 'AimColorValorant',
      version: 'v3.0.1',
      lastUpdate: '2024-12-18',
      downloadLink: 'https://github.com/tu-repo/aimcolor-valorant/releases',
      tutorialLink: 'https://youtube.com/watch?v=ejemplo3',
      description: 'Aim color optimizado para Valorant'
    },
    {
      id: 4,
      name: 'Bypass UID',
      version: 'v1.2.0',
      lastUpdate: '2024-12-12',
      downloadLink: 'https://github.com/tu-repo/bypass-uid/releases',
      tutorialLink: 'https://youtube.com/watch?v=ejemplo4',
      description: 'Sistema de bypass de UID'
    }
  ]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getDaysAgo = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            MultiaimIA Dashboard
          </h1>
          <p className="text-purple-300 text-lg">
            Productos actualizados y listos para usar
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {/* Product Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {product.name}
                  </h2>
                  <p className="text-slate-400 text-sm">
                    {product.description}
                  </p>
                </div>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                  {getDaysAgo(product.lastUpdate) === 0 ? 'HOY' : `${getDaysAgo(product.lastUpdate)}d`}
                </span>
              </div>

              {/* Product Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <Tag className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Versión:</span>
                  <span className="font-mono font-semibold text-purple-300">
                    {product.version}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Última actualización:</span>
                  <span className="font-semibold">
                    {formatDate(product.lastUpdate)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={product.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  <Download className="w-5 h-5" />
                  Descargar
                </a>
                
                <a
                  href={product.tutorialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 border border-slate-600/50 hover:border-slate-500"
                >
                  <Video className="w-5 h-5" />
                  Tutorial
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg px-6 py-3">
            <ExternalLink className="w-4 h-4 text-purple-400" />
            <span className="text-slate-300 text-sm">
              Todos los productos están alojados en GitHub
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDashboard;