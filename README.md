# 🌟 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a modern friendship management web app that helps users stay connected with friends by tracking interactions, reminding follow-ups, and visualizing engagement through analytics.

It allows users to log calls, texts, and video interactions, and provides a timeline and stats dashboard to understand relationship activity over time.

---

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Project-2ea44f?style=for-the-badge&logo=vercel&logoColor=white)](https://keenkeeper-two.vercel.app)

---

## 📌 Features

### 🏠 Home Page

- Beautiful responsive landing page
- Friend cards displayed in a clean 4-column grid (responsive)
- Each friend shows:
  - Profile picture
  - Name
  - Days since last contact
  - Tags (e.g., work, college, close friend)
  - Status indicator (overdue / almost due / on-track)
- Click a friend card to view full details

---

### 👤 Friend Details Page

- Two-column responsive layout
- Left section:
  - Profile information (photo, name, bio, email, tags)
  - Status badge
  - Action buttons (Snooze, Archive, Delete)
- Right section:
  - Stats cards (Days Since Contact, Goal, Next Due Date)
  - Relationship goal tracking
  - Quick check-in buttons (Call, Text, Video)

---

### ⚡ Interaction System

- Clicking Call / Text / Video:
  - Adds a new timeline entry
  - Automatically records timestamp
  - Generates meaningful titles like:
    - "Call with John Doe"
    - "Text with Sarah"
  - Shows toast notifications

---

### 📜 Timeline Page

- Displays all interaction history
- Includes:
  - Date and time formatting
  - Interaction type icons
  - Friend name + interaction type
- Supports:
  - Filtering by Call / Text / Video
  - Searching by friend name
  - Sorting by newest / oldest

---

### 📊 Stats Page (Analytics)

- Friendship Analytics dashboard
- Pie chart visualization using **Recharts**
- Shows distribution of:
  - Calls
  - Texts
  - Video calls

---

### 📱 Fully Responsive UI

- Optimized for:
  - Mobile 📱
  - Tablet 📲
  - Desktop 💻

- Clean grid & flex layouts using Tailwind CSS

---

## 🛠️ Tech Stack

| Category           | Technologies                          |
| ------------------ | ------------------------------------- |
| Frontend           | React.js, React Router                |
| State Management   | Context API (Global State Management) |
| Styling            | Tailwind CSS, DaisyUI                 |
| Data Visualization | Recharts                              |
| Icons              | React Icons                           |
| Deployment         | Vercel                                |

---
