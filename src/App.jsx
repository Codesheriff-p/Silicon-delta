import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footers from "./components/Footers";
import Benefits from "./components/Benefits";
import How_It_Works from "./components/How_It_Works";
import Form from "./components/Form";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Benefits />
      <How_It_Works />
      <Form />
      <FAQ />
      <Footers />
    </div>
  );
};

export default App;
