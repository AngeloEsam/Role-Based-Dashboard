import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginPage: React.FC = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    type User = {
        email: string;
        password: string;
    };

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const handleSubmit = async (values: typeof initialValues) => {
        setError("");
        try {
            const response = await fetch("/data/users.json");
            const users: User[] = await response.json();
            const user = users.find(
                (u: User) => u.email === values.email && u.password === values.password
            );
            if (user) {
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                navigate("/dashboard");
            } else {
                setError("Invalid email or password.");
            }
        } catch {
            setError("Error validating credentials.");
        }
    };

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, []);

    React.useEffect(() => {
        const user = localStorage.getItem("loggedInUser");
        if (user) {
            navigate("/dashboard", { replace: true });
        }
    }, [navigate]);

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
            style={{ minHeight: '100vh', minWidth: '100vw' }}
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md transition-transform transform hover:scale-[1.01]">
                    <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
                        Welcome Back 👋
                    </h2>
                    {error && (
                        <div className="mb-4 text-red-500 text-center font-medium">
                            {error}
                        </div>
                    )}
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                            Email Address
                        </label>
                        <Field
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                            Password
                        </label>
                        <Field
                            type="password"
                            name="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                        Login
                    </button>
                    <p className="mt-6 text-center text-sm text-gray-500">
                        Don’t have an account?{" "}
                        <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
                            Sign up
                        </span>
                    </p>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginPage;
