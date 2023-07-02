import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import HostNavbar from "./components/HostNavbar";
import Host from "./pages/Host/Host";
import HostIncome from "./pages/Host/HostIncome";
import HostReview from "./pages/Host/HostReview";
import HostVans from "./pages/Host/HostVans";
import HostVansDetails from "./pages/Host/HostVansDetails";
import Details from "./pages/Host/Details";
import Pricing from "./pages/Host/Pricing";
import Photos from "./pages/Host/Photos";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id/" element={<VanDetails />} />

            <Route path="/host" element={<HostNavbar />}>
              <Route index element={<Host />} />
              <Route path="income" element={<HostIncome />} />
              <Route path="reviews" element={<HostReview />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetails />}>
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Photos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
