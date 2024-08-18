import React, { Component } from "react";
import BookList from "./components/BookList";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextContextProvider from "./contexts/ThemeContext";

export default class App extends Component {
  render() {
    return (
      <ThemeContextContextProvider>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </ThemeContextContextProvider>
    );
  }
}
