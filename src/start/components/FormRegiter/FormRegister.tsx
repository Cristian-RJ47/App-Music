import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/customHooks/UseAuth";
import supabase from "../../../utils/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import style from  "./FormRegister.module.css";

export const FormRegister = () => {const {session} = useAuth()
const navigate = useNavigate()

useEffect(() => {
  if (session) {
    navigate('/');
  }
}, [session, navigate]);

if (!session) {
  return (
    <div className={style.container}>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google']}
      />
    </div>
  );
}
}