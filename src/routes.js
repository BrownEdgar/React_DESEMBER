import { lazy } from 'react';

const About = lazy(() => import("./pages/About/About"))
const Contact = lazy(() => import("./pages/Contact/Contact"))
const Home = lazy(() => import("./pages/Home/Home"))
const Services = lazy(() => import("./pages/Services/Services"))
const UserForm = lazy(() => import("./pages/UserForm/UserForm"))
const Users = lazy(() => import("./pages/Users/Users"))
const User = lazy(() => import("./pages/User/User"))
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"))
const Login = lazy(() => import("./pages/Login/Login"));
import {
  createBrowserRouter,
} from "react-router";
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "add-user",
        Component: UserForm,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "users",
        Component: Users,
      },
      {
        path: "users/:id",
        Component: User,
      },
      {
        path: "*",
        Component: ErrorPage,
      }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: Login,
      }
    ]
  }
]);