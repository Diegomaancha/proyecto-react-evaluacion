import { create } from "zustand";

const STORAGE_KEY = "dj_auth";

function load() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
    } catch {
        return null;
    }
}

export const useAuthStore = create((set, get) => {
    const saved = load();

    const savedToken = saved?.token || saved?.accessToken || null;
    const savedUser = saved?.user || null;

    return {
        token: savedToken,
        user: savedUser,
        isAdmin: savedUser?.username === "kminchelle",

        setSession: ({ token, user }) => {
            const isAdmin = user?.username === "kminchelle";
            const next = { token, user };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            set({ token, user, isAdmin });
        },

        logout: () => {
            localStorage.removeItem(STORAGE_KEY);
            set({ token: null, user: null, isAdmin: false });
        },

        isLoggedIn: () => !!get().token,
    };
});