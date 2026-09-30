# 💰 CryptoApp

A responsive cryptocurrency market application built with **React, Vite, JavaScript, HTML, and CSS**.

CryptoApp uses the **CoinGecko API** to fetch cryptocurrency market data and provides an interactive interface for searching, filtering, and viewing cryptocurrency information and price charts.

## 🚀 Features

* 📊 Display cryptocurrency market data
* 🔎 Search cryptocurrencies
* 💱 Support multiple currencies
* 📄 Pagination for cryptocurrency data
* ⏳ Loading states while fetching data
* 📈 Cryptocurrency price charts
* 🪟 Interactive cryptocurrency details modal
* 📡 Fetch market data from CoinGecko API
* 📱 Responsive design
* 🎨 Custom CSS styling
* 📊 Display 24-hour price changes and trading volume

## 🛠️ Technologies

* **React**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Vite**
* **CoinGecko API**
* **Fetch API**
* **React Hooks**

  * `useState`
  * `useEffect`
* **React Loader Spinner**

## 🧠 React Concepts Used

This project was developed to practice and demonstrate several important React concepts.

### useState

Used for managing application states such as:

* Cryptocurrency data
* Loading state
* Search input
* Selected currency
* Pagination
* Chart data
* Modal visibility

### useEffect

Used to perform API requests and update cryptocurrency data when required dependencies change.

### Props

Data and functions are passed between components using React props.

### Component-Based Architecture

The application is divided into reusable components to keep the project organized and maintainable.

## 🔌 API Integration

CryptoApp uses the **CoinGecko API** to retrieve cryptocurrency market information and chart data.

The project uses the Fetch API to communicate with the API endpoints.

Main data includes:

* Cryptocurrency name
* Symbol
* Current price
* 24-hour price change
* Total trading volume
* Cryptocurrency image
* Historical market chart data

## 🔍 Search

Users can search for cryptocurrencies through the search interface.

The search functionality retrieves matching cryptocurrency information through the API and displays the results dynamically.

## 💱 Currency Selection

The application supports different currencies for displaying cryptocurrency prices.

Currently supported currencies include:

* USD `$`
* EUR `€`
* JPY `¥`

## 📄 Pagination

Cryptocurrency market data is divided into multiple pages using pagination, making it easier to browse a large amount of market data.

## 📈 Price Chart

Users can select a cryptocurrency to view its market chart.

The chart data is retrieved from the CoinGecko API and displayed through the cryptocurrency details interface.

## 🪟 Modal

A modal interface is used to display additional cryptocurrency information and the selected cryptocurrency's price chart without leaving the main page.

## 📂 Project Structure

```text
crypto-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── helpers/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

> The project structure may change as the application is improved.

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/shahriyari-milad-94/crypto-app.git
```

Enter the project directory:

```bash
cd crypto-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL provided by Vite.

## 🎯 What I Practiced

This project helped me practice:

* Building a React application with Vite
* Working with REST APIs
* Fetching asynchronous data
* Using `fetch()`
* Managing state with `useState`
* Handling side effects with `useEffect`
* Passing data through props
* Creating reusable components
* Implementing search functionality
* Implementing pagination
* Handling loading states
* Working with API chart data
* Creating modal interfaces
* Formatting cryptocurrency prices
* Building responsive interfaces
* Organizing a React project
* Using Git and GitHub for version control

## 📸 Screenshots

Screenshots will be added here.

## 🔗 Repository

GitHub Repository:

https://github.com/shahriyari-milad-94/crypto-app

## 👨‍💻 Author

**Milad Shahriyari**

Frontend Developer | React Developer

---

⭐ If you find this project useful, feel free to give it a star.
