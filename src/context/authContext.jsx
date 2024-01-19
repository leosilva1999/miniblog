import { useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({children, valeu}){
    return <AuthContext.Provider>{children}</AuthContext.Provider>
}

export function useAuthValue(){
    return useContext(AuthContext);
}