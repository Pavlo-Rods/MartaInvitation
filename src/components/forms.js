import React, {useState} from "react";
import "../commoncss/GoogleForm.css";

const GoogleForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    asistencia: "",
    asistentes: "",
    numAsistentes: "",
    alergias: [],
    otrasAlergias: "",
  }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Si el usuario está escribiendo en "Otras Alergias", actualiza la lista de alergias
    if (name === "otrasAlergias") {
      setFormData((prev) => {
        let nuevasAlergias = prev.alergias.filter((a) => !a.startsWith("Otros:")); // Borra versiones previas
        if (value.trim() !== "") {
          nuevasAlergias.push(`Otros: ${value}`);
        }
        return { ...prev, alergias: nuevasAlergias };
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      let nuevasAlergias = checked
        ? [...prev.alergias, value] // Añadir si está marcado
        : prev.alergias.filter((alergia) => alergia !== value); // Quitar si se desmarca

      return { ...prev, alergias: nuevasAlergias };
    });
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
    googleFormURL += "&entry.115438155=" + formData.alergias.join(", ");

    const formBody = new URLSearchParams();
    formBody.append("entry.1092877632", formData.nombre);
    formBody.append("entry.1843499636", formData.asistencia);
    formBody.append("entry.715290076", formData.asistentes);
    formBody.append("entry.115438155", formData.alergias.join(", "));


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
        <h2>Confirmanos tu asistencia</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>¿Asistirás?</label>
            <select name="asistencia" value={formData.asistencia} onChange={handleChange} required>
              <option value="">Selecciona...</option>
              <option value="Si">Sí</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group">
            <label>¿Vendrás acompañado?</label>
            <select name="asistentes" value={formData.asistentes} onChange={handleChange} required={formData.asistencia === "Si"} // Conditionally set "required"
              disabled={formData.asistencia === "No"} >
              <option value="">Selecciona...</option>
              <option value="Si">Sí</option>
              <option value="No">No</option>
            </select>
            {formData.asistentes === "Si" && (
              <div className="form-group">
              <label>¿Por cuanta gente?</label>
              <input type="number" placeholder="" name="numAsistentes" value={formData.numAsistentes} onChange={handleChange} required />
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Alergias:</label>
            <div className="checkbox-group">
              {["Frutos secos", "Lactosa", "Gluten", "Otros"].map((alergia) => (
                <label key={alergia}>
                  <input type="checkbox" value={alergia} onChange={handleCheckboxChange} />
                  {alergia}
                </label>
              ))}
            </div>
            {formData.alergias.includes("Otros") && (
              <input type="text" name="otrasAlergias" placeholder="Especificar otras alergias" value={formData.otrasAlergias} onChange={handleChange} />
            )}
          </div>

          <button type="submit">Confirmar Asistencia</button>
        </form>
      </div>
    </div>
  );
};

export default GoogleForm;