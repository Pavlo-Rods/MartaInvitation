const axios = require('axios');

exports.handler = async (event) => {
  const formUrl = 'https://docs.google.com/forms/d/e/1Z5IQ05AxTky-BcTvZYcDFKdr42Ln9ybr-A_xGjA10_M/formResponse';
  const formPayload = new URLSearchParams(event.body);

  try {
    const response = await axios.post(formUrl, formPayload);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Formulario enviado con éxito' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al enviar el formulario' }),
    };
  }
};