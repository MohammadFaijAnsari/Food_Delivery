import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center border-orange-300">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="rounded border-gray-300 "
              />
              <span>Remember me</span>
            </label>

            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition duration-300"
          >
            Login
          </button>

          {/* Register */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?
            <a href="/register" className="text-indigo-600 font-medium hover:underline ml-1">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
