const axios = require('axios');

exports.handler = async (event) => {
  const formUrl = 'https://docs.google.com/forms/d/e/1Z5IQ05AxTky-BcTvZYcDFKdr42Ln9ybr-A_xGjA10_M/formResponse';
  const formPayload = new URLSearchParams(event.body);

  console.log('Received event:', event);
  console.log('Form payload:', formPayload.toString());

  try {
    const response = await axios.post(formUrl, formPayload);
    console.log('Response from Google Forms:', response.data);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Formulario enviado con éxito' }),
    };
  } catch (error) {
    console.error('Error sending form:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al enviar el formulario', details: error.message }),
    };
  }
};