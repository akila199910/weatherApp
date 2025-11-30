🌤️ WeatherApp — React + TypeScript + OpenWeather API + Docker

A modern, responsive Weather Dashboard built using React + Vite + TypeScript, which loads a list of city codes from cities.json, fetches real-time weather information from OpenWeather API, implements 5-minute caching, and displays a clean UI using custom CSS and cloud graphics.

📁 Project Structure

WEATHERAPP/
│
├── public/
│   ├── data/
│   │   └── cities.json
│   └── images/
│       ├── cloud-top.png
│       └── cloud-bottom.png
│
├── src/
│   ├── assets/
│   ├── services/
│   │   └── weatherService.ts
│   ├── utils/
│   │   ├── loadCityCodes.ts
│   │   └── cache.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── .env
├── Dockerfile
├── package.json
├── vite.config.ts
└── README.md

🚀 Features

✔ Load city list from cities.json
  The app reads the "List" array and extracts "CityCode" values.

✔ Fetch weather for each city
  Uses the weather endpoint because the group endpoint is not available for new free API keys.

✔ 5-Minute Caching (Assignment Requirement)
  Weather responses are stored in localStorage and expire automatically after 5 minutes.

✔ Modern responsive UI
  Uses cloud-style images and glass-effect cards.

✔ Fully Dockerized
  Includes a production-ready multi-stage Dockerfile using Node + Nginx.


🔧 Technologies Used

  React (Vite)
  TypeScript
  OpenWeather REST API
  Modern CSS
  Docker (Multi-stage build)
  Nginx


📥 Installation & Setup

1️⃣ Install Dependencies
    npm install

2️⃣ Add Environment Variable
    Create a .env file in the project root:
    VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY

3️⃣ Run Development Server
    npm run dev

Open browser:
http://localhost:5173


🌐 OpenWeather API Usage

  Because the /data/2.5/group endpoint is not available to new free keys, this project uses:
  https://api.openweathermap.org/data/2.5/weather?id={CITY_ID}&units=metric&appid={API_KEY}
  Each city is fetched individually and combined into a list for rendering.


📁 City Data File (cities.json)

  public/data/cities.json contains:

  {
    "List": [
      { "CityCode": "1248991", "CityName": "Colombo" },
      { "CityCode": "1850147", "CityName": "Tokyo" },
      { "CityCode": "2644210", "CityName": "Liverpool" }
    ]
  }


🧠 Caching Logic

  Implemented in src/utils/cache.ts:
  Stores full weather response in localStorage
  Includes timestamp
  Expires after 5 minutes
  If user refreshes before 5 minutes → cached data is used
  After expiration → fetches new data automatically


🎨 UI Design Overview

  The UI features:
  Cloud-style top and bottom backgrounds
  Glassmorphism weather cards
  Current temperature with icon
  City name + weather description
  Humidity, wind speed, min/max temperatures
  Fully responsive (desktop + mobile)


🐳 Docker Deployment

This project includes a production-grade Dockerfile.

  Build Docker Image
  docker build -t weatherapp .

  Run Container
  docker run -p 3000:80 weatherapp

  Access the app:
  http://localhost:3000


  🧱 Dockerfile (Multi-Stage Build)

    Stage 1: Build React App using Node 18 Alpine
    Stage 2: Serve using lightweight Nginx
    This creates a small, secure production image.