import { create } from "zustand";

// const userStore = create((set) => ({
//   user: {},
//   setUser: (user) => set({ ...user }),
//   removeUser: () => set
// }))

export const useUser = create((set) => ({
  user: {},
  setUser: (user) => set(() => ({ user: user })),
}));
