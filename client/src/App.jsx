import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styles from "./css/mystyle.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import LoginComponent from "./components/LoginComponent";
import SignupComponent from "./components/SignupComponent";
import ChatComponent from "./components/ChatComponent";

function App() {
  const [data, SetData] = useState("");

  const handleData = (data) => {
    SetData(data);
  };

  return (
    <>
      <Routes>
        {/* Define the master page layout */}
        <Route path="/" element={<Layout />}>
          <Route
            path="/home"
            element={
              <HomeComponent companyName="ChatApp" onSendData={handleData} />
            }
          />
          <Route
            path="/about"
            element={<AboutComponent companyName={data} />}
          />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
