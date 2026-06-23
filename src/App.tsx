import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { Toaster } from './components/ui/sonner';

// Placeholder components for other pages
const MapPage = () => <Layout><div className="p-12 text-center">Map coming in Day 4</div></Layout>;
const DashboardPage = () => <Layout><div className="p-12 text-center">Dashboard coming in Day 5</div></Layout>;
const ReportPage = () => <Layout><div className="p-12 text-center">Reporting Form coming in Day 2-3</div></Layout>;
const AdminPage = () => <Layout><div className="p-12 text-center">Admin Portal coming in Day 5</div></Layout>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
