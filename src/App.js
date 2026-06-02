import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Analyzer from "./pages/Analyzer";
import Metrics from "./pages/Metrics";
import Analytics from "./pages/Analytics";
import Architecture from "./pages/Architecture";
import About from "./pages/About";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analyzer" element={<Analyzer />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;