import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="ContactList" element={<ContactList />} />
      </Routes>
    </div>
  );
}

export default App;
