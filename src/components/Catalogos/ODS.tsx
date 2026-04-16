import { useForm } from "../../hooks/useForm";
import { EncabezadoPagina } from "../Plantilla/EncabezadoPagina"

export const CatalogoODS = () => {

const { valores, handleInputChange }:any = useForm({ codigo: '798', nombre: '' });

const handleSearch = (e:any) => {
        e.preventDefault();
        alert("guardar");
 }

return (
    <>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                <EncabezadoPagina titulo={"Catálogo de Objetivos de Desarrollo Sostenible"} paginaInicio="Home" titulo2="Catálogo de ODS" />
            
                    {/* Main content */ }
                    <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            {/* general form elements */}
                            <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Objetivos de Desarrollo Sostenible </h3>
                            </div>
                            {/* /.card-header */}
                            {/* form start */}
                            <form onSubmit={ handleSearch }>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="inputCodigo">Código</label>
                                        <input 
                                            type="number" className="form-control" 
                                            id="inputCodigo" placeholder="Código del ODS"
                                            autoComplete="off" name="codigo"
                                            value={ valores.codigo }
                                            onChange={ handleInputChange }
                                            />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputNombre">Nombre</label>
                                        <input type="text" className="form-control" 
                                            id="inputNombre" placeholder="Nombre del ODS" name="nombre"
                                            value={ valores.nombre}
                                            onChange={ handleInputChange } />
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Guardar ODS</button>
                                </div>
                            </form>
                            </div>
                            {/* /.card */}
                            {/* general form elements */}
                            
                            
                            
                            
                            {/* /.card */}
                        </div>
                        {/*/.col (right) */}
                        </div>
                        {/* /.row */}
                    </div>{/* /.container-fluid */}
                    </section>

            </div>{/* /.content-wrapper */}

    </>
  )
}
