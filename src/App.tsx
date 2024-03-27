import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import Layout from "./components/layout/Layout.tsx";
const HomePage = lazy(()=>import("./pages/homepage/HomePage.tsx"))
const AppliesPage = lazy(()=>import("./pages/appliespage/AppliesPage.tsx"))
const ApplyPage = lazy(()=>import("./pages/applypage/ApplyPage.tsx"))


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
