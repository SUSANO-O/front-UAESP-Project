import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function View1() {
    return (
        <div className="container mt-5">
            <h2>Formulario de Oportunidades</h2>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Referencia</label>
                            <input type="number" className="form-control" placeholder="Referencia" />
                        </div>
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
                            <textarea className="form-control" placeholder="Descripción de la Oportunidad"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Acción</label>
                            <input type="text" className="form-control" placeholder="Acción" />
                        </div>
                        <div className="form-group">
                            <label>Responsable</label>
                            <input type="text" className="form-control" placeholder="Responsable" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Fecha Seguimiento Primer Trimestre</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Primer Trimestre</label>
                            <textarea className="form-control" placeholder="Seguimiento Primer Trimestre"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Fecha Seguimiento Segundo Trimestre</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Segundo Trimestre</label>
                            <textarea className="form-control" placeholder="Seguimiento Segundo Trimestre"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Fecha Seguimiento Tercer Trimestre</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Tercer Trimestre</label>
                            <textarea className="form-control" placeholder="Seguimiento Tercer Trimestre"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Fecha Seguimiento Cuarto Trimestre</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Cuarto Trimestre</label>
                            <textarea className="form-control" placeholder="Seguimiento Cuarto Trimestre"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Estado</label>
                            <input type="text" className="form-control" placeholder="Estado" />
                        </div>
                        <div className="form-group">
                            <label>Fecha Seguimiento Control y Soportes</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Control y Soportes</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Plan Manejo de Oportunidades y Soportes</label>
                            <textarea className="form-control" placeholder="Seguimiento Plan Manejo de Oportunidades y Soportes"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Fecha Seguimiento Plan Manejo</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Seguimiento Plan Manejo Oportunidades</label>
                            <textarea className="form-control" placeholder="Seguimiento Plan Manejo Oportunidades"></textarea>
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

export default View1;
