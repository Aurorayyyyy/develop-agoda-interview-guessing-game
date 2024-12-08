import React, { useContext, useState } from "react";
import api from "../api/api";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const login = async (username, password) => {
    try {
      const res = await api.post('/login', {username: username, password: password})
      const { token } = res.data
      localStorage.setItem('token', token)
      return true;
    } catch (err) {
      console.error('Login failed:', err);
      return false;
    }
  }

  const signup = async (username, password) => {
    try {
      await api.post('/signup', {username: username, password: password})
      return true;
    } catch (err) {
      console.error('Signup failed:', err);
      return false;
    }
  }
  const logout = () => {
    localStorage.removeItem('token')
  }
  const guess = async (number) => {
    try {
      const res = await api.post('/guess', {number: number})
      const { message } = res.data
      return message;
    } catch (err) {
      console.error('Error:', err);
      return 'Wrong Input type';
    }
  }

  return(
    <AuthContext.Provider value={{login, signup, logout, guess}}>{children}</AuthContext.Provider>
  )
}