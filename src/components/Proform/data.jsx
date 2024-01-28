let plans = [
    { "name": "Mensual", "value": 1 }, 
    { "name": "Semestral", "value": 6 }, 
    { "name": "Anual", "value": 12 }
]

let extras = [
    {
        "id": 0,
        "value": 15,
        "text": "Orientado a principiantes o personas con conocimientos básicos en un área específica. Contenido introductorio y fundamental para establecer una base sólida. Enfoque en conceptos y habilidades básicas. Menor complejidad y profundidad que planes posteriores."
    },
    {
        "id": 1,
        "value": 21,
        "text": "Diseñado para aquellos que ya han completado un plan inicial o que tienen un nivel moderado de habilidades. Mayor complejidad y profundización en los temas. Introduce conceptos más avanzados y habilidades intermedias. Puede incluir la aplicación práctica de conocimientos adquiridos en el plan inicial."
    },
    {
        "id": 2,
        "value": 25,
        "text": "Dirigido a personas con un nivel avanzado de habilidades en el área específica. Contenido altamente especializado y avanzado. Enfoque en conceptos avanzados, habilidades especializadas y resolución de problemas complejos. Puede incluir proyectos prácticos y aplicaciones avanzadas."
    },
    {
        "id": 3,
        "value": 35,
        "text": "Diseñado para expertos en el campo que buscan perfeccionar y maestrar sus habilidades. Contenido altamente especializado y actualizado. Puede incluir la investigación y desarrollo de nuevas técnicas o enfoques. Enfoque en la maestría y la excelencia en el área específica."
    },
    {
        "id": 4,
        "value": 43,
        "text": "Orientado a personas que desean liderar en el campo, ya sea en roles de gestión, innovación o liderazgo técnico. Incluye habilidades de liderazgo, toma de decisiones estratégicas y gestión de equipos. Puede abordar aspectos éticos, sociales y de sostenibilidad en el contexto de la especialización."
    },
    {
        "id": 5,
        "value": 50,
        "text": "Enfocado en desarrollar habilidades gerenciales y de dirección. Incluye temas como gestión de recursos, planificación estratégica y toma de decisiones ejecutivas. Puede abordar aspectos financieros, de recursos humanos y de gestión de proyectos."
    },
]

let data = [
    {
        "id": 0,
        "title": "Inicial",
        "options": [1, 1, 1]
    },
    {
        "id": 1,
        "title": "Intermedio",
        "options": [0, 1, 1]
    },
    {
        "id": 2,
        "title": "Avanzado",
        "options": [1, 1, 1]
    },
    {
        "id": 3,
        "title": "Maestro",
        "options": [0, 1, 1]
    },
    {
        "id": 4,
        "title": "Líder",
        "options": [0, 1, 1]
    },
    {
        "id": 5,
        "title": "Gerencial",
        "options": [0, 0, 1]
    }
]

export { extras, plans, data } 