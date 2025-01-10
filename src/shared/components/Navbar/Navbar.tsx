import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "../../../context/customHooks/UseAuth";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export const Navbar = () => {
  const { session, signOut } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut();
    navigate("/start");
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span>Kodigo</span> Music
      </Link>

      <input
        type="checkbox"
        id="menu-bar"
        className={styles.menuCheckbox}
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      <label htmlFor="menu-bar" className={styles.menuIcon}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </label>

      <nav className={`${styles.navbar} ${menuOpen ? styles.show : ""}`}>
        {session ? (
          <>
            <Link to="/" className={styles.navbar__link}>Inicio</Link>
            <Link to="/explore" className={styles.navbar__link}>Explorar</Link>
            <Link to="/upload" className={styles.navbar__link}>Cargar</Link>
            <button onClick={handleLogout} className={`${styles.navbar__link} ${styles.navbar__logout}`}>Salir</button>
          </>
        ) : (
          <>
            <Link to="/" className={styles.navbar__link}>Inicio</Link>
            <Link to="/contact" className={styles.navbar__link}>Contacto</Link>
            <Link to="/start" className={styles.navbar__link}>Ingresar</Link>
          </>
        )}
      </nav>
    </header>
  );
};
