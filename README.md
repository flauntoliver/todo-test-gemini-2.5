# React To-Do List App

This is a simple to-do list application built with React and Tailwind CSS.

## Features

- Add new tasks
- Mark tasks as complete
- Remove tasks
- Persists tasks in local storage

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server, run:

```bash
npm run dev
```

This will open the application in your default web browser at `http://localhost:5173` (or another port if 5173 is in use).

## Testing

This project does not currently include automated tests. To test the application, run it locally and interact with the UI to ensure all features are working as expected.

## Project Structure

- `public/`: Contains static assets.
- `src/`: Contains the application's source code.
  - `assets/`: Contains static assets like images and fonts (if any).
  - `components/`: Contains reusable React components.
    - `AddTodoForm.jsx`: Form for adding new to-do items.
    - `TodoItem.jsx`: Component for displaying a single to-do item.
    - `TodoList.jsx`: Component for displaying the list of to-do items.
  - `App.jsx`: The main application component.
  - `index.css`: Global styles and Tailwind CSS directives.
  - `main.jsx`: The entry point of the React application.
- `.gitignore`: Specifies intentionally untracked files that Git should ignore.
- `eslint.config.js`: ESLint configuration file.
- `index.html`: The main HTML file.
- `package-lock.json`: Records the exact versions of dependencies.
- `package.json`: Lists project dependencies and scripts.
- `postcss.config.js`: PostCSS configuration file (for Tailwind CSS).
- `README.md`: This file.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `vite.config.js`: Vite configuration file.

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Configuration can be found in `tailwind.config.js`.

## Extending the Application

This application is designed to be a starting point. Here are some ideas for extending it:

- Add filtering options (e.g., show all, active, completed tasks).
- Implement task editing.
- Add due dates to tasks.
- Integrate with a backend API to persist data.
- Add user authentication.
