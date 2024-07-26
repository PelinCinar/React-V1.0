import { useFormik } from "formik";
import * as Yup from "yup";
const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember_me: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Zorunlu alan!")
        .email("Geçerli bir e-mail giriniz!"),
      password: Yup.string()
        .required("Zorunlu alan!")
        .min(6, "Şifre en az 6 karakter olmalı"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gray-100 pt-8">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <h1>Email</h1>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                type="email"
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                // placeholder="Email address"
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-500 font-semibold text-sm">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <div>
              <h1>Password</h1>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                type="password"
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                // placeholder="Password"
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-red-500 font-semibold text-sm">
                  {formik.errors.password}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                value={formik.values.remember_me}
                onChange={formik.handleChange}
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
