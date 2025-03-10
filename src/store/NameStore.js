import { create } from "zustand"

const useNameStore = create((set) => ({
    nameCustomerStore: "",
    setNameCustomerStore: (newName) => set((state) => ({ nameCustomerStore: newName }))

}))

export default useNameStore