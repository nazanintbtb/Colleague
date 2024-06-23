import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/home";
import Bnavbar from "./components/Bottomnavbar";
import Login from "./pages/login";
import Register from "./pages/regyster";
import Call from "./pages/call";
import Wallet from "./pages/wallet";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./pages/profile";
import Cart from "./pages/cart";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/call" element={<Call />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
      <Bnavbar />
    </Router>
  );
}

export default App;
