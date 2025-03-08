import React, { useState } from 'react';
import axios from 'axios';

const GForm = () => {
  const [formData, setFormData] = useState({
    asistencia: '',
    asistentes: '',
    alergias: {
      frutosSecos: false,
      lactosa: false,
      gluten: false,
      otro: '',
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        alergias: {
          ...formData.alergias,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new URLSearchParams();
    formPayload.append('entry.1234567890', formData.asistencia); // Reemplaza con el nombre real del campo
    formPayload.append('entry.0987654321', formData.asistentes); // Reemplaza con el nombre real del campo
    formPayload.append('entry.1122334455', formData.alergias.frutosSecos ? 'Frutos Secos' : ''); // Reemplaza con el nombre real del campo
    formPayload.append('entry.2233445566', formData.alergias.lactosa ? 'Lactosa' : ''); // Reemplaza con el nombre real del campo
    formPayload.append('entry.3344556677', formData.alergias.gluten ? 'Gluten' : ''); // Reemplaza con el nombre real del campo

    try {
      await axios.post('/.netlify/functions/cors-proxy', formPayload);
      alert('Formulario enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Confirma tu asistencia:</label>
        <select name="asistencia" value={formData.asistencia} onChange={handleChange}>
          <option value="">Selecciona una opción</option>
          <option value="Si, asistiré">Si, asistiré</option>
          <option value="No, no puedo asistir">No, no puedo asistir</option>
        </select>
      </div>
      <div>
        <label>Asistentes:</label>
        <input
          type="text"
          name="asistentes"
          value={formData.asistentes}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Alergias o Intolerancias:</label>
        <div>
          <input
            type="checkbox"
            name="frutosSecos"
            checked={formData.alergias.frutosSecos}
            onChange={handleChange}
          />
          <label>Frutos Secos (Almendras, Nueces, Cacahuete, etc)</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="lactosa"
            checked={formData.alergias.lactosa}
            onChange={handleChange}
          />
          <label>Lactosa</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="gluten"
            checked={formData.alergias.gluten}
            onChange={handleChange}
          />
          <label>Gluten</label>
        </div>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default GForm;