const axios = require('axios');

exports.handler = async (event) => {
  const formUrl = 'https://forms.gle/ZYQUYjX55cni53Zy9';
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