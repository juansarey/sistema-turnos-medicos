// src/pages/Servicios.jsx
import React from 'react';

const Servicios = () => {
    const whatsapp = () => {
        window.open("https://wa.me/5493516515681", "_blank");
    };

    return (
        <section className="text-gray-600 body-font bg-white min-h-screen py-24">
            <div className="container px-5 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-blue-900 mb-4">
                        Especialidades Médicas
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                        Tecnología patentada y tres generaciones de experiencia.
                    </p>
                </div>

                {/* Aquí van tus tarjetas de servicios (Cromoendoscopía, etc.) */}
                <div className="flex flex-wrap -m-4">
                    {/* SERVICIO 1: CROMOENDOSCOPÍA */}
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5 shrink-0 shadow-sm">
                            {/* Icono de Ojo/Diagnóstico */}
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <div className="grow">
                            <h2 className="text-gray-900 text-lg title-font font-bold mb-3">Cromoendoscopía</h2>
                            <p className="leading-relaxed text-base">
                                Técnica de diagnóstico avanzado para patologías de la voz. Propiedad intelectual respaldada por publicaciones en el <i>Journal of Voice</i>.
                            </p>
                        </div>
                    </div>

                    {/* SERVICIO 2: CIRUGÍA ENDOSCÓPICA */}
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5 shrink-0 shadow-sm">
                            {/* Icono de Pulso/Cirugía */}
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <div className="grow">
                            <h2 className="text-gray-900 text-lg title-font font-bold mb-3">Cirugía Endoscópica</h2>
                            <p className="leading-relaxed text-base">
                                Procedimientos mínimamente invasivos en laringe, tráquea y senos paranasales utilizando instrumental patentado y tecnología de punta.
                            </p>
                        </div>
                    </div>

                    {/* SERVICIO 3: O.R.L. INTEGRAL */}
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5 shrink-0 shadow-sm">
                            {/* Icono de Medicina General */}
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <div className="grow">
                            <h2 className="text-gray-900 text-lg title-font font-bold mb-3">O.R.L. Integral</h2>
                            <p className="leading-relaxed text-base">
                                Atención especializada en consultorio para diagnósticos rápidos y tratamientos efectivos, continuando el legado de atención personalizada.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                    <button onClick={whatsapp} className="text-white bg-blue-600 border-0 py-3 px-8 hover:bg-blue-700 rounded-lg text-lg font-bold transition">
                        Contáctanos mediante WhatsApp
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Servicios;
