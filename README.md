# 🍽️ Recipe Finder App

A simple and responsive recipe search web application built using **HTML**, **CSS**, and **JavaScript**. It uses the [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe details based on user input and displays them in a visually appealing card layout. Clicking on any card shows a popup with complete instructions and ingredients.

---

## 📸 Preview

![Recipe App Screenshot](./screenshot.png)

---

## 🚀 Features

- 🔎 Search for recipes by name
- 🍲 Display recipe image and name in a responsive grid
- 🧾 Click on a card to view detailed recipe popup
- 📋 View ingredients, measurements, and cooking instructions
- ❌ Close the popup with a button
- 🎨 Blurred background with scroll lock while popup is active
- ⚡ Smooth UX with loading and error messages

---

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (ES6)
- Axios (for HTTP requests)
- [TheMealDB API](https://www.themealdb.com/api.php)

---

## 📦 How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/recipe-finder-app.git
   cd recipe-finder-app
````

2. **Open `index.html` in your browser** (No build tools or backend required).

---

## 🌐 API Reference

* **Endpoint:** `https://www.themealdb.com/api/json/v1/1/search.php?s=`
* **Query Param:** `s` – Search term for meal name.

---

## 🧠 Lessons Learned

* How to work with public APIs and handle asynchronous data.
* Managing UI state with DOM manipulation.
* Making a responsive layout using CSS Grid and Flexbox.
* Creating modal popups and managing overlay interactions.
* Handling scroll lock and reset behaviors.

---

## 📁 Folder Structure

```
recipe-finder/
│
├── index.html
├── screenshot.png
├── style.css
├── script.js
└── README.md
```

---

## 📌 To-Do / Future Improvements

* [ ] Add categories or filter by meal type
* [ ] Add "Favorites" feature with localStorage
* [ ] Responsive design tweaks for tablet/mobile
* [ ] Improve error handling and empty states

---

## 🤝 Acknowledgments

* Thanks to [TheMealDB](https://www.themealdb.com) for the free API.
* Inspired by real-world food apps and design patterns.

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).
