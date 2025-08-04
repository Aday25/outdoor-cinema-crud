# 🎬 Outdoor Cinema - Cine de Verano 🌞🩱

¡Bienvenid@ al proyecto **Outdoor Cinema**!  
Una aplicación web donde podrás disfrutar de un auténtico cine de verano con dos ciclos temáticos especiales:

- 🦈 **Ciclo de Tiburones**  
- 📚 **Ciclo de Literatura**

Este proyecto es una excelente oportunidad para practicar JavaScript, consumir APIs simuladas y dominar el flujo completo de operaciones **CRUD**.

---

## 📚 ¿Qué aprenderás?

- Leer, crear, editar y eliminar datos dinámicamente (CRUD)  
- Usar `fetch` en JavaScript para consumir una API  
- Trabajar con HTML, CSS y JavaScript puros  
- Simular un backend usando `json-server`  
- Organizar y estructurar un proyecto frontend desde cero  

---

## 📁 Estructura del proyecto

```plaintext
OUTDOOR-CINEMA/
├── server/
│   └── db.json
├── src/
│   ├── service.js
│   └── styles.css
├── index.html
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

🚀 Instalación y ejecución
1. Clona el repositorio
git clone [https://github.com/Pal-cloud/outdoor-cinema](https://github.com/Aday25/outdoor-cinema-crud)
cd OUTDOOR-CINEMA
2. Instala las dependencias del proyecto
bash
Copiar
Editar
npm install
3. Agrega el script al package.json
json
Copiar
Editar
"scripts": {
  "api": "json-server --watch server/db.json"
}
4. Inicia el servidor simulado
bash
Copiar
Editar
npm run api
🔗 Accede a la API en:
http://localhost:3000/movies

🔌 Consumo de la API
Desde el archivo src/service.js se manejan todas las operaciones a la API usando fetch.
La base de URL utilizada es:

bash
Copiar
Editar
http://localhost:3000/movies
Operaciones disponibles:

GET → Obtener todas las películas

POST → Crear una nueva película

PATCH / PUT → Actualizar una película existente

DELETE → Eliminar una película

💡 Tecnologías utilizadas
<p> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" /> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" /> <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" /> <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=for-the-badge&logo=adobe-photoshop&logoColor=white" alt="Photoshop" /> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" /> <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI" /> </p>
🤝 Contribuciones
¿Quieres colaborar con el proyecto? ¡Toda ayuda es bienvenida! Puedes:

Sugerir nuevas películas o ciclos temáticos

Mejorar el diseño visual con CSS

Refactorizar el código JavaScript

Agregar funcionalidades o modularidad

¿Cómo contribuir?
bash
Copiar
Editar
# Haz un fork del repositorio
git fork https://github.com/Pal-cloud/outdoor-cinema

# Crea una rama para tu mejora
git checkout -b mejora-nueva

# Haz tus cambios y guárdalos
git commit -m "Agrega nueva funcionalidad"

# Sube los cambios a tu fork
git push origin mejora-nueva
Luego, abre una Pull Request desde GitHub 🚀

🧠 Autoría y créditos
Proyecto desarrollado como práctica de desarrollo frontend para simular una API y aprender a consumirla desde el navegador junto a [Pal-cloud](https://github.com/Pal-cloud)

🎬 ¡Que empiece la función! 🍿
