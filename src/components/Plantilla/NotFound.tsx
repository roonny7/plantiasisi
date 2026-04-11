import { EncabezadoPagina } from "./EncabezadoPagina"

export const NotFound = () => {
  return (
    <>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                <EncabezadoPagina />
            
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                    
                    <div className="row">
                        <section className="col-lg-12 connectedSortable">                                                
                            Soy un 404!
                        </section>                       
                    </div>{/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>{/* /.content */}
            </div>{/* /.content-wrapper */}

    </>
  )
}
