
export const SideNav = () => {
  return (
    <>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">            
                <img src="Escudo.png" alt="Indicadores" className="img-responsive" style={{opacity: '.8', width : '70px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />                 
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                
                </div>

                {/* Sidebar Menu */}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                    <li className="nav-item menu-open">
                    <a href="#" className="nav-link active">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                        Dashboard
                        <i className="right fas fa-angle-left" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a href="./index.html" className="nav-link active">
                            <i className="far fa-circle nav-icon" />
                            <p>Dashboard v1</p>
                        </a>
                        </li>                        
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-copy" />
                        <p>
                        Administración
                        <i className="fas fa-angle-left right" />
                        <span className="badge badge-info right">?</span>
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a href="pages/layout/top-nav.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Usuarios</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Accesos</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/layout/boxed.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Roles</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>GAC</p>
                        </a>
                        </li>                        
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-chart-pie" />
                        <p>
                        Reportes
                        <i className="right fas fa-angle-left" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">                        
                        <li className="nav-item">
                        <a href="pages/charts/flot.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Indicadores</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/charts/inline.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Periodos</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/charts/uplot.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Reportes generales</p>
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-tree" />
                        <p>
                        Catálogos
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a href="pages/UI/general.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Generales</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/UI/icons.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Periodos</p>
                        </a>
                        </li>                        
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-edit" />
                        <p>
                        Indicadores
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a href="pages/forms/general.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Indicadores</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/forms/advanced.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Mis propuestas</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/forms/editors.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Archivos</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/forms/validation.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Carga de archivos</p>
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-header">-  ADMINISTRADOR -</li>
                    
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-book" />
                        <p>
                        Revisiones
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a href="pages/examples/invoice.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Revisar propuestas</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/examples/profile.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Propuestas aprobadas</p>
                        </a>
                        </li>                        
                    </ul>
                    </li>
                    <li className="nav-header">AVISOS</li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fa fa-circle text-danger " aria-hidden="true" />
                        <p className="text">Aviso tipo 1</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fa fa-circle text-warning" />
                        <p>Aviso tipo 2</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fa fa-circle text-info" />
                        <p>Aviso tipo 3</p>
                    </a>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
            </aside>
    
    </>
  )
}
