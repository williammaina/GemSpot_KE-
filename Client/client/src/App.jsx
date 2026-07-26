import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Context Providers are intentionally kept in main.jsx so App.jsx stays focused on routing.

// Layouts
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Route Guards
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

// Root Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Exploration Pages
import Nature from "./pages/explore/Nature";
import Eats from "./pages/explore/Eats";
import Nightlife from "./pages/explore/Nightlife";
import Action from "./pages/explore/Action";

// Events & Places Pages
import Events from "./pages/events/Events";
import EventDetails from "./pages/events/EventDetails";
import PlaceDetails from "./pages/places/PlaceDetails";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Profile Pages
import Profile from "./pages/profile/Profile";
import Favorites from "./pages/profile/Favorites";
import MyReviews from "./pages/profile/MyReviews";

// Dashboard & Admin Pages
import Dashboard from "./pages/dashboard/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManagePlaces from "./pages/admin/ManagePlaces";
import ManageEvents from "./pages/admin/ManageEvents";
import ManageUsers from "./pages/admin/ManageUsers";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

function AppShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#05080b] via-[#071319] to-[#090d10] text-slate-100">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_24%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.08),transparent_26%)]"
      />

      {/* Centered visual system */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col">
        {children}
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();

  const page = (Component) => (
    <PageTransition>
      <Component />
    </PageTransition>
  );

  return (
    <AppShell>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          {/* Main Public Layout Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={page(Home)} />
            <Route path="/explore/nature" element={page(Nature)} />
            <Route path="/explore/eats" element={page(Eats)} />
            <Route path="/explore/nightlife" element={page(Nightlife)} />
            <Route path="/explore/action" element={page(Action)} />
            <Route path="/events" element={page(Events)} />
            <Route path="/events/:id" element={page(EventDetails)} />
            <Route path="/places/:id" element={page(PlaceDetails)} />
          </Route>

          {/* Public Auth Routes */}
          <Route element={<PublicRoute />}>
            <Route path="/auth/login" element={page(Login)} />
            <Route path="/auth/register" element={page(Register)} />
            <Route path="/auth/forgot-password" element={page(ForgotPassword)} />
          </Route>

          {/* Protected User Dashboard Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={page(Dashboard)} />
              <Route path="/profile" element={page(Profile)} />
              <Route path="/profile/favorites" element={page(Favorites)} />
              <Route path="/profile/my-reviews" element={page(MyReviews)} />
            </Route>
          </Route>

          {/* Protected Admin Dashboard Routes */}
          <Route element={<ProtectedRoute adminOnly={true} />}>
            <Route element={<DashboardLayout />}>
              <Route path="/admin" element={page(AdminDashboard)} />
              <Route path="/admin/places" element={page(ManagePlaces)} />
              <Route path="/admin/events" element={page(ManageEvents)} />
              <Route path="/admin/users" element={page(ManageUsers)} />
            </Route>
          </Route>

          {/* Catch-all 404 */}
          <Route path="*" element={page(NotFound)} />
        </Routes>
      </AnimatePresence>
    </AppShell>
  );
}

export default App;