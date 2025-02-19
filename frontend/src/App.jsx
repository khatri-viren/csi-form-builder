import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import FormRes from "./pages/FormRes";
import ResponsePage from "./pages/ResponsePage";
import SuccessPage from "./pages/SuccessPage";
import Navbar from "./components/common/Navbar";
import { Toaster } from "@/components/ui/sonner"
import EditPage from "./pages/EditPage";

function NavbarRenderer() {
  const location = useLocation();
  const showNavBar = location.pathname.startsWith('/form/') || location.pathname.startsWith('/success');
  return !showNavBar && <Navbar />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarRenderer/>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/build" element={<FormPage editing={false}/>} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/form-res/:id" element={<FormRes />} />
          <Route path="/form/:id" element={<ResponsePage/>}/>
          <Route path="/success" element={<SuccessPage/>}/>
        </Routes>
        <Toaster/>
      </div>
    </Router>
  );
}

export default App;