import React, { useContext, useState } from "react";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  return(
    <AuthContext.Provider value={localStorage.getItem("token")}>{props.children}</AuthContext.Provider>
  )
}