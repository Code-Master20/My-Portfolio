import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Home } from "./appComonents/Middle/Home.jsx";
import { About } from "./appComonents/Middle/About.jsx";
import { Projects } from "./appComonents/Middle/Projects.jsx";
import { Contact } from "./appComonents/Middle/Contact.jsx";
import { Classmate } from "./projectComponents/Classmate.jsx";
import { Mayrig } from "./projectComponents/Mayrig.jsx";
import { Letsforecast } from "./projectComponents/Letsforecast.jsx";
import { Wecodetogether } from "./projectComponents/Wecodetogether.jsx";
import { Technotalk } from "./projectComponents/Technotalk.jsx";
import { Dolists } from "./projectComponents/Dolists.jsx";
import { Toaster } from "react-hot-toast";

// import {}
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>{" "}
      {/*<Route path="" element={<Home/>}></Route>*/}
      <Route path="/about" element={<About />} />
      <Route path="projects" element={<Projects />}>
        <Route path="class-mate" element={<Classmate />} />
        <Route path="may-rig" element={<Mayrig />} />
        <Route path="lets-forecast" element={<Letsforecast />} />
        <Route path="we-code-together" element={<Wecodetogether />} />
        <Route path="techno-talk" element={<Technotalk />} />
        <Route path="do-lists" element={<Dolists />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
    <Toaster position="top-right" />
  </StrictMode>,
);
