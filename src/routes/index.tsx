import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import Unauthorized from "@/pages/Unauthorized";
import { role } from "@/constants/role";
import HomePage from "@/pages/HomePage";
import type { TRole } from "@/types";
import Tours from "@/pages/Tours";
import ToursDetails from "@/pages/ToursDetails";
import Booking from "@/pages/Booking";
import DashBoardLayout from "@/components/layout/DashBoardLayout";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: HomePage,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Tours,
        path: "tours",
      },
      {
        Component: ToursDetails,
        path: "tours/:slug",
      },
      // {
      //   Component: ToursDetails,
      //   path: "division/:slug",
      // },
      {
        Component: withAuth(Booking),
        path: "booking/:id",
      },
    ],
  },
  {
    Component: withAuth(DashBoardLayout, role.superAdmin as TRole),
    path: "/admin",
    children: [{ index: true, element: <Navigate to="/admin/analytics" /> }, ...generateRoutes(adminSidebarItems)],
  },
  {
    Component: withAuth(DashBoardLayout, role.user as TRole),
    path: "/user",
    children: [{ index: true, element: <Navigate to="/user/bookings" /> }, ...generateRoutes(userSidebarItems)],
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
]);
