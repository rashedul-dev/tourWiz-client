import App from "@/App";
import DashBoardLayout from "@/components/layout/DashBoardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import Unauthorized from "@/pages/Unauthorized";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },

  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },

  {
    Component: withAuth(DashBoardLayout, role.superAdmin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to={"/admin/analytics"}></Navigate> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashBoardLayout, role.user as TRole),
    path: "/user",
    children: [
      { index: true, element: <Navigate to={"/user/bookings"}></Navigate> },
      ...generateRoutes(userSidebarItems),
    ],
  },
]);
