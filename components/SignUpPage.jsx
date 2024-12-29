import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import background from "../src/assets/background.png";

const SignUpPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string(),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email address"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    terms: Yup.boolean().oneOf([true], "Accepting terms is required"),
  });

  const handleSubmit = (values) => {
    // write the logic to make a POST request to the server

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        email: values.email,
        gender: values.gender,
        password: values.password,
      }),
    };
    
    fetch("http://localhost:3000/signup", requestOptions)
      .then((response) => {
        if (response.ok) {
          // redirect to login page
          window.location.href = "/login";
        } else {
          console.log("Sign Up failed");
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  };

  return (
    <div
      className="   min-h-screen bg-gradient-to-r from-orange-400 to-yellow-300 flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat 
      "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-lg w-full bg-white rounded-lg shadow-2xl p-8 md:p-10 scale-90">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Sign Up
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            {/* First and Last Name in a Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-600"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
            </div>
            {/* Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <Field
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-600"
                >
                  Gender
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                >
                  <option value="" label="Select gender" />
                  <option value="Male" label="Male" />
                  <option value="Female" label="Female" />
                  <option value="Other" label="Other" />
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email (Optional)"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
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
                placeholder="Password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            {/* Terms and Conditions */}
            <div className="flex items-start">
              <Field
                type="checkbox"
                id="terms"
                name="terms"
                className="mt-1 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I accept the{" "}
                <a
                  href="#"
                  className="text-orange-500 underline hover:text-orange-600"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            <ErrorMessage
              name="terms"
              component="div"
              className="text-sm text-red-500"
            />
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
              >
                Sign Up
              </button>
            </div>
          </Form>
        </Formik>
        {/* Sign In Link */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="#"
            className="text-orange-500 underline hover:text-orange-600"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
