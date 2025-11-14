# Star Wars Character App

👋 Overview

This project is a frontend assignment built for the Zippee Frontend Developer Role.
It displays a list of Star Wars characters fetched from the SWAPI (Star Wars API)
.
The app is designed to be fully responsive, visually appealing, and easy to maintain — built using modern React + Tailwind CSS stack.

🧰 Tech Stack

⚛️ React (Hooks + Functional Components)

🎨 Tailwind CSS for fast, responsive styling

🔄 Fetch API / Axios for API calls

🧪 React Testing Library (if tests included)

💚 Animate.css for subtle animations

✨ Features Implemented
🪐 Core Functionality

Fetches characters from /people endpoint of SWAPI

Implements pagination to browse through characters

Displays character cards with name, image, and key details

On click → opens a modal showing:

Name

Height (in meters)

Mass (in kg)

Birth Year

Number of Films

Date Added (formatted as dd-MM-yyyy)

Homeworld details (name, terrain, climate, population)

🧱 UI & UX

Built using TailwindCSS gradients & shadows for modern design

Hover effects and card animations for interactivity

Consistent card dimensions for visual balance

Responsive layout (works seamlessly on mobile, tablet & desktop)

🔍 Bonus Additions (if implemented)

Search by character name

Filter by homeworld/species

Mock Login & Token handling

Smooth animations using Animate.css

🧾 Folder Structure
src/
├── components/
│ ├── CharacterCard.jsx
│ ├── CharacterModal.jsx
│ ├── HomeworldCard.jsx
│ └── Navbar.jsx
├── pages/
│ └── Characters.jsx
├── App.jsx
├── index.js
└── styles/
└── index.css

⚙️ How to Run the Project

# 1. Clone this repository

git clone https://github.com/Adii0904/Zippee---Star-Wars-Character-App

# 2. Move into project folder

cd zippee-assessment/zippee-swapi

# 3. Install dependencies

npm install

# 4. Start the development server

npm run dev

App will run at: http://localhost:5173/
(if using Vite)

### 🧪 Testing

An integration test has been added using **React Testing Library** to ensure that the character detail modal opens and displays correct data.  
To run the test:

```bash
npm test

📦 Build for Production
npm run build

🧠 Design Choices & Notes

Functional Components + Hooks: Keeps code clean and modular

Tailwind Utility Classes: Ensures rapid prototyping and responsive design

Consistent Gradient Themes: Every card follows a unified visual structure

Clean State Handling: API data & errors handled gracefully

Responsive Design: All cards auto-adjust layout across breakpoints



💬 Final Thoughts

This assignment reflects my approach to building clean, modern, and scalable front-end applications.
I’ve focused on performance, consistency, and a visually appealing user experience.
Looking forward to discussing this further in the next round! 🙌

🥷 The Full Stack JavaScript Developer

Aditya Prakash
JavaScript: Full Stack Developer
📍 Gurgaon, India
✉️ adityaprakash0904@gmail.com
🔗 GIT-HUB - "https://github.com/Adii0904"
🖇️ REPO-LINK - "https://github.com/Adii0904/Zippee---Star-Wars-Character-App/tree/main"

```
