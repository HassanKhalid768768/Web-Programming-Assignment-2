# 🌟 NovaPortfolio

NovaPortfolio is a dynamic ReactJS-based portfolio generator that allows users to create, customize, and display a personal portfolio by entering their details through an intuitive data entry form.

> **⚠️ Academic Integrity Notice:**  
> Any form of plagiarism, sharing of code, or use of AI-generated code is strictly prohibited as per assignment guidelines. Ensure all work is original and properly documented.

---

## 📌 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Submission Guidelines](#submission-guidelines)
- [Contact](#contact)

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

### 📤 Data Upload  
[▶️ Watch the Demo](https://github.com/user-attachments/assets/fef3384c-d2af-448d-a9d7-82dfd5f893b0)

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
   git clone https://github.com/yourusername/NovaPortfolio.git
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

## 📤 Submission Guidelines

* Submit a `.zip` folder named `21L-XXXX.zip`.
* Upload your GitHub repository and share the link.
* Include any used API keys in code comments.
* Ensure proper code commenting and structure.

---

## 👨‍🎓 Project Author

**Muhammad Hassan Khalid**
*Data Science Enthusiast | FAST-NUCES Student | Passionate Learner*

Stay connected:

* LinkedIn: [Your Link](#)
* GitHub: [Your Profile](#)
* Twitter: [Your Handle](#)

---

## 📄 License

© 2025 NovaPortfolio. All rights reserved. For educational use only.

```

---

You can now paste this content into a `README.md` file in your GitHub repo or local project folder. If you'd like a downloadable `.md` file, let me know — I can generate and share it as a file.
```
