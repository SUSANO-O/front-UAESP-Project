import React from "react";

function GestionRiesgosForm() {
    return (
        <div className="container">
            <h2>Gestión de Riesgos</h2>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Proceso</label>
                            <input type="text" className="form-control" placeholder="Proceso" />
                        </div>
                        <div className="form-group">
                            <label>Objetivo</label>
                            <input type="text" className="form-control" placeholder="Objetivo" />
                        </div>
                        <div className="form-group">
                            <label>Alcance</label>
                            <input type="text" className="form-control" placeholder="Alcance" />
                        </div>
                        <div className="form-group">
                            <label>Impacto</label>
                            <input type="text" className="form-control" placeholder="Impacto" />
                        </div>
                        <div className="form-group">
                            <label>Causa</label>
                            <input type="text" className="form-control" placeholder="Causa" />
                        </div>
                        <div className="form-group">
                            <label>Descripción de la Oportunidad</label>
                            <input type="text" className="form-control" placeholder="Descripción de la Oportunidad" />
                        </div>
                        <div className="form-group">
                            <label>Acción</label>
                            <input type="text" className="form-control" placeholder="Acción" />
                        </div>
                        <div className="form-group">
                            <label>Responsable</label>
                            <input type="text" className="form-control" placeholder="Responsable" />
                        </div>
                        <div className="form-group">
                            <label>Fecha Programada</label>
                            <input type="date" className="form-control" placeholder="Fecha Programada" />
                        </div>
                        <div className="form-group">
                            <label>Fecha Seguimiento Primer Trimestre</label>
                            <input type="date" className="form-control" placeholder="Fecha Seguimiento Primer Trimestre" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Primer Trimestre</label>
                            <input type="text" className="form-control" placeholder="Seguimiento Primer Trimestre" />
                        </div>
                        <div className="form-group">
                            <label>Fecha Seguimiento Segundo Trimestre</label>
                            <input type="date" className="form-control" placeholder="Fecha Seguimiento Segundo Trimestre" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Segundo Trimestre</label>
                            <input type="text" className="form-control" placeholder="Seguimiento Segundo Trimestre" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Fecha Seguimiento Tercer Trimestre</label>
                            <input type="date" className="form-control" placeholder="Fecha Seguimiento Tercer Trimestre" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Tercer Trimestre</label>
                            <input type="text" className="form-control" placeholder="Seguimiento Tercer Trimestre" />
                        </div>
                        <div className="form-group">
                            <label>Fecha Seguimiento Cuarto Trimestre</label>
                            <input type="date" className="form-control" placeholder="Fecha Seguimiento Cuarto Trimestre" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Cuarto Trimestre</label>
                            <input type="text" className="form-control" placeholder="Seguimiento Cuarto Trimestre" />
                        </div>
                        <div className="form-group">
                            <label>Estado</label>
                            <input type="text" className="form-control" placeholder="Estado" />
                        </div>
                        <div className="form-group">
                            <label>Fecha Seguimiento CyS</label>
                            <input type="date" className="form-control" placeholder="Fecha Seguimiento CyS" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Control y Soportes</label>
                            <input type="text" className="form-control" placeholder="Seguimiento Control y Soportes" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Plan Manejo Oportunidades y Soportes</label>
                            <input type="text" className="form-control" placeholder="Seguimiento Plan Manejo Oportunidades y Soportes" />
                        </div>
                        <div className="form-group">
                            <label>Fecha Seguimiento Plan Manejo</label>
                            <input type="date" className="form-control" placeholder="Fecha Seguimiento Plan Manejo" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Plan Manejo Oportunidades</label>
                            <input type="text" className="form-control" placeholder="Seguimiento Plan Manejo Oportunidades" />
                        </div>
                        <div className="form-group">
                            <label>Estado Final</label>
                            <input type="text" className="form-control" placeholder="Estado Final" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Enviar</button>
                <button type="submit" className="btn btn-secondary mt-3">Editar</button>
                <button type="submit" className="btn btn-danger mt-3">Eliminar</button>
            </form>
        </div>
    );
}

export default GestionRiesgosForm;
