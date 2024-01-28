import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/Table.css";
import Header from "./components/header/Header";
import Row1 from "./components/row1/Row1";
import Row2 from "./components/row2/Row2";
import Footer from "./components/footer/Footer";
import Table from "./components/table/Table";
import Proform from "./components/Proform/Proform";

function App() {
  return (
    <>
      <div className="container py-4">
        <Header />
        <Row1 />
        <Row2 />

        <main className="my-5 mx-5 px-lg-5">
          <h2 className="display-6 text-center mb-4">Planes de Pago</h2>
          <Table />
        </main>
        
        <Proform />

        <Footer />
      </div> 
    </>
  );
}

export default App;
