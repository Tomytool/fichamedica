import '../style/style.css'
import { useForm } from "react-hook-form"

export const Home = () => {

  const { register, handleSubmit } = useForm()
  return (
    <>
    <form className='formulario' onSubmit={handleSubmit((data)=>console.log(data))}>
      <div className="campo">
        <label htmlFor="codigoFisca">Código</label>
        <input type="number" name="codigoFisca" id="codigoFisca" {...register("codigoFisca")}/>
      </div>
      <div className="campo">
        <label htmlFor="nombreFisca">Nombre</label>
        <input type="text" name="nombreFisca" id="nombreFisca" {...register("nombreFisca")}/>
      </div>
      <div className="campo">
        <label htmlFor="rutFisca">Rut</label>
        <input type="text" name="rutFisca" id="rutFisca" {...register("rutFisca")}/>
      </div>
      <div className="campo">
        <label htmlFor="nacimientoFisca">Fecha de Nacimiento</label>
        <input type="date" name="nacimientoFisca" id="nacimientoFisca" {...register("nacimientoFisca")}/>
      </div>
      <div className="campo">
        <label htmlFor="mutualFisca">Mutual que pertenece</label>
        <input type="text" name="mutualFisca" id="mutualFisca" {...register("mutualFisca")}/>
      </div>
      <div className="campo">
        <label htmlFor="historialFisca">Historial Medico</label>
        <textarea name="historialFisca" id="historialFisca" {...register("historialFisca")}></textarea>
      </div>
      <button type="submit">enviar</button>
    </form>


    </>
  )
}
