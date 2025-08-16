import { StateCreator } from "zustand";

interface UserStates {
  token: string | null;
  user: User | null;
}

export interface UserActions {
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export interface UserSlice extends UserStates, UserActions {}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
  token: null,
  user: null,
  setToken: (token) => set(() => ({ token: token })),
  setUser: (user) => set(() => ({ user: user })),
  login: (token, user) => set(() => ({ token, user })),
  logout: () => set(() => ({ token: null, user: null })),
});
