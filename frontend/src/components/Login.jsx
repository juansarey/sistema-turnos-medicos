import { useState } from "react";
import axios from "axios";

function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Limpiar errores previos

        try {
            const respuesta = await axios.post("http://localhost:8080/api/auth/login", {
                email: email,
                password: password
            });

            // Si llegamos acá, el login fue exitoso.
            // Avisamos al componente padre (App) que guarde al usuario.
            onLoginSuccess(respuesta.data);

        } catch (err) {
            setError("❌ Credenciales incorrectas. Intente de nuevo.");
        }
    };

    return (
        <div className="max-w-md w-full mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Iniciar Sesión</h2>

            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="ej: paciente@gmail.com"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="********"
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                >
                    Ingresar
                </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
                ¿No tenés cuenta? <span className="text-blue-500 font-bold cursor-pointer">Registrate acá</span>
            </p>
        </div>
    );
}

export default Login;