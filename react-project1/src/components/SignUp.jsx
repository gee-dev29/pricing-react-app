import React from "react";
import { useState } from "react";
import { FiLock, FiUser, FiMail, FiEye, FiEyeOff } from "react-icons/fi";
// import { SiGoogle, SiFacebook, SiApple, SiMicrosoft } from "react-icons/si";
import Logo from "../assets/react.svg";
import useFormFields from "./hooks/UseFormFields";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { fieldValues, handleChange } = useFormFields({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    return (
        <div>
            {/* // left section  */}
            <div>
                {/* Navbar */}
                <nav className="bg-slate-900 flex justify-between items-center p-4 font-sans">
                    <div className="flex items-center space-x-2">
                        <img src={Logo} alt="logo" />
                        <span className="text-xl text-bold">
                            Front Development Course
                        </span>
                    </div>
                    <div className="">
                        <p className="text-sm">
                            Already have an account?{" "}
                            <a
                                href="/login"
                                className="text-blue-500 hover:text-white"
                            >
                                Log in
                            </a>
                        </p>
                    </div>
                </nav>
                {/* Form */}
                <div className="bg-slate-950 text-white h-screen flex flex-col m-40 items-center shadow-sm">
                    <form className="flex justify-center items-center mt-10 w-full border border-slate-800 p-10 rounded-md max-w-md ">
                        {/* First and Last Name  */}
                        <div>
                            <div className=" flex justify-between space-x-7 mb-6  ">
                                {/* first name */}
                                <div className="relative group">
                                    <FiUser
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-opacity duration-200 group-focus-within:opacity-0
                                    ${
                                        fieldValues.firstName
                                            ? "opacity-0"
                                            : "opacity-100"
                                    }`}
                                    />
                                    <input
                                        className="bg-slate-800 pl-10 text-white p-2 rounded-md w-full border-0 outline-none focus:ring-0 placeholder-white/15  hover:placeholder-white/50"
                                        type="text"
                                        value={fieldValues.firstName}
                                        id="firstName"
                                        onChange={handleChange("firstName")}
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                {/* last name */}
                                <div className="relative group">
                                    <FiUser
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-opacity duration-200 group-focus-within:opacity-0
                                    ${
                                        fieldValues.lastName
                                            ? "opacity-0"
                                            : "opacity-100"
                                    }`}
                                    />
                                    <input
                                        className="bg-slate-800 pl-10 text-white p-2 rounded-md w-full border-0 outline-none focus:ring-0 placeholder-white/15  hover:placeholder-white/50"
                                        type="text"
                                        value={fieldValues.lastName}
                                        id="lastName"
                                        onChange={handleChange("lastName")}
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            {/* Email */}
                            <div className="space-y-4">
                                <div className="relative group">
                                    <FiMail
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-opacity duration-200 group-focus-within:opacity-0
                                        ${
                                            fieldValues.email
                                                ? "opacity-0"
                                                : "opacity-100"
                                        }`}
                                    />
                                    <input
                                        className="bg-slate-800 text-white p-2 pl-10 rounded-md w-full border-0 outline-none focus:ring-0 placeholder-white/15  hover:placeholder-white/50"
                                        type="email"
                                        id="email"
                                        value={fieldValues.email}
                                        onChange={handleChange("email")}
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                {/* password input */}
                                <div className="relative group">
                                    <FiLock
                                        size={15}
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400 transition-opacity duration-200 group-focus-within:opacity-0
                                            ${
                                                fieldValues.password
                                                    ? "opacity-0"
                                                    : "opacity-100"
                                            }`}
                                    />
                                    <input
                                        className="bg-slate-800 pl-10 text-white p-2 rounded-md w-full border-0 outline-none focus:ring-0 placeholder-white/15  hover:placeholder-white/50
                                        autofill:bg-slate-800 autofill:text-white [&:-webkit-autofill]:bg-slate-800 [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_rgb(15,23,42)]"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        id="password"
                                        value={fieldValues.password}
                                        onChange={handleChange("password")}
                                        placeholder="Password"
                                        autoComplete="new-password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <FiEyeOff size={15} />
                                        ) : (
                                            <FiEye size={15} />
                                        )}
                                    </button>
                                </div>
                                {/* confirm password input */}
                                <div className="relative group">
                                    <FiLock
                                        size={15}
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400 transition-opacity duration-200 group-focus-within:opacity-0
                                            ${
                                                fieldValues.confirmPassword
                                                    ? "opacity-0"
                                                    : "opacity-100"
                                            }`}
                                    />
                                    <input
                                        className="bg-slate-800 pl-10 text-white p-2 rounded-md w-full border-0 outline-none focus:ring-0 placeholder-white/15 hover:placeholder-white/50"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        id="password"
                                        value={fieldValues.confirmPassword}
                                        onChange={handleChange(
                                            "confirmPassword"
                                        )}
                                        placeholder="Confirm Password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
                                    >
                                        {showConfirmPassword ? (
                                            <FiEyeOff size={15} />
                                        ) : (
                                            <FiEye size={15} />
                                        )}
                                    </button>
                                </div>
                                <div>
                                    <input
                                        type="submit"
                                        value="Create Account"
                                        className="bg-blue-500 text-white p-2 mt-5 rounded-md w-full border-0 outline-none focus:ring-0"
                                    />
                                    <hr className="my-6 border-t border-gray-500" />
                                </div>
                            </div>
                            {/* Social Account Sign Up */}
                            <div>
                                <div className=" flex justify-between space-x-3 mb-3">
                                    {/* Google Sign Up */}
                                    <div className="text-white p-3 pl-4 pr-5 text-sm font-light rounded-md border border-gray-600 flex justify-center items-center space-x-2 hover:border-slate-800 cursor-pointer">
                                        {/* <SiGoogle className="inline-block text-black mr-2" /> */}
                                        Sign up with Google
                                    </div>
                                    {/* Microsoft Sign Up */}
                                    <div>
                                        <div className="text-white p-3 pl-4 pr-5 text-sm border font-light border-gray-600 p-2 flex justify-center items-center rounded-md space-x-2 hover:bg-slate-800 cursor-pointer">
                                            Sign up with Microsoft
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white p-3 pl-4 pr-5 text-sm font-light rounded-md border border-gray-600 flex justify-center items-center space-x-2 hover:border-slate-800 cursor-pointer">
                                    Sign up with Apple
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* // right section */}
            <div></div>
        </div>
    );
}
