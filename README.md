# ♻️ We Want Waste - Skip Selection Page Redesign

This project is a complete redesign of the **"Choose Your Skip Size"** page from [WeWantWaste.co.uk](https://wewantwaste.co.uk/).  
The goal is to enhance the user experience and UI while preserving the existing functionality using modern React practices.

---

## 🚀 Features

- ✅ Fully responsive layout (mobile & desktop)
- ⚛️ Built with React functional components and hooks
- 🔄 Click to select/deselect a skip
- ℹ️ Slide-up overlay with skip details and actions
- 🚫 Road restriction indicator for skips not allowed on the road
- 🔌 Live data fetched from public API
- 🎨 Clean, maintainable dark-themed UI with scoped CSS

---

## 🔗 API Source

Data is fetched from:
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

---

## 📝 How It Works
On page load, skip options are fetched and displayed.

Users can select/deselect a skip by clicking on it.

An overlay appears with more information when selected.

Includes a "Back" and "Continue" button for future steps.

A disclaimer message is shown as required.

---

## 📁 Folder Structure
```bash
css
Copy
Edit
src/
  components/
    SkipSelector.jsx
    SkipSelector.css
  App.js
  index.js
```

---
## 🔧 Setup Instructions

To run this project locally:

```bash
git clone https://github.com/rmohamedsabith/we-want-waste-redesign
cd we-want-waste-redesign
npm install
npm start
```

---

 ## 🧪 Live Demo

**CodeSandbox:**  
👉 [View Live](https://xql8cl-3000.csb.app/)  
**GitHub Repo:**  
🔗 https://github.com/rmohamedsabith/we-want-waste-redesign

---

 ## 🤝 Author

**R. Mohamed Sabith**  
📧 Email: [sabithrasleem@gmail.com](mailto:sabithrasleem@gmail.com)  
🐙 GitHub: [rmohamedsabith](https://github.com/rmohamedsabith)


