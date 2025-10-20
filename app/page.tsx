import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Sección Hero */}
      <section className="h-screen"> {/* Agregado pt-4 para separar del header flotante */}
        {/* Imagen - 65% height/width */}
        <div 
          className="relative w-full h-3/4 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://artwine.es/wp-content/uploads/2025/10/main.webp")'
          }}
        >
          {/* Overlay para mejor legibilidad del texto */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Contenido sobre la imagen */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 max-w-2xl">
              Vive la mejor experiencia de Arte y vino en Barcelona y Madrid
            </h3>
            
            <div className="space-y-4 mb-8 max-w-2xl">
              <h5 className="text-lg md:text-xl leading-relaxed">
                Colorful day, colorful life!
              </h5>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="rounded-md bg-[#7f1345] px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#611136] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Ver Calendario
              </button>
              <button className="rounded-md bg-[#7f1345] px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#611136] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Más Información
              </button>
            </div>
          </div>
        </div>

        {/* Espacio blanco - 35% height/width */}
        <div className="w-full py-5 bg-white flex items-center justify-center">
          <div className="text-center px-8 w-[65%]">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Bienvenidx a Art&Wine, un plan inolvidable.
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Somos pioneros en impartir sesiones de Arte y Vino. Siete años de sonrisas nos avalan y nos impulsan a seguir creando actividades únicas capaces de sorprender.
              <br />
              Para disfrutar la experiencia no necesitas ningún conocimiento previo de pintura. ¡Te sorprenderás de lo que eres capaz!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}