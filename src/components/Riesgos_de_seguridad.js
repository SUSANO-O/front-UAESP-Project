import React from "react";

function RiesgosSeguridadForm() {
    return (
        <div className="container">
            <h2>Riesgos de Seguridad</h2>
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
                            <label>Descripción del Riesgo</label>
                            <input type="text" className="form-control" placeholder="Descripción del Riesgo" />
                        </div>
                        <div className="form-group">
                            <label>Descripción de los Activos</label>
                            <input type="text" className="form-control" placeholder="Descripción de los Activos" />
                        </div>
                        <div className="form-group">
                            <label>Tipo de Activos</label>
                            <input type="text" className="form-control" placeholder="Tipo de Activos" />
                        </div>
                        <div className="form-group">
                            <label>Impacto</label>
                            <input type="text" className="form-control" placeholder="Impacto" />
                        </div>
                        <div className="form-group">
                            <label>Amenaza</label>
                            <input type="text" className="form-control" placeholder="Amenaza" />
                        </div>
                        <div className="form-group">
                            <label>Vulnerabilidad</label>
                            <input type="text" className="form-control" placeholder="Vulnerabilidad" />
                        </div>
                        <div className="form-group">
                            <label>Clasificación del Riesgo</label>
                            <input type="text" className="form-control" placeholder="Clasificación del Riesgo" />
                        </div>
                        <div className="form-group">
                            <label>Tipo de Riesgo Digital</label>
                            <input type="text" className="form-control" placeholder="Tipo de Riesgo Digital" />
                        </div>
                        <div className="form-group">
                            <label>Frecuencia de la Actividad</label>
                            <input type="text" className="form-control" placeholder="Frecuencia de la Actividad" />
                        </div>
                        <div className="form-group">
                            <label>Probabilidad Inherente</label>
                            <input type="number" step="0.01" className="form-control" placeholder="Probabilidad Inherente" />
                        </div>
                        <div className="form-group">
                            <label>Porcentaje Inherente</label>
                            <input type="number" step="0.01" className="form-control" placeholder="Porcentaje Inherente" />
                        </div>
                        <div className="form-group">
                            <label>Criterios de Impacto</label>
                            <input type="text" className="form-control" placeholder="Criterios de Impacto" />
                        </div>
                        <div className="form-group">
                            <label>Observación del Criterio</label>
                            <input type="text" className="form-control" placeholder="Observación del Criterio" />
                        </div>
                        <div className="form-group">
                            <label>Impacto Inherente</label>
                            <input type="number" step="0.01" className="form-control" placeholder="Impacto Inherente" />
                        </div>
                        <div className="form-group">
                            <label>Porcentaje 2do Inherente</label>
                            <input type="number" step="0.01" className="form-control" placeholder="Porcentaje 2do Inherente" />
                        </div>
                        <div className="form-group">
                            <label>Zona de Riesgo Inherente</label>
                            <input type="text" className="form-control" placeholder="Zona de Riesgo Inherente" />
                        </div>
                        <div className="form-group">
                            <label>No. Control</label>
                            <input type="text" className="form-control" placeholder="No. Control" />
                        </div>
                        <div className="form-group">
                            <label>Descripción del Control</label>
                            <input type="text" className="form-control" placeholder="Descripción del Control" />
                        </div>
                        <div className="form-group">
                            <label>Afectación del Control</label>
                            <input type="text" className="form-control" placeholder="Afectación del Control" />
                        </div>
                        <div className="form-group">
                            <label>Tiene Responsable Asignado</label>
                            <input type="text" className="form-control" placeholder="Tiene Responsable Asignado" />
                        </div>
                        <div className="form-group">
                            <label>Autoridad Responsable</label>
                            <input type="text" className="form-control" placeholder="Autoridad Responsable" />
                        </div>
                        <div className="form-group">
                            <label>Fuente de Información</label>
                            <input type="text" className="form-control" placeholder="Fuente de Información" />
                        </div>
                        <div className="form-group">
                            <label>Observaciones Resueltas</label>
                            <input type="text" className="form-control" placeholder="Observaciones Resueltas" />
                        </div>
                        <div className="form-group">
                            <label>Tipo de Atributos</label>
                            <input type="text" className="form-control" placeholder="Tipo de Atributos" />
                        </div>
                        <div className="form-group">
                            <label>Implementación de Atributos</label>
                            <input type="text" className="form-control" placeholder="Implementación de Atributos" />
                        </div>
                        <div className="form-group">
                            <label>Calificación de Atributos</label>
                            <input type="text" className="form-control" placeholder="Calificación de Atributos" />
                        </div>
                        <div className="form-group">
                            <label>Documentación de Atributos</label>
                            <input type="text" className="form-control" placeholder="Documentación de Atributos" />
                        </div>
                        <div className="form-group">
                            <label>Frecuencia de Atributos</label>
                            <input type="text" className="form-control" placeholder="Frecuencia de Atributos" />
                        </div>
                        <div className="form-group">
                            <label>Evidencia de Atributos</label>
                            <input type="text" className="form-control" placeholder="Evidencia de Atributos" />
                        </div>
                        <div className="form-group">
                            <label>Probabilidad Residual</label>
                            <input type="number" step="0.01" className="form-control" placeholder="Probabilidad Residual" />
                        </div>
                        <div className="form-group">
                            <label>Probabilidad Residual Final</label>
                            <input type="number" step="0.01" className="form-control" placeholder="Probabilidad Residual Final" />
                        </div>
                        <div className="form-group">
                            <label>Porcentaje Residual</label>
                            <input type="number" step="0.01" className="form-control" placeholder="Porcentaje Residual" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Impacto Residual Final</label>
                            <input type="number" step="0.01" className="form-control" placeholder="Impacto Residual Final" />
                        </div>
                        <div className="form-group">
                            <label>Porcentaje 2do Residual</label>
                            <input type="number" step="0.01" className="form-control" placeholder="Porcentaje 2do Residual" />
                        </div>
                        <div className="form-group">
                            <label>Zona de Riesgo Final</label>
                            <input type="text" className="form-control" placeholder="Zona de Riesgo Final" />
                        </div>
                        <div className="form-group">
                            <label>Tratamiento del Riesgo</label>
                            <input type="text" className="form-control" placeholder="Tratamiento del Riesgo" />
                        </div>
                        <div className="form-group">
                            <label>Acción Plan Manejo Riesgos</label>
                            <input type="text" className="form-control" placeholder="Acción Plan Manejo Riesgos" />
                        </div>
                        <div className="form-group">
                            <label>Responsable Plan Manejo Riesgos</label>
                            <input type="text" className="form-control" placeholder="Responsable Plan Manejo Riesgos" />
                        </div>
                        <div className="form-group">
                            <label>Autoridad Plan Manejo Riesgos</label>
                            <input type="text" className="form-control" placeholder="Autoridad Plan Manejo Riesgos" />
                        </div>
                        <div className="form-group">
                            <label>Fecha Revisión</label>
                            <input type="date" className="form-control" placeholder="Fecha Revisión" />
                        </div>
                        <div className="form-group">
                            <label>Observaciones</label>
                            <textarea className="form-control" placeholder="Observaciones"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Observaciones Finales</label>
                            <textarea className="form-control" placeholder="Observaciones Finales"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Fecha de Implementación</label>
                            <input type="date" className="form-control" placeholder="Fecha de Implementación" />
                        </div>
                        <div className="form-group">
                            <label>Fecha de Revisión</label>
                            <input type="date" className="form-control" placeholder="Fecha de Revisión" />
                        </div>
                        <div className="form-group">
                            <label>Fecha de Evaluación</label>
                            <input type="date" className="form-control" placeholder="Fecha de Evaluación" />
                        </div>
                        <div className="form-group">
                            <label>Estado</label>
                            <input type="text" className="form-control" placeholder="Estado" />
                        </div>
                        <div className="form-group">
                            <label>Responsable Evaluación</label>
                            <input type="text" className="form-control" placeholder="Responsable Evaluación" />
                        </div>
                        <div className="form-group">
                            <label>Fecha de Evaluación Final</label>
                            <input type="date" className="form-control" placeholder="Fecha de Evaluación Final" />
                        </div>
                        <div className="form-group">
                            <label>Justificación</label>
                            <textarea className="form-control" placeholder="Justificación"></textarea>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Enviar</button>
                <button type="submit" className="btn btn-secondary mt-3">Editar</button>
                <button type="submit" className="btn btn-danger mt-3">Eliminar</button>            </form>
        </div>
    );
}

export default RiesgosSeguridadForm;
