import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";

export default function Navbar() {
    return (
        <nav className="bg-slate-900 p-4 flex justify-start items-center space-x-15">
            <div className="flex items-center space-x-2">
                <img src={Logo} alt="logo" className=" h-8 w-8" />
                <span className=" text-xl font-bold">React Courses</span>
            </div>
            <div className="space-x-8 flex justify-center ml-110">
                <a href="#home" className="hover:text-gray-400">
                    Home
                </a>
                <a href="#Features" className="hover:text-gray-400">
                    Features
                </a>
                <a href="#Pricing" className="hover:text-gray-400">
                    Pricing
                </a>
                <a href="#Testimonials" className="hover:text-gray-400">
                    Testimonials
                </a>
            </div>
            <div>
                <Link
                    to="/signup"
                    className="bg-blue-600 text-white px-4 py-2 rounded flex justify-end ml-80 hover:bg-blue-700"
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    );
}
