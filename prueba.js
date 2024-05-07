const express = require('express');
const app = express();

// Endpoint para el cálculo de pi usando la serie de Leibniz
app.get('/leibniz', (req, res) => {
    const terms = parseInt(req.query.terms) || 1000; // Número de términos a usar en la aproximación
    let pi = 0; // Acumulador para el valor de pi

    // Cálculo de pi usando la serie de Leibniz
    for (let i = 0; i < terms; i++) {
        const sign = (i % 2 === 0) ? 1 : -1; // Alternancia de signos
        const term = sign * (4 / (2 * i + 1)); // Término de la serie
        pi += term; // Suma o resta el término para la aproximación de pi
    }

    // Respuesta del servidor en formato JSON
    res.json({
        terms: terms, // Número de términos utilizados
        approximation: pi // Valor aproximado de pi
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${3000}`);
});
