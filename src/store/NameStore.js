import { create } from "zustand"

const useNameStore = create((set) => ({
    nameCustomerStore: "",
    setNameCustomerStore: (newName) => set((state) => ({ nameCustomerStore: newName })),
    languageEn: true,
    setLanguage: (language) => set((state) => ({ languageEn: language }))

}))

export default useNameStore