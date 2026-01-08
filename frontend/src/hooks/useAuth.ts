import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/**
 * Thin wrapper around AuthContext to show how to expose behavior.
 * TODO : add typed interfaces and implement loginWithProvider.
 */
export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used inside AuthContext provider");
  }
  return ctx;
}