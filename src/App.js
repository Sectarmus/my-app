import React, { Component } from "react";
import BookList from "./components/BookList";
import BookContextProvider from "./contexts/BookContext";

export default class App extends Component {
  
  render() {
    return (
      <div>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
        
      </div>
    );
  }
}

