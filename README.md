# PW LeapX – Smart Workspace Dashboard

A professional, frontend-only Workspace Management tool built with **React** and  **Tailwind CSS** . This dashboard allows users to navigate through high-level team metrics down to specific project task boards with a clean, intuitive interface.

The primary goal of this project is to demonstrate **architectural clarity, clean state management, and deliberate UI/UX decisions.**

---

## 🛠 Tech Stack

* **React (Vite)** – High-performance development and modern build tooling.
* **React Router** – Clean client-side navigation between Teams and Task Boards.
* **Context API** – Global state management for workspace data and theme settings.
* **Tailwind CSS** – Utility-first styling for a responsive, modern design.
* **localStorage** – Local data persistence to simulate a backend environment.

---

## 🚀 Setup Instructions

1. **Clone the repository**
2. **Install dependencies**
   **Bash**

   ```
   npm install
   ```
3. **Start the development server**
   **Bash**

   ```
   npm run dev
   ```
4. **View the application**
   Open `http://localhost:5173` in your browser.

---

## 📂 Application Overview

* **Dashboard Home:** A clean entry point into the workspace.
* **Teams Overview:** High-level summary cards showing project counts and active task loads.
* **Team Details:** Filterable view of projects (All / Active / Completed).
* **Task Board:** A kanban-style board categorized by  *Todo* ,  *In-Progress* , and  *Done* .
* **Smart Navigation:** Includes dynamic breadcrumbs and a left-aligned "Back" button for natural user flow.
* **Dark Mode:** Full system-aware dark mode support with persistence.

---

## 🎯 Development Priorities

### 1. Architectural Clarity

The project follows a strict folder structure:

* `common/`: Reusable UI components (Breadcrumbs, Buttons).
* `layout/`: Structural wrappers like `AppLayout`.
* `pages/`: Feature-specific views (TaskBoard, TeamDetails).
* `context/`: Centralized logic for data and themes.

### 2. Strategic UI/UX

* **Navigation Placement:** Moved the "Back" action to the top-left to follow standard eye-tracking patterns (F-pattern), making navigation faster for the user.
* **Data Density:** Balanced information on team cards so users can see "Active Tasks" without clicking deep into the app.

### 3. Maintainability

Used modular components and a predictable data flow (JSON-based workspace data) to ensure the app is easy to scale or connect to an API later.

---

## ⚖️ Trade-offs & Decisions

* **Frontend-Only:** Chose `localStorage` and static data over a backend to focus entirely on UI architecture and state handling.
* **Direct Navigation:** Focused on clear, clickable paths rather than complex drag-and-drop to ensure the core logic was 100% bug-free first.
* **No Auth:** Skipped login/roles to avoid over-engineering, focusing instead on the dashboard experience.

---

## 🔮 Future Improvements

* **Real-time Persistence:** Connect to a Node.js/Express backend.
* **UI Fluidity:** Add subtle Micro-interactions (hover effects and transitions) to make the board feel more "live."
* **Global Search:** Implement a command-palette style search to find projects or tasks instantly.
* **Accessibility (ARIA):** Improve accessibility.
