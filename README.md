# TaskFlow

A simple, clean To-Do List web app built for **personal use**. Open it in any browser and manage your daily tasks right away. No installation, no sign up and no extra application needed.

**Live demo:** https://hakkim94.github.io/TaskFlow/

## Why TaskFlow

I built TaskFlow as a small personal tool to keep track of my tasks without opening a heavy productivity app. It does a few things and does them well:

- Open the link and start using it immediately
- Works on mobile, tablet and desktop
- Simple, distraction free interface

## Features

- Add new tasks with the input box
- Delete tasks you no longer need
- Move tasks up or down to set your own priority order
- Modern dark glass design with smooth hover effects and animations
- Fully responsive layout

## Tech Stack

- React
- Vite
- CSS (custom styling, no UI libraries)
- GitHub Pages for hosting

## Getting Started

Make sure Node.js is installed, then run:

```bash
git clone https://github.com/Hakkim94/TaskFlow.git
cd TaskFlow
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173/TaskFlow/`).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in the `dist` folder |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and publish to GitHub Pages |

## Deployment

The app is deployed to GitHub Pages from the `gh-pages` branch.

1. Set the base path in `vite.config.js`:

   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/TaskFlow/',
   })
   ```

2. Deploy:

   ```bash
   npm run deploy
   ```

3. In the repository, go to **Settings, then Pages**, and set the source to **Deploy from a branch** with branch `gh-pages` and folder `/ (root)`.

## Project Structure

```
TaskFlow/
├── public/            Static files
├── src/
│   ├── assets/        Images and icons
│   ├── App.jsx        App entry component
│   ├── ToDoList.jsx   To-Do List component
│   ├── ToDoList.css   To-Do List styling
│   ├── App.css        App styling
│   ├── index.css      Global styles
│   └── main.jsx       React entry point
├── index.html
├── vite.config.js
└── package.json
```

## Author

**Hakkim Mubarak**

- GitHub: https://github.com/Hakkim94
- Portfolio: https://hakkim94.github.io/Portfolio

## License

This project is for personal use and learning.
