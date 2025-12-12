# Factorise Technologies Frontend Assessment — Task Manager (React Native / Expo)

This app is a simple task manager built with **React Native**, **Expo**, and **TypeScript**.  
It includes a modern UI, global state with React Context, and full unit test coverage using Jest + Testing Library.

---

## 🚀 Features

### ✔ Add tasks  
### ✔ View tasks  
### ✔ Global state using React Context  
### ✔ Modern UI   
### ✔ Unit tests for:
- TaskForm
- TaskList
- TaskContext

---

## 📦 Installation

```sh
npm install
```

## ▶ Run the app

```sh
npm start
```

## 🧪 Run unit tests

```sh
npm test
```

---

## 📁 Folder Structure

```
/src
  /components
    TaskForm.tsx
    TaskItem.tsx
    TaskList.tsx

  /context
    TaskContext.tsx

  /screens
    HomeScreen.tsx

  /styles
    colors.ts
    spacing.ts
    typography.ts
    shadows.ts

  /types
    tasks.ts

/tests
  TaskForm.test.js
  TaskList.test.js
  TaskContext.test.js
```

---

## 🧪 Test Coverage

### TaskForm
- Validates title input
- Enables/disables submit button
- Calls onAddTask correctly

### TaskList
- Renders correct number of tasks
- Handles empty array

### TaskContext
- Stores tasks globally
- addTask appends new items

---

## 📌 Questions & Answers

### **1. What’s your approach to managing consistent spacing, font sizes, and colors in a large project?**
I follow a design-system approach by centralizing all UI values inside `/styles`.  
I define spacing, typography, color palette, and shadows in separate files (`spacing.ts`, `colors.ts`, etc.) and reuse them everywhere.  
This keeps the app visually consistent and makes future UI changes extremely easy—changing one value updates the entire project.

---

### **2. How did you make your form visually clear and user-friendly on small screens?**
I used:

- large rounded input fields  
- generous spacing (`spacing.lg`) to avoid crowding  
- soft shadows to create depth and hierarchy  
- clear, readable error message styling  
- a big full-width button that’s easy to press  

Because the layout uses flexbox, everything scales naturally across mobile screen sizes.

---

### **3. What small styling detail did you add that improves the experience?**
The soft shadow cards are a subtle but important detail.  
They make the inputs feel touchable, give depth, and bring the UI closer to modern native mobile apps.  
I also used a consistent placeholder color so every input field feels cohesive.

---

### **4. How would you modify the design if the task form was part of a larger dashboard?**
I would:

- move the form into a collapsible panel or bottom sheet  
- reduce its vertical space using compact spacing  
- relocate sorting and filtering into a fixed top bar  
- keep the task list always visible to preserve context  

This ensures the dashboard remains clean and uncluttered while keeping the task form easily accessible.
