import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import AuthProvider from './context/AuthContext';
import SignupPage from './Components/Signup.jsx';
import LoginPage from './Components/Login.jsx';
import GuessPage from './Components/Guess.jsx'
import { AuthProvider } from './context/AuthContext.js';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/signup" element={<SignupPage/>} />
              <Route path="/guess" element={<GuessPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </AuthProvider>
  );
}

export default App;
