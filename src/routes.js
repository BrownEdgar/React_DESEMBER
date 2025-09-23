import {
  About,
  Contact,
  ErrorPage,
  Home,
  Services,
  User,
  UserForm,
  Users
} from './pages';
import {
  createBrowserRouter,
} from "react-router";
import MainLayout from './layouts/MainLayout';



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
]);