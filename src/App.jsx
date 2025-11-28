import reactLogo from "./assets/react.svg";
import { Header } from "./appComonents/Header/Header";
import { Footer } from "./appComonents/Footer/Footer";
import { BrowserRouter, Routes } from "react-router-dom";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles["size"]}>
          <Header></Header>
          {/* <Routes></Routes> */}
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
