import {Route, Routes} from "react-router-dom";
import React from "react";
import Layout from "./components/layout/Layout.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
