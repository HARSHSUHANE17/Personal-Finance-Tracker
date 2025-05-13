import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/auth';
import { FinancialRecordsProvider } from './context/financial-record-context';
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/clerk-react";

function App() {
  const { isSignedIn } = useAuth();

  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/">Dashboard</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <Routes>
          {/* If not signed in, redirect to /auth */}
          <Route
            path="/"
            element={
              isSignedIn ? (
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
