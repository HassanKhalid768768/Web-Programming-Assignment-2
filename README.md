# 🌟 NovaPortfolio

NovaPortfolio is a dynamic ReactJS-based portfolio generator that allows users to create, customize, and display a personal portfolio by entering their details through an intuitive data entry form.

---

## ✨ Features

### 📝 Data Entry Page
- Input fields for:
  - Student's name, bio, and introductory details
  - Profile picture upload
  - Skills and interests
  - Project details (title, description, image, GitHub link)
  - Social media links
- Add multiple social media entries dynamically
- Submit/Generate button to build the portfolio with entered data

### 🧭 Navigation Bar
- Responsive navbar with section links: Home, About, Projects, Contact
- Hamburger menu for mobile view (toggleable using `useState`)

### 🎯 Hero Section
- Displays student's name and bio dynamically via props
- Call-to-action button (e.g., "View My Work")

### 👤 About Me Section
- Profile picture, skills list, and detailed biography
- All content passed dynamically via props

### 💼 Projects Section
- At least 3 project cards shown using a reusable `ProjectCard` component
- Props include title, description, image, GitHub link
- Draggable cards (using `react-beautiful-dnd`)
- Dynamic data fetching from external source using `useEffect`

### ✉️ Contact Section
- Contact form with fields: name, email, message
- Form state managed via `useState`
- Displays a success message after form submission using `useEffect`

### ⚙️ Footer
- Social media icons linking to LinkedIn, GitHub, Twitter
- Quick navigation links

---

## 🌙 Extra Features

- **Dark Mode Toggle**  
  Easily switch between light and dark themes using a button powered by `useState`.

- **Dynamic Project Fetching**  
  Project data fetched dynamically (e.g., GitHub or Google Drive) via `useEffect`.

- **Smooth Animations**  
  Interactive feedback and transitions with [Framer Motion](https://www.framer.com/motion/).

---

## 🎥 Demo

Explore NovaPortfolio in action with the following walkthrough:

[▶️ Watch the Demo](https://github.com/user-attachments/assets/a283108c-b7b0-40a3-bd11-409665a1792e)

---

## 🛠️ Technologies Used

- **ReactJS** (Frontend framework)
- **TailwindCSS / CSS / Bootstrap** (Styling)
- **JavaScript / JSX**
- **Framer Motion** (Animations)
- **react-beautiful-dnd** (Draggable cards)
- **REST API** (For dynamic data fetching)

---

## 🗂️ Project Structure

```bash
NovaPortfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── DataEntry.jsx
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
````

---

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HassanKhalid768768/Web-Programming-Assignment-2
   ```

2. Navigate to the project folder:

   ```bash
   cd NovaPortfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

---

## 👨‍🎓 Project Author

**Muhammad Hassan Khalid**
*Data Science Enthusiast | FAST-NUCES Student | Passionate Learner*

---

## 📄 License

© 2025 NovaPortfolio. All rights reserved. For educational use only.