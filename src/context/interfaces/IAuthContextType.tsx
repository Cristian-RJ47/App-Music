import { Session } from "@supabase/supabase-js"

export interface IAuthContextType{
    session: Session | null
    signIn: () => void
    signOut: () => void
}