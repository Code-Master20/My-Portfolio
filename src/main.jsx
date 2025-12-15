import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Home } from "./appComonents/Middle/Home.jsx";
import { About } from "./appComonents/Middle/About.jsx";
import { Projects } from "./appComonents/Middle/Projects.jsx";
import { Contact } from "./appComonents/Middle/Contact.jsx";
import { Classmate } from "./projectComponents/Classmate.jsx";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/projects/" element={<Projects />}>
        <Route path="class-mate" element={<Classmate />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
);
