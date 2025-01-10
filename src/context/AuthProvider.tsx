import { createContext, ReactNode, useEffect, useState } from "react"
import { IAuthContextType } from "./interfaces/IAuthContextType"
import { Session } from "@supabase/supabase-js"
import supabase from "../utils/supabase"

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContex = createContext<IAuthContextType | undefined>(undefined)

export const AuthProvider = ({children}:{children: ReactNode}) => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    const getSession = async() => {
      const {data:{session}} = await supabase.auth.getSession()
      setSession(session)
    }
    
    getSession()

    const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      subscription.unsubscribe()
    }

  }, [])
    
  const signIn = async() => {
    await supabase.auth.signInWithOAuth({provider: 'google'})
  }

  const signOut = async() => {
    await supabase.auth.signOut()
    setSession(null)
  }

  return (
    <AuthContex.Provider value={{session, signIn, signOut}}>
      {children}
    </AuthContex.Provider>
  )
}