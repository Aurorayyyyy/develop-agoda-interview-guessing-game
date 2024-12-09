import React, { useContext, useState } from "react";
import api from "../api/api";


const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState({isAuthenticated: false})
  const login = async (username, password) => {
    try {
      const res = await api.post('/login', {username: JSON.stringify(username), password: JSON.stringify(password)})
      const { token } = res.data
      localStorage.setItem('token', token)
      setUser({isAuthenticated: true})
      api.defaults.headers.common['Authorization'] = token
      return true;
    } catch (err) {
      console.error('Login failed:', err);
      return false;
    }
  }

  const signup = async (username, password) => {
    try {
      await api.post('/signup', {username: JSON.stringify(username), password: JSON.stringify(password)})
      return true;
    } catch (err) {
      console.error('Signup failed:', err);
      return false;
    }
  }
  const logout = () => {
    localStorage.removeItem('token')
    setUser({isAuthenticated: false})
    api.defaults.headers.common['Authorization'] = ''
  }
  const guess = async (number) => {
    try {
      const res = await api.post('/guess', {number: JSON.stringify(number)})
      const { message } = res.data
      return message;
    } catch (err) {
      console.error('Error:', err);
      return 'Error';
    }
  }

  return(
    <AuthContext.Provider value={{login, signup, logout, guess, user}}>{children}</AuthContext.Provider>
  )
}