import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="h-screen">
            <Header />
            <div className="bg-gray-800">
                <div className="min-h-screen py-5 sm:px-10 px-10 md:px-20">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
