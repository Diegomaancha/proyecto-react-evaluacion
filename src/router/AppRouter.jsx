import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import RoleRoute from "../components/RoleRoute";
import AppLayout from "../components/AppLayout";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Todos from "../pages/Todos";
import Admin from "../pages/Admin";
import AdminUsers from "../pages/AdminUsers";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/app" replace />} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                    <Route path="/app" element={<Dashboard />} />
                    <Route path="/app/todos" element={<Todos />} />
                </Route>

                <Route element={<RoleRoute role="admin" />}>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}