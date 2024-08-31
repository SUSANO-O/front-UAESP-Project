import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function GestionCorrupcionForm() {
    return (
        <div className="container mt-5">
            <h2>Formulario de Gestión de Riesgo de Corrupción</h2>
            <form>
                <div className="row">
                    {/* Primera columna */}
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
                            <label>Descripción del Riesgo</label>
                            <input type="text" className="form-control" placeholder="Descripción del Riesgo" />
                        </div>
                        <div className="form-group">
                            <label>Causa Inmediata</label>
                            <input type="text" className="form-control" placeholder="Causa Inmediata" />
                        </div>
                        <div className="form-group">
                            <label>Causa Raíz</label>
                            <input type="text" className="form-control" placeholder="Causa Raíz" />
                        </div>
                        <div className="form-group">
                            <label>Clasificación del Riesgo</label>
                            <input type="text" className="form-control" placeholder="Clasificación del Riesgo" />
                        </div>
                        <div className="form-group">
                            <label>Probabilidad</label>
                            <input type="text" className="form-control" placeholder="Probabilidad" />
                        </div>
                        <div className="form-group">
                            <label>Impacto</label>
                            <input type="text" className="form-control" placeholder="Impacto" />
                        </div>
                        <div className="form-group">
                            <label>Perfil del Riesgo</label>
                            <input type="text" className="form-control" placeholder="Perfil del Riesgo" />
                        </div>
                        <div className="form-group">
                            <label>Zona de Riesgo Inherente</label>
                            <input type="text" className="form-control" placeholder="Zona de Riesgo Inherente" />
                        </div>
                        <div className="form-group">
                            <label>No. Control</label>
                            <input type="number" className="form-control" placeholder="No. Control" />
                        </div>
                        <div className="form-group">
                            <label>Descripción del Control</label>
                            <input type="text" className="form-control" placeholder="Descripción del Control" />
                        </div>
                        <div className="form-group">
                            <label>Propósito del Control</label>
                            <input type="text" className="form-control" placeholder="Propósito del Control" />
                        </div>
                        <div className="form-group">
                            <label>Responsable 1</label>
                            <input type="text" className="form-control" placeholder="Responsable 1" />
                        </div>
                        <div className="form-group">
                            <label>Responsable 2</label>
                            <input type="text" className="form-control" placeholder="Responsable 2" />
                        </div>
                        <div className="form-group">
                            <label>Periodicidad</label>
                            <input type="text" className="form-control" placeholder="Periodicidad" />
                        </div>
                        <div className="form-group">
                            <label>¿Cómo se Realiza el Control?</label>
                            <input type="text" className="form-control" placeholder="¿Cómo se Realiza el Control?" />
                        </div>
                        <div className="form-group">
                            <label>¿Qué Pasa? Observaciones</label>
                            <input type="text" className="form-control" placeholder="¿Qué Pasa? Observaciones" />
                        </div>
                        <div className="form-group">
                            <label>Evidencia de Ejecución del Control</label>
                            <input type="text" className="form-control" placeholder="Evidencia de Ejecución del Control" />
                        </div>
                        <div className="form-group">
                            <label>Calificación de Diseño del Control</label>
                            <input type="text" className="form-control" placeholder="Calificación de Diseño del Control" />
                        </div>
                        <div className="form-group">
                            <label>Evaluación de Diseño del Control</label>
                            <input type="text" className="form-control" placeholder="Evaluación de Diseño del Control" />
                        </div>
                        <div className="form-group">
                            <label>Evaluación de Ejecución del Control</label>
                            <input type="text" className="form-control" placeholder="Evaluación de Ejecución del Control" />
                        </div>
                    </div>
                    
                    {/* Segunda columna */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Solidez Individual del Control</label>
                            <input type="text" className="form-control" placeholder="Solidez Individual del Control" />
                        </div>
                        <div className="form-group">
                            <label>¿Aplica Plan de Acción?</label>
                            <input type="text" className="form-control" placeholder="¿Aplica Plan de Acción?" />
                        </div>
                        <div className="form-group">
                            <label>Acción para Fortalecer el Control</label>
                            <input type="text" className="form-control" placeholder="Acción para Fortalecer el Control" />
                        </div>
                        <div className="form-group">
                            <label>Solidez del Conjunto de Controles</label>
                            <input type="text" className="form-control" placeholder="Solidez del Conjunto de Controles" />
                        </div>
                        <div className="form-group">
                            <label>Controles Disminuyen la Probabilidad</label>
                            <input type="text" className="form-control" placeholder="Controles Disminuyen la Probabilidad" />
                        </div>
                        <div className="form-group">
                            <label>Controles Disminuyen el Impacto</label>
                            <input type="text" className="form-control" placeholder="Controles Disminuyen el Impacto" />
                        </div>
                        <div className="form-group">
                            <label>Desplazamiento de la Probabilidad</label>
                            <input type="text" className="form-control" placeholder="Desplazamiento de la Probabilidad" />
                        </div>
                        <div className="form-group">
                            <label>Desplazamiento del Impacto</label>
                            <input type="text" className="form-control" placeholder="Desplazamiento del Impacto" />
                        </div>
                        <div className="form-group">
                            <label>Probabilidad Residual</label>
                            <input type="text" className="form-control" placeholder="Probabilidad Residual" />
                        </div>
                        <div className="form-group">
                            <label>Impacto Residual</label>
                            <input type="text" className="form-control" placeholder="Impacto Residual" />
                        </div>
                        <div className="form-group">
                            <label>Perfil del Riesgo Residual</label>
                            <input type="text" className="form-control" placeholder="Perfil del Riesgo Residual" />
                        </div>
                        <div className="form-group">
                            <label>Zona de Riesgo Residual</label>
                            <input type="text" className="form-control" placeholder="Zona de Riesgo Residual" />
                        </div>
                        <div className="form-group">
                            <label>Tratamiento del Riesgo Residual</label>
                            <input type="text" className="form-control" placeholder="Tratamiento del Riesgo Residual" />
                        </div>
                        <div className="form-group">
                            <label>Acción Plan Manejo de Riesgos</label>
                            <input type="text" className="form-control" placeholder="Acción Plan Manejo de Riesgos" />
                        </div>
                        <div className="form-group">
                            <label>Responsable Plan Manejo de Riesgos</label>
                            <input type="text" className="form-control" placeholder="Responsable Plan Manejo de Riesgos" />
                        </div>
                        <div className="form-group">
                            <label>Fecha Programada Plan Manejo</label>
                            <input type="date" className="form-control" placeholder="Fecha Programada Plan Manejo" />
                        </div>
                        <div className="form-group">
                            <label>Vinculación Riesgo Corrupción</label>
                            <input type="text" className="form-control" placeholder="Vinculación Riesgo Corrupción" />
                        </div>
                        <div className="form-group">
                            <label>Deficiencia Control Interno</label>
                            <input type="text" className="form-control" placeholder="Deficiencia Control Interno" />
                        </div>
                        <div className="form-group">
                            <label>Cumple en Diseño</label>
                            <input type="text" className="form-control" placeholder="Cumple en Diseño" />
                        </div>
                        <div className="form-group">
                            <label>Cumple en Ejecución</label>
                            <input type="text" className="form-control" placeholder="Cumple en Ejecución" />
                        </div>
                        <div className="form-group">
                            <label>Observaciones</label>
                            <textarea className="form-control" placeholder="Observaciones"></textarea>
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

export default GestionCorrupcionForm;
