import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="app-main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
