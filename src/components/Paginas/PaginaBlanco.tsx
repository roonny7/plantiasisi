import { EncabezadoPagina } from "../Plantilla/EncabezadoPagina"

export const PaginaBlanco = () => {
  return (
    <>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                <EncabezadoPagina titulo={"Título 1"} paginaInicio="Home" titulo2="Subtítulo" />
            
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                    
                    <div className="row">
                        <section className="col-lg-12 connectedSortable">                                                
                            Soy una página en blanco
                        </section>                       
                    </div>{/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>{/* /.content */}
            </div>{/* /.content-wrapper */}

    </>
  )
}
