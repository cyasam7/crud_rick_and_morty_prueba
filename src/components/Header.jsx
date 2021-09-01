import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Header() {
    const { pathname } = useLocation();
    const isHome = pathname === "/" || pathname === "/creados";
    const isCreados = pathname === "/creados";

    return (
        <header className="m-5 mx-10 sm:mx-10 md:mx-20 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto h-full flex items-center justify-between">
                <h1 className="font-mono text-gray-600 font-black">Rick and Morty CRUD</h1>
                {isHome && (
                    <div className="flex gap-4">
                        <Link
                            to={isCreados ? "/" : "/creados"}
                            className="shadow text-white rounded bg-gray-400 hover:bg-gray-600 px-5 py-2 font-bold"
                        >
                            {isCreados ? "Volver" : "Agregados"}
                        </Link>
                        <Link
                            to="/agregar"
                            className="shadow text-white rounded bg-green-400 hover:bg-green-600 px-5 py-2 font-bold"
                        >
                            Agregar
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
