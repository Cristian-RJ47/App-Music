import style from "./NotFound.module.css"

export const NotFound = () => {
    return (
      <>
          <div className={style.body}>
              <div className={style.container}>
                <img src="https://res.cloudinary.com/dklpgm5tu/image/upload/v1736279078/recetario/zprhcnhpxz5ijiunlqlx.png" alt="LogoKodigo" className={style.image} />
                    <p className={style.subtitle}>Kodigo Music</p>
                    <h1 className={style.msj}>404 - Page Not Found</h1>
                    <p className={style.msjp}>Oops! The page you are looking for doesn't exist.</p>
              </div>
          </div>
          
      </>
    )
  }