import style from './Upload.module.css';
import { useForm } from 'react-hook-form';

export const Upload = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const funcioInutil = (data: any) => {
    console.log(data);
    reset();
  }
  return (
    <>
    <section className={style.sectionUpload}>

      <form className={style.form} onSubmit={handleSubmit(funcioInutil)}>

        <h1 className={style.titleLoad}>Subir</h1>
        <p className={style.descriptionLoad}>Escoge la canción que deseas cargar</p>

        <input type="text" placeholder="Ingrese el Titulo de la canción" className={style.inputTitle}
        {...register("titulo", { required: true, minLength: 3, maxLength: 40 })}
        />
        {errors.titulo && <span className={style.errosMjs}>{errors.titulo.type === "required" ? "El titulo es requerido" : errors.titulo.type === "minLength" ? "El titulo es muy corto" : "El titulo es muy largo"}</span>}
        
        <input type="file" className={style.inputFile} 
        {...register("file", { required: true })}
        />
        {errors.file && <span className={style.errosMjs}>El archivo es requerido</span>}

        <button type="submit" className={style.buttonLoad} > Cargar Archivo de Audio </button>

      </form>
    </section>
    </>
  )
}