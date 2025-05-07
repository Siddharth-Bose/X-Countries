# 🌍 X-Countries

A simple ReactJS application that displays a list of countries with their flags and names using the [XCountries API](https://xcountries-backend.azurewebsites.net/all). The app fetches country data dynamically and presents it in a scrollable, responsive UI.

## 🚀 Features

- Fetches and displays all countries and their flags.
- Responsive card layout using CSS Flexbox.
- Scrollable UI to view more countries.
- Error handling for failed API calls.
- Accessibility compliant with proper `alt` text for flag images.

## 🛠️ Tech Stack

- ReactJS (with Hooks)
- JavaScript (ES6+)
- CSS (Locally Scoped Css modules)

## 📸 Screenshot

> A scrollable interface with country flag and name cards. More flags become visible on scroll. *(Image not included in this README but should match the UI you provided.)*

![Country Flags UI](public/screenshot.png)

## 🔗 API Reference

**Endpoint:**

https://xcountries-backend.azurewebsites.net/all

**Response:**
Returns an array of country objects. Each object includes:
- `name`: Name of the country
- `flag`: URL of the country's flag

## 📂 Project Structure

src/
├── components
|   └──Countries.js # Main component to fetch and display countries
|   └──Countries.module.css # Styles for the Countries Component
└── App.js # Import and render Countries component


## 🧩 Component Breakdown

### 🔹 `Card` Component

A stateless UI component to display a single country's flag and name.

**Props:**
- `flag` (string): URL of the country's flag image.
- `name` (string): Name of the country.

**Returns:**  
JSX block with image and heading wrapped inside a styled card using locally scoped CSS.

---

### 🔹 `Countries` Component

The main component responsible for:
- Fetching country data from the backend API.
- Maintaining a state (`countries`) to hold the API response.
- Handling and logging errors using `console.error("Error fetching data: ", error)`.
- Rendering a list of `Card` components using `map()`.

**Returns:**  
JSX that dynamically renders cards for each country using a flexbox layout.

---

## 🎨 Styling

This project uses **CSS Modules** for styling, ensuring:
- **Scoped styles** (styles don’t leak into other components).
- Easy-to-maintain, modular CSS.

## 🖥️ Running Locally

Follow the steps below to run this project on your local machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/countries-flags-viewer.git
   cd countries-flags-viewer


2. **Install Dependencies**

   ```bash
   npm install
   npm run dev

3. **Open in Browser**

Follow the steps below to run this project on your local machine:

Visit http://localhost:5173 to view the application in your browser.