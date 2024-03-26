import {Route, Routes} from "react-router-dom";
import React from "react";
import Layout from "./components/layout/Layout.tsx";
import AppliesPage from "./pages/appliespage/AppliesPage.tsx";
import ApplyPage from "./pages/applypage/ApplyPage.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
            <Route path="applies" element={<AppliesPage/>}/>
            <Route path="applies/:id" element={<ApplyPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
