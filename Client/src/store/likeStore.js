import { create } from "zustand";

const useLikedBooksStore = create((set) => ({
  likedBooks: [],
  addLikedBook: ({ userId, bookId, like }) =>
    set((state) => ({
      likedBooks: [...state.likedBooks, { userId, bookId, like }],
    })),
  removeLikedBook: (bookId) =>
    set((state) => ({
      likedBooks: state.likedBooks.filter((book) => book.bookId !== bookId),
    })),
}));

export default useLikedBooksStore;