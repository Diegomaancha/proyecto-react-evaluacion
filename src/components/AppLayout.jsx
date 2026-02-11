import { NavLink, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export default function AppLayout() {
  const user = useAuthStore((s) => s.user);
  const isAdmin = useAuthStore((s) => s.isAdmin);
  const logout = useAuthStore((s) => s.logout);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
          <div className="font-bold tracking-tight">DummyJSON Tasks</div>

          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-300 md:hidden">
              {user?.username} {isAdmin ? "(admin)" : ""}
            </div>
            <button
              onClick={logout}
              className="rounded-xl border border-slate-700 px-3 py-1.5 hover:bg-slate-900"
            >
              Salir
            </button>
          </div>
        </div>

        {/* Nav responsive: en pantallas pequeñas se apila mejor */}
        <nav className="mx-auto max-w-6xl px-4 pb-3 flex gap-2 md:flex-wrap">
          <Tab to="/app" end>Dashboard</Tab>
          <Tab to="/app/todos">Todos</Tab>
          {isAdmin && <Tab to="/admin">Admin</Tab>}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}

function Tab({ to, end, children }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        [
          "rounded-xl px-3 py-2 text-sm border",
          isActive
            ? "border-sky-400/40 bg-sky-500/10 text-sky-200"
            : "border-slate-800 hover:bg-slate-900 text-slate-200",
          // móviles pequeños: botón ancho completo
          "xs:w-full xs:text-center",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}