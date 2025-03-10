import { create } from "zustand";

const useAnswerStore = create((set) => ({
    answerStore: "",
    setAnswerStore: (newAnswer) =>
        set((state) => ({ answerStore: state.answerStore + newAnswer })),
    clearAnswerStore: () => set({ answerStore: "" }),
    removeLastAnswer: () =>
        set((state) => ({
            answerStore: state.answerStore.slice(0, -1)
        }))
}));

export default useAnswerStore;
