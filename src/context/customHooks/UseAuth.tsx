import { useContext } from "react";
import { AuthContex } from "../AuthProvider";

export const useAuth = () => {
    const context = useContext(AuthContex)
    if(context === undefined){
        throw new Error('Auth context not working');
    }
    return context
}