import create from 'zustand';

const useAccountStore = create((set) => ({
  accounts: [],
  addAccount: () => set((state) => ({ accounts: [...state.accounts, {}] })),
  removeAllAccount: () => set({ accounts: 0 }),
}));

export default useAccountStore;
