
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  country: "",
  city: "",
  defaultRegion: "",
  farmAreaFeddans: "",
  soilType: "",
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-green-600 focus:ring-4 focus:ring-green-600/10";

const labelClass =
  "block text-sm font-semibold text-gray-700 mb-2";

export default function SignUp() {
  const [formData, setFormData] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const farmArea = Number(formData.farmAreaFeddans);

    if (!Number.isFinite(farmArea) || farmArea < 0) {
      setError("Please enter a valid farm area.");
      return;
    }

    const payload = {
      ...formData,
      farmAreaFeddans: farmArea,
    };

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/auth/signup`,
        payload
      );

      setSuccess(
        response.data?.message || "Account created successfully!"
      );

      setFormData(initialValues);

    } catch (err) {
      const responseData = err.response?.data;

      if (Array.isArray(responseData?.detail)) {
        setError(
          responseData.detail.map((item) => item.msg).join(", ")
        );
      } else {
        setError(
          responseData?.detail ||
          responseData?.message ||
          "Something went wrong. Please try again."
        );
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Personal Information */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-4">
          Personal Information
        </h3>

        <div className="space-y-4">

          <div>
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={inputClass}
              autoComplete="name"
              required
              minLength={2}
            />
          </div>

          <div>
            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass}
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label className={labelClass}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              className={inputClass}
              autoComplete="new-password"
              minLength={8}
              required
            />
            <p className="text-xs text-gray-400 mt-2">
              Use at least 8 characters.
            </p>
          </div>

        </div>
      </div>

      {/* Farm Information */}
      <div className="pt-5 border-t border-gray-200">

        <h3 className="text-sm font-bold text-gray-900 mb-4">
          Farm Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div>
            <label className={labelClass}>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="e.g. Egypt"
              className={inputClass}
              autoComplete="country-name"
              required
            />
          </div>

          <div>
            <label className={labelClass}>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Assiut"
              className={inputClass}
              autoComplete="address-level2"
              required
            />
          </div>

          <div>
            <label className={labelClass}>Default Region</label>
            <input
              type="text"
              name="defaultRegion"
              value={formData.defaultRegion}
              onChange={handleChange}
              placeholder="Farm location / region"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>Farm Area (Feddans)</label>
            <input
              type="number"
              name="farmAreaFeddans"
              value={formData.farmAreaFeddans}
              onChange={handleChange}
              placeholder="e.g. 10"
              className={inputClass}
              min="0"
              step="any"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>Soil Type</label>

            <select
              name="soilType"
              value={formData.soilType}
              onChange={handleChange}
              className={`${inputClass} appearance-none`}
              required
            >
              <option value="" disabled>
                Select your soil type
              </option>
              <option value="Clay">Clay Soil</option>
              <option value="Sandy">Sandy Soil</option>
              <option value="Loamy">Loamy Soil</option>
              <option value="Silty">Silty Soil</option>
              <option value="Chalky">Chalky Soil</option>
              <option value="Peaty">Peaty Soil</option>
              <option value="Other">Other / Not Sure</option>
            </select>
          </div>

        </div>
      </div>

      {/* Feedback */}
      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="p-3 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm">
          {success}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl bg-green-700 hover:bg-green-800 text-white font-bold transition-all duration-200 shadow-lg shadow-green-900/10 hover:shadow-green-900/20 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Creating your account..." : "Create Account"}
      </button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          to="/signin"
          className="font-bold text-green-700 hover:text-green-800 transition-colors"
        >
          Sign in
        </Link>
      </p>

    </form>
  );
}
