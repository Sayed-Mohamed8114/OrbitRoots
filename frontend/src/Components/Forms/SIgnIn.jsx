import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../../Contexts/AuthContext";

export default function SignIn() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    console.log("Login data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-800 mb-2"
        >
          Email Address
        </label>

        <div className="relative">
          <Mail
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            autoComplete="email"
            className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-gray-800"
          >
            Password
          </label>

          <a
            href="/forgot-password"
            className="text-xs font-semibold text-green-700 hover:text-green-900 transition"
          >
            Forgot password?
          </a>
        </div>

        <div className="relative">
          <Lock
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="current-password"
            className="w-full h-14 pl-12 pr-12 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-700 transition"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
          </button>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="group w-full h-14 flex items-center justify-center gap-3 rounded-xl bg-green-800 text-white font-bold transition-all duration-300 hover:bg-green-900 hover:shadow-lg hover:shadow-green-900/20 active:scale-[0.98]"
      >
        Sign In
        <ArrowRight
          size={19}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      <div className="relative flex items-center gap-4 py-2">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400 font-medium">SECURE ACCESS</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <p className="text-center text-sm text-gray-500">
        New to Orbit Roots? {" "}
        <a
          href="/signup"
          className="font-bold text-green-700 hover:text-green-900 transition"
        >
          Create an account
        </a>
      </p>
    </form>
  );
}
