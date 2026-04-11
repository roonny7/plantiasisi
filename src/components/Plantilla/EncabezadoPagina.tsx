type Variables = {
    titulo: string;
    paginaInicio: string;   
    titulo2: string;
}
export const EncabezadoPagina = ( {titulo, paginaInicio, titulo2}: Variables) => {
  return (    
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6"><h1 className="m-0">{titulo}</h1></div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">{paginaInicio}</a></li>
                        <li className="breadcrumb-item active">{titulo2}</li>
                    </ol>
                    </div>
                </div>
                </div>
            </div>
  )
}
