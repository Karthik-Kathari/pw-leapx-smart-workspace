# Smart Workspace Dashboard

A modern, responsive workspace dashboard to manage **teams, projects, and tasks** in one place.

Built with a strong focus on  **clean UI, usability, and scalable frontend architecture** .

---

## 🚀 Features

### Core

* Teams overview with project & task statistics
* Project-wise task boards (Kanban style)
* Task status management (Todo / In Progress / Done)
* Real-time UI updates using React state
* Breadcrumb navigation for clear hierarchy

### UX & UI

* Fully responsive (desktop → mobile)
* Meaningful empty states
* Hover & focus states for accessibility
* Dark mode support
* Clean, consistent SaaS-style design

### Bonus Features (Implemented)

* 🌙 Dark Mode (persisted with `localStorage`)
* 🔍 Search & filter tasks in real time
* 💾 Local state persistence via context

---

## 🧱 Tech Stack

* **React** (Vite)
* **React Router**
* **Tailwind CSS**
* **Context API**
* **LocalStorage**

Frontend-only implementation using  **static JSON-like data** , designed to be backend-ready.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

<pre class="overflow-visible! px-0!" data-start="234" data-end="319"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git </span><span>clone</span><span> https://github.com/Karthik-Kathari/pw-leapx-smart-workspace.git
</span></span></code></div></div></pre>

### 2️⃣ Navigate into the project folder

<pre class="overflow-visible! px-0!" data-start="362" data-end="401"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> pw-leapx-smart-workspace
</span></span></code></div></div></pre>

### 3️⃣ Install dependencies

<pre class="overflow-visible! px-0!" data-start="432" data-end="455"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install
</span></span></code></div></div></pre>

### 4️⃣ Start the development server

<pre class="overflow-visible! px-0!" data-start="494" data-end="517"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run dev
</span></span></code></div></div></pre>

### 5️⃣ Open in browser

<pre class="overflow-visible! px-0!" data-start="543" data-end="576"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-text"><span><span>http://localhost:5173</span></span></code></div></div></pre>

---

## 🧠 Key Architectural Decisions

### 1. Context API for State

* Centralized workspace data (`teams → projects → tasks`)
* Easy to replace with API later

### 2. Frontend-only First

* Static data keeps complexity low
* Faster development & easier review
* Backend can be plugged in without much refactor

### 3. Layout Separation

* `AppLayout` handles sidebar & breadcrumbs
* Home page uses a clean, full-screen layout
* Improves maintainability

### 4. Tailwind Utility-First Styling

* Consistent spacing, colors, and typography
* Faster UI iteration
* Easy dark mode support

---

## ⚖️ Trade-offs Made

| Decision         | Reason                       |
| ---------------- | ---------------------------- |
| No backend       | Out of scope, frontend focus |
| Local state only | Faster UX, simpler logic     |
| No drag & drop   | Avoided heavy libraries      |
| Static data      | Predictable demo behavior    |

---

## 🔮 What I Would Improve With More Time

* Drag & drop task movement
* Backend API (CRUD operations)
* Authentication & role-based access
* Animations for task transitions
* Better mobile navigation (hamburger menu)
* Performance optimization for large datasets and more.

---

## 📱 Responsive Behavior

* Desktop: Sidebar + content layout
* Tablet: Reduced spacing, stacked grids
* Mobile:
  * Sidebar converts to top section
  * Cards stack vertically
  * Touch-friendly interactions

---

## 🧪 Error Handling

* Graceful empty states
* Error boundary for unexpected crashes
* Fallback UI when data is missing or crash

---

## 👤 Author

**Karthik Kathari**
**🔗 LinkedIn: [https://www.linkedin.com/in/karthikkathari/](https://www.linkedin.com/in/karthikkathari/)**
