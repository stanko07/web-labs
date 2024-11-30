const flowerData = [
    {
        id: 1,
        name: 'Peperomia Ginny', 
        image: 'Peperomia Ginny.png',
        price: '25', 
        colors: ['#228B22'],       
        all_vailable_colors: [
            { color: 'red', quantity: 10 },
            { color: 'blue', quantity: 5 },
            { color: 'orange', quantity: 8 },
            { color: 'yellow', quantity: 7 },
            { color: 'green', quantity: 12 },
        ],
        description: 'A beautiful and vibrant plant perfect for indoor decoration.',
        bloomTime: 'Year-round',
        careTips: 'Place in bright, indirect light. Water moderately and allow the soil to dry between waterings.'
    },
    {
        id: 2, 
        name: 'Bird’s Nest Fern',
        image: 'Bird’s Nest Fern.png',
        price: '45', 
        colors: ['#228B22'],
        all_vailable_colors: [
            { color: 'red', quantity: 14 },
            { color: 'blue', quantity: 18 },
            { color: 'orange', quantity: 11 },
            { color: 'yellow', quantity: 9 },
            { color: 'green', quantity: 20 },
        ],
        description: 'A lush, tropical fern that thrives in humid environments.',
        bloomTime: 'Year-round (non-flowering fern)',
        careTips: 'Keep in a humid environment with indirect sunlight. Water when the top inch of soil feels dry.'
    },
    {
        id: 3,
        name: 'Large Majesty Palm', 
        image: 'Large Majesty Palm.png',
        price: '52', 
        colors: ['#228B22'],
        all_vailable_colors: [
            { color: 'red', quantity: 16 },
            { color: 'blue', quantity: 22 },
            { color: 'orange', quantity: 15 },
            { color: 'yellow', quantity: 17 },
            { color: 'green', quantity: 19 },
        ],
        description: 'A large, graceful palm that adds a touch of elegance to any space.',
        bloomTime: 'Year-round (non-flowering)',
        careTips: 'Place in bright, indirect light. Keep the soil moist, but do not overwater.'
    },
    {
        id: 4,
        name: 'Pet Friendly Plant', 
        image: 'Pet Friendly Plant.png',
        price: '30', 
        colors: ['#228B22'],
        all_vailable_colors: [
            { color: 'red', quantity: 55 },
            { color: 'blue', quantity: 10 },
            { color: 'orange', quantity: 14 },
            { color: 'yellow', quantity: 6 },
            { color: 'green', quantity: 11 },
        ],
        description: 'A pet-safe plant ideal for households with animals.',
        bloomTime: 'Year-round',
        careTips: 'Ensure medium light exposure and moderate watering. Allow the soil to dry slightly between waterings.'
    },
    {
        id: 5,
        name: 'Tulpanu', 
        image: 'tulpanu.png',
        price: '35', 
        colors: ['#FF69B4'],
        all_vailable_colors: [
            { color: 'red', quantity: 20 },
            { color: 'blue', quantity: 24 },
            { color: 'orange', quantity: 21 },
            { color: 'yellow', quantity: 19 },
            { color: 'green', quantity: 18 },
        ],
        description: 'A classic and elegant tulip, perfect for spring decor.',
        bloomTime: 'Spring',
        careTips: 'Plant in full sun. Water regularly and ensure well-drained soil. Best grown outdoors.'
    },
    {
        id: 6,
        name: 'Red Tulpani', 
        image: 'redtulpani.png',
        price: '28', 
        colors: ['#E52B50'],
        all_vailable_colors: [
            { color: 'red', quantity: 27 },
            { color: 'blue', quantity: 29 },
            { color: 'orange', quantity: 25 },
            { color: 'yellow', quantity: 23 },
            { color: 'green', quantity: 26 },
        ],
        description: 'A vibrant red tulip that adds color to any garden.',
        bloomTime: 'Spring',
        careTips: 'Requires full sun and well-drained soil. Water regularly during blooming period.'
    },
    {
        id: 7,
        name: 'Figpoymusho', 
        image: 'figpoymusho.png',
        price: '18', 
        colors: ['#FF69B4'],
        all_vailable_colors: [
            { color: 'red', quantity: 8 },
            { color: 'blue', quantity: 11 },
            { color: 'orange', quantity: 9 },
            { color: 'yellow', quantity: 15 },
            { color: 'green', quantity: 14 },
        ],
        description: 'A unique plant with broad leaves and a rich texture.',
        bloomTime: 'Summer to Autumn',
        careTips: 'Place in indirect sunlight. Water when the soil feels dry to the touch.'
    },
    {
        id: 8,
        name: 'Simpatulki', 
        image: 'simpatulki.png',
        price: '60', 
        colors: ['#FF69B4'],
        all_vailable_colors: [
            { color: 'red', quantity: 22 },
            { color: 'blue', quantity: 28 },
            { color: 'orange', quantity: 26 },
            { color: 'yellow', quantity: 30 },
            { color: 'green', quantity: 31 },
        ],
        description: 'An exotic and rare plant for true enthusiasts.',
        bloomTime: 'Summer',
        careTips: 'Provide bright, indirect light. Maintain moderate humidity and water regularly.'
    },
    {
        id: 9,
        name: 'Pionu', 
        image: 'pionki.png',
        price: '13', 
        colors: ['#E52B50'],
        all_vailable_colors: [
            { color: 'red', quantity: 19 },
            { color: 'blue', quantity: 25 },
            { color: 'orange', quantity: 18 },
            { color: 'yellow', quantity: 20 },
            { color: 'green', quantity: 23 },
        ],
        description: 'A beautiful and fragrant flower ideal for bouquets.',
        bloomTime: 'Late Spring to Early Summer',
        careTips: 'Plant in full sun. Water thoroughly and ensure soil is rich in nutrients.'
    },
];

module.exports = flowerData;
