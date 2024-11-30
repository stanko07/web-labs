const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const flowerData = require('./src/context/flowerData');

const colorCodeMap = {
    green: "#228B22",
    pink: "#FF69B4",
    red: "#E52B50",
};

app.get('/api/flowerData', (req, res) => {
    const { search, sort, color } = req.query;

    let filteredFlowers = flowerData;

    if (search) {
        filteredFlowers = filteredFlowers.filter(flower =>
            flower.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (color && color !== 'all') {
        const colorCode = colorCodeMap[color.toLowerCase()] || color;
        filteredFlowers = filteredFlowers.filter(flower =>
            flower.colors.includes(colorCode)
        );
    }

    if (sort === 'asc') {
        filteredFlowers.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else if (sort === 'desc') {
        filteredFlowers.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    }

    res.json(filteredFlowers);
});

app.get('/api/flowerData/:id', (req, res) => {
    const flowerId = parseInt(req.params.id);
    const flower = flowerData.find(f => f.id === flowerId);

    if (flower) {
        res.json(flower);
    } else {
        res.status(404).json({ message: "Flower not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
