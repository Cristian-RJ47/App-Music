import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.logoSection}>
                    <p className={style.ftitle}>Kodigo Music</p>
                    <p className={style.fsubtitle}>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
                </div>
                
                <div className={style.linksSection}>
                    <Link to="/about">Sobre Nosotros</Link>
                    <Link to="/contact">Contacto</Link>
                    <Link to="/privacy">Política de Privacidad</Link>
                    <Link to="/terms">Términos y Condiciones</Link>
                </div>
                
                <div className={style.socialMedia}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
            </div>
        </footer>
    </>
  )
}
