const express = require('express');
const app = express();

// Endpoint para el cálculo de pi usando la serie de Leibniz
app.get('/leibniz', (req, res) => {
    const terms = parseInt(req.query.terms) || 1000; // Número de términos a usar en la aproximación
    let pi = 0; // Acumulador para el valor de pi
    let series = ''; // Para construir la serie como cadena de texto

    // Cálculo de pi usando la serie de Leibniz y construcción de la serie
    for (let i = 0; i < terms; i++) {
        const denominator = 2 * i + 1;
        const sign = (i % 2 === 0) ? 1 : -1; // Alternancia de signos
        const term = sign * (4 / denominator); // Término de la serie
        pi += term; // Suma o resta el término para la aproximación de pi

        // Construcción de la serie como cadena de texto
        const termString = `4/${denominator}`;
        if (i === 0) {
            series += termString; // El primer término no lleva signo antes
        } else {
            series += (sign > 0 ? `+${termString}` : `-${termString}`); // Agrega el signo
        }
    }

    // Respuesta del servidor en formato JSON
    res.json({
        terms: terms, // Número de términos utilizados
        approximation: pi, // Valor aproximado de pi
        series: series // La serie como cadena de texto
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${3000}`);
});
