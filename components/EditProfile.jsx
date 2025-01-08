import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import background from "../src/assets/background.png";
import ProfileCard from "./ProfileCard";
import toast, { Toaster } from "react-hot-toast";

const EditProfile = ({ user, onSave }) => {
  const initialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    phoneNumber: user?.phoneNumber,
    email: user?.email,
    gender: user?.gender,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string(),
    phoneNumber: Yup.string().matches(
      /^\d{10}$/,
      "Phone number must be 10 digits"
    ),
    email: Yup.string().email("Invalid email address"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:3000/profile/edit", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        credentials: "include",
      });

      if (response.ok) {
        toast.success("Profile updated successfully!");
        onSave(); // Trigger the slide back to ProfileCard
      } else {
        toast.error("Failed to update profile. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Toaster />
      <div className="max-w-lg w-full bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Edit Profile
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
                placeholder="Email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            {/* Password */}
            {/*  <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password (Optional)
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="New Password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-500"
              />
            </div> */}
            {/* Confirm Password */}
            {/*  <div>
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
                placeholder="Confirm New Password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-sm text-red-500"
              />
            </div> */}
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
              >
                Save Changes
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditProfile;
