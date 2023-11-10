import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import NotFoundPage from "./pages/404.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";
import makeService from "./mockup-api/auth.js";
import HomePage from "./pages/HomePage.jsx";
import Courses from "./pages/Courses.jsx";
import Profile from "./pages/Profile.jsx";
import NavbarTemplate from "./components/template/NavbarTemplate/index.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import CourseContent from "./pages/CourseContent.jsx";
import MyCourses from "./pages/MyCourses.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "",
        element: <Navigate to="/auth/login" />,
      },
    ],
  },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "",
        element: <Navigate to="/home/courses" />,
      },
    ],
  },
  {
    path: "/course",
    element: <NavbarTemplate />,
    children: [
      {
        path: ":id/:slug",
        element: <CourseDetails />
      },
      {
        path: "content/:courseName",
        element: <CourseContent />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

makeService();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
