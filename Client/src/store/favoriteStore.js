import { create } from "zustand";

const useFavoriteBooksStore = create((set) => ({
  favoriteBooks: [],
  addFavoriteBook: ({ userId, bookId }) =>
    set((state) => ({
      favoriteBooks: [...state.favoriteBooks, { userId, bookId }],
    })),
  removeFavoriteBook: (bookId) =>
    set((state) => ({
      favoriteBooks: state.favoriteBooks.filter(
        (book) => book.bookId !== bookId
      ),
    })),
}));

export default useFavoriteBooksStore;