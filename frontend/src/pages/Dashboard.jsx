import ReservaTurno from "../components/ReservaTurno";

function Dashboard({ usuario, onLogout }) {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">

                {/* Encabezado del Panel */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-blue-900">Bienvenido, {usuario.email}</h1>
                        <p className="text-gray-600">Panel de Paciente - {usuario.rol}</p>
                    </div>
                    <button
                        onClick={onLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                    >
                        Cerrar Sesión
                    </button>
                </div>

                {/* Contenido Principal (Grilla) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Tarjeta 1: Reservar Turno */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">📅 Nuevo Turno</h3>
                        <ReservaTurno />
                    </div>

                    {/* Tarjeta 2: Mis Turnos (Futuro historial) */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">📂 Mis Turnos</h3>
                        <p className="text-gray-500 italic">
                            Aquí aparecerá tu historial de turnos y estudios médicos.
                            <br />(Próximamente)
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;