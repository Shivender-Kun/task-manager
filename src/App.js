import { Header, Home, Footer } from "./Components/Components";
import store from "./store/store";
import { Provider } from "react-redux";
import React from "react";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
