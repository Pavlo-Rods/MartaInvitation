import React, { useState } from "react";
import "../commoncss/form.css";

const GoogleForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    asistencia: "",
    asistentes: "",
    numAsistentes: "",
    alergias: "",
    bus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.asistencia === "No") {
      setFormData((prev) => ({
        ...prev,
        asistentes: "No",
      }));
    }

    var googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScDyvhuXmQoXbgVn6KaBz3pTHQFHrqzpr7yWf1L3WHpzUY6UQ/formResponse";

    googleFormURL += "?entry.1092877632=" + formData.nombre;
    googleFormURL += "&entry.1843499636=" + formData.asistencia;
    googleFormURL += "&entry.715290076=" + formData.asistentes;
    googleFormURL += "&entry.914207409=" + formData.numAsistentes;
    googleFormURL += "&entry.115438155=" + formData.alergias;
    googleFormURL += "&entry.452493007=" + formData.bus;

    const formBody = new URLSearchParams();
    formBody.append("entry.1092877632", formData.nombre);
    formBody.append("entry.1843499636", formData.asistencia);
    formBody.append("entry.715290076", formData.asistentes);
    formBody.append("entry.914207409", formData.numAsistentes);
    formBody.append("entry.115438155", formData.alergias);
    formBody.append("entry.452493007", formData.bus);

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
    })
      .then(() => alert("Gracias " + formData.nombre + " por confirmar tu asistencia"))
      .catch((error) => alert("Error al enviar el formulario"));
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Confirmación de asistencia</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input 
              type="text" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              placeholder="Escribe tu nombre completo"
              required 
            />
          </div>

          <div className="form-group">
            <label>¿Asistirás?</label>
            <select 
              name="asistencia" 
              value={formData.asistencia} 
              onChange={handleChange} 
              required
            >
              <option value="">Selecciona una opción...</option>
              <option value="Si">Sí</option>
              <option value="No">No</option>
            </select>
          </div>

          {formData.asistencia === "Si" && (
            <>
              <div className="form-group">
                <label>¿Vendrás acompañado?</label>
                <select 
                  name="asistentes" 
                  value={formData.asistentes} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Selecciona una opción...</option>
                  <option value="Si">Sí</option>
                  <option value="No">No</option>
                </select>
              </div>

              {formData.asistentes === "Si" && (
                <div className="form-group">
                  <label>¿Cuántas personas te acompañarán?</label>
                  <input 
                    type="number" 
                    name="numAsistentes" 
                    value={formData.numAsistentes} 
                    onChange={handleChange} 
                    min="1"
                    placeholder="Número de acompañantes"
                    required 
                  />
                </div>
              )}
            </>
          )}

<div className="form-group">
            <label>Necesitaras transporte en bus:</label>
            <select 
              name="bus" 
              value={formData.bus} 
              onChange={handleChange} 
              required
            >
              <option value="">Selecciona una opción...</option>
              <option value="No">No</option>
              <option value="Solo ida">Solo ida</option>
              <option value="Solo vuelta">Solo vuelta</option>
              <option value="Ida y vuelta">Ida y vuelta</option>
            </select>
          </div>

          <div className="form-group">
            <label>Alergias o restricciones alimentarias:</label>
            <textarea 
              name="alergias" 
              value={formData.alergias} 
              onChange={handleChange} 
              placeholder="Si tienes alguna alergia o restricción alimentaria, por favor especifícala aquí"
              rows="3"
            />
          </div>

          <button type="submit" className="submit-button">Confirmar Asistencia</button>
        </form>
      </div>
    </div>
  );
};

export default GoogleForm;