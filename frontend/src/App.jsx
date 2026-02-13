import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Servicios from './pages/Servicios';
import logoReyCaro from './assets/logoo.png'; // <--- Importamos la imagen
import Login from './components/Login';

function App() {
  const solicitarTurno = () => {
    window.open("https://wa.me/5493516515681", "_blank");
  };

  const proximamente = () => {
    alert("¡Próximamente! Estamos trabajando para ofrecerte turnos online en breve.");
  };

  const [usuario, setUsuario] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HEADER DE NAVEGACIÓN */}
      <header className="text-gray-600 body-font shadow-md sticky top-0 bg-white z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          {/* LOGO + NOMBRE */}
          <Link to="/" aria-label="Ir al inicio" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 group">

            {/* 1. Imagen del Logo (Sin el círculo azul de fondo) */}
            <img
              src={logoReyCaro}
              alt="Logo Servicio O.R.L. Rey Caro"
              className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-200"
            />

            {/* 2. Texto del Nombre */}
            <span className="ml-2 text-3xl font-bold text-blue-900">
              Servicio O.R.L. Rey Caro
            </span>
          </Link>

          {/* MENÚ DE NAVEGACIÓN */}
          <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center font-medium">
            <Link to="/" className="mr-5 hover:text-blue-600 cursor-pointer transition">Inicio</Link>
            <Link to="/servicios" className="mr-5 hover:text-blue-600 cursor-pointer transition">Servicios</Link>
          </nav>

          {/* BOTÓN DE ACCIÓN */}
          <Link
            to="/turnos"
            className="inline-flex items-center bg-green-600 border-0 py-2 px-4 focus:outline-none hover:bg-green-700 rounded text-white font-bold mt-4 md:mt-0 transition shadow-sm hover:shadow-md"
          >
            Turnos Online
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>

      {/* RUTAS */}
      <Routes>

        {/* RUTA 1: HOME (Página Principal) */}
        <Route path="/" element={
          <main>
            {/* 1. SECCIÓN HERO (Portada) */}
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-blue-900">
                    Excelencia en Otorrinolaringología
                    <span className="block lg:inline"> desde 1946</span>
                  </h1>
                  <p className="mb-8 leading-relaxed text-lg">
                    Tercera generación de especialistas dedicados a la cirugía endoscópica moderna en Córdoba.
                    Innovación, tradición y calidez humana al servicio de su salud.
                  </p>
                  <div className="flex justify-center">
                    <button onClick={proximamente} className="inline-flex text-white bg-blue-600 border-0 py-3 px-8 focus:outline-none hover:bg-blue-700 rounded-lg text-lg shadow-lg transition transform hover:scale-105">
                      Turnos Online
                    </button>
                    <Link to="/servicios" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded-lg text-lg transition">
                      Ver Especialidades
                    </Link>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img loading="lazy" className="object-cover object-center rounded-2xl shadow-2xl" alt="Dr. Rey Caro" src="https://www.reycaro.com.ar/wp-content/uploads/2025/02/cc99672c-eaa2-428d-8f39-1bb25ab77bf9.jpg" />
                </div>
              </div>
            </section>

            {/* 2. SECCIÓN TRAYECTORIA (Historia completa) */}
            <section className="text-gray-600 body-font bg-slate-50 py-20">
              <div className="container px-5 mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-blue-900">Nuestra Historia</h2>
                  <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
                </div>

                <div className="xl:w-2/3 lg:w-3/4 mx-auto text-justify space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    El Servicio de O.R.L. y Broncoesofagología de Clínica Chutro comenzó sus actividades el <strong>2 de agosto de 1946</strong> bajo la dirección del <strong>Prof. Titular Roger Lanza Castelli</strong>, docente de alma noble y generosa. Pionero en las técnicas de broncoscopía y esofagoscopía, fue discípulo del <strong>Prof. Chevalier Jackson</strong> ("el padre de la endoscopía"), a quien invitó a Argentina en 1947, adquiriendo el instrumental más perfeccionado para la época.
                  </p>
                  <p>
                    En 1964 se incorporó el antiguo Jefe de Servicio, el <strong>Dr. Enrique Agustín Rey Caro</strong>, junto al Dr. Rosendo Storero. Juntos continuaron con el espíritu docente e investigador, combinando las técnicas tradicionales con modernas tecnologías. Un hito fundamental fue la adquisición del <strong>primer fibrolaringoscopio Olympus de Sudamérica</strong>.
                  </p>
                  <p>
                    Actualmente, los <strong>Dres. Enrique Pablo Rey Caro y Daniel Gonzalo Rey Caro</strong> (tercera generación) continúan el legado. Especializados en Cirugía Endoscópica, han patentado ante el <strong>INPI</strong> instrumental médico y técnicas quirúrgicas propias. Su trabajo en <strong>Cromoendoscopía</strong> ha sido publicado en la prestigiosa revista <em>Journal of Voice</em>.
                  </p>
                </div>
              </div>
            </section>
          </main>
        } />

        {/* RUTA 2: PÁGINA DE SERVICIOS */}
        <Route path="/servicios" element={<Servicios />} />

        {/* RUTA 3: TURNOS ONLINE (CON MURO DE LOGIN) */}
        <Route path="/turnos" element={
          <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

            {/* CONDICIONAL TERNARIO: ¿Existe usuario? */}
            {usuario ? (
              // SI HAY USUARIO: Mostramos el Formulario de Reserva
              <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-blue-900">Hola, {usuario.rol}!</h2>
                  <p className="mt-2 text-gray-600">Ya podés reservar tu turno.</p>
                </div>
                <ReservaTurno />

                {/* Botón para Cerrar Sesión (Opcional pero útil) */}
                <button
                  onClick={() => setUsuario(null)}
                  className="mt-4 w-full text-red-500 text-sm hover:underline"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              // NO HAY USUARIO: Mostramos el Login
              <Login onLoginSuccess={(datosUsuario) => setUsuario(datosUsuario)} />
            )}

          </div>
        } />
      </Routes>

      {/* SECCIÓN UBICACIÓN (MAPA REAL) */}
      <section className="text-gray-600 body-font relative bg-white border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-96 w-full shadow-md">
            {/* IFRAME DE GOOGLE MAPS CON LA DIRECCIÓN EXACTA */}
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="Ubicación Clínica Chutro"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              // Usamos la dirección exacta en el parámetro 'q' para que aparezca el pin rojo
              src="https://maps.google.com/maps?q=Clinica%20Chutro%2C%20Av.%20Col%C3%B3n%20788%2C%20C%C3%B3rdoba&t=&z=15&ie=UTF8&iwloc=&output=embed"

            ></iframe>

            {/* TARJETA BLANCA FLOTANTE CON DATOS */}
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full max-w-sm">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">DIRECCIÓN</h2>
                <p className="mt-1 text-sm text-gray-600">Av. Colón 788, Córdoba Capital.</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">HORARIOS</h2>
                <p className="mt-1 text-sm text-gray-600">Lun a Vie: 9am - 8pm</p>
              </div>
            </div>
          </div>

          {/* TEXTO AL LADO DEL MAPA */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">¿Dónde estamos?</h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              El Servicio de O.R.L. funciona dentro de la histórica <strong>Clínica Chutro</strong>, ubicada estratégicamente en el centro de la ciudad de Córdoba.
            </p>
            <p className="leading-relaxed mb-5 text-gray-600 text-sm">
              Estacionamiento disponible en calles aledañas. Líneas de colectivo: 10, 11, 12, 14, 60, 62.
            </p>
            <button
              onClick={() => window.open("https://goo.gl/maps/bH8g6FqZgq7b9z5u6", "_blank")} // Link directo para abrir la app de mapas
              className="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg shadow transition font-bold"
            >
              Cómo llegar (GPS)
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER (Pie de Página) */}
      <footer className="text-gray-600 body-font bg-gray-100 border-t border-gray-200 mt-auto">
        <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row flex-col flex-wrap">
          <div className="w-64 shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              {/* 1. Imagen del Logo (Sin el círculo azul de fondo) */}
              <img
                src={logoReyCaro}
                alt="Logo Servicio O.R.L. Rey Caro"
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
              />
              <span className="ml-1 text-xl font-bold text-blue-900">Dres. Rey Caro</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Excelencia médica y tradición en Otorrinolaringología en Córdoba Capital.
            </p>
          </div>

          <div className="grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

            {/* COLUMNA 1: CONTACTO */}
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">CONTACTO</h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a href="https://maps.app.goo.gl/zJbaQxKfx6TNpdXF9" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition flex items-center justify-center md:justify-start gap-2">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Clínica Chutro, Córdoba
                  </a>
                </li>
                <li>
                  <a href="tel:+543511234567" className="text-gray-600 hover:text-blue-600 transition flex items-center justify-center md:justify-start gap-2">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.12 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
                    0351 - 123 4567
                  </a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ereycaro@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition flex items-center justify-center md:justify-start gap-2">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    ereycaro@hotmail.com
                  </a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gonzaloreycaro@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition flex items-center justify-center md:justify-start gap-2">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    gonzaloreycaro@gmail.com
                  </a>
                </li>
                {/* ITEM INSTAGRAM */}
                <li>
                  <a
                    href="https://www.instagram.com/rey_caro_otorrinolaringologia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition flex items-center justify-center md:justify-start gap-2"
                  >
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                    Seguinos en Instagram
                  </a>
                </li>
              </nav>
            </div>

            {/* COLUMNA 2: ACCESO RÁPIDO */}
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">SECCIONES</h2>
              <nav className="list-none mb-10">
                <li><Link to="/" className="text-gray-600 hover:text-blue-600 cursor-pointer">Inicio</Link></li>
                <li><Link to="/servicios" className="text-gray-600 hover:text-blue-600 cursor-pointer">Servicios</Link></li>
                <li><a href="https://wa.me/5493516515681" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 cursor-pointer">Turnos WhatsApp</a></li>
              </nav>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="bg-blue-900">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-300 text-sm text-center sm:text-left">© 2026 Servicio O.R.L. Rey Caro
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="https://www.instagram.com/rey_caro_otorrinolaringologia/"
                target="_blank"
                rel="noopener noreferrer" className="ml-3 text-gray-300 hover:text-white cursor-pointer"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;