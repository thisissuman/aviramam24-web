import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import background from "../src/assets/background.png";
import { useDispatch } from "react-redux";
import { addUser } from "../src/utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../src/constant/env";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    identifier: "raja@gmail.com",
    password: "Raja123",
  };

  const validationSchema = Yup.object({
    identifier: Yup.string()
      .required("Phone Number or Email is required")
      .matches(
        /(^\d{10}$)|(^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$)/,
        "Enter a valid phone number or email"
      ),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.identifier,
        password: values.password,
      }),
      credentials: "include",
    };

    const response = await fetch(BASE_URL + "/login", requestOptions);
    try {
      console.log(response);
      const data = await response.json();

      if (response.ok) {
        setErrorMessage("Lets go");
        dispatch(addUser(data));
        navigate("/");

        // redirect to dashboard page
        /* window.location.href = "/"; */
      } else {
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 px-4 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            {/* Phone Number/Email */}
            <div>
              <label
                htmlFor="identifier"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number or Email
              </label>
              <Field
                type="text"
                id="identifier"
                name="identifier"
                placeholder="Enter Phone Number or Email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="identifier"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>
        {errorMessage && (
          <div className="text-sm text-red-500">{errorMessage}</div>
        )}
        {/* Sign Up Link */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-500 underline hover:text-blue-600"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
