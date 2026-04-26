import { Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Welcome Back
        </h2>
        <p className="mb-4 text-center text-gray-600">
          Please sign in to your account
        </p>
        <div className="space-y-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
