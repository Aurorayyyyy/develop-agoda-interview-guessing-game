import './App.css';

import { AuthProvider } from './context/AuthContext.js';
import Route from './routes/Routes.jsx'
function App() {
  return (
    <AuthProvider>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Route />
      </div>
    </div>
  </AuthProvider>
  );
}

export default App;
