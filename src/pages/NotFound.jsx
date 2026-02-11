import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen grid place-items-center bg-slate-950 text-slate-100 p-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold">404</h1>
                <p className="mt-2 text-slate-300">Ruta no encontrada</p>
                <Link className="inline-block mt-4 rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-900" to="/app">
                    Volver
                </Link>
            </div>
        </div>
    );
}