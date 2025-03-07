# Project Setup Guide

Follow these steps to set up and run the project.

---

## 1. Create Project Folder

Start by creating a new project folder:

```bash
mkdir <project-folder>
cd <project-folder>
```

---

## 2. Set Up the Client

### 2.1. Create a Client Folder

Inside your project folder, create a `client` folder and initialize the frontend project with Vite:

```bash
mkdir client
cd client
npm create vite@latest
```

#### Configuration Options:
- **Project Name**: Choose a name for your project.
- **Framework**: Select `React`.
- **Language**: Select `JavaScript + SWC`.

After creating the project, navigate into the newly created project folder:

```bash
cd <project-name>
```

Then, install the necessary dependencies:

```bash
npm install
```

---

### 2.2. Running the Client

To start the development server and run the client-side application, use the following command:

```bash
npm run dev
```

---

### 2.3. Install Additional Dependencies

Inside the `client` folder, install the following packages:

```bash
npm install axios
npm install react-router-dom
npm install @mui/material @emotion/react @emotion/styled
npm install socket.io-client
```

---

### 2.4. Create Components Folder Inside `src` Folder

Create a `components` folder inside the `src` folder to organize your frontend components.

---

## 3. Set Up the Server

### 3.1. Create a Server Folder

Inside the `<project-folder>`, create a `server` folder where all your server-related code will reside.

### 3.2. Initialize Node Project

Inside the `server` folder, initialize a Node.js project by running the following command:

```bash
npm init -y
```

---

### 3.3. Install Dependencies

Install the required dependencies for your server:

```bash
npm install express
npm install mongoose
npm install dotenv
npm install cors
npm install socket.io
```

---

### 3.4. Set Up Gitignore and Environment Files

Create the necessary files for Git:

```bash
copy nul .gitignore
copy nul .env
```

---

### 3.5. Create Folders for Organization

Set up the following folders inside the `server` folder:

```bash
mkdir config controller models routes
```

---

### 3.6. Create the Server Entry File

Create a file named `server.js` inside the root of the `server` folder.

---

## 4. Running the Server

### 4.1. Install Development Dependency for Auto-Reloading (Nodemon)

To make it easier to run your server during development with automatic restarts on file changes, install `nodemon` as a development dependency:

```bash
npm install --save-dev nodemon
```

---

### 4.2. Run the Server with Nodemon

Run the server using `nodemon`:

```bash
npx nodemon server.js
```

Alternatively, if you want to install `nodemon` globally (for use across all projects):

```bash
npm install -g nodemon
nodemon server.js
```

---

## 5. Folder Structure Overview

```
<project-folder>/
|-- client/               # Frontend project folder
    |-- src/              # Frontend source code
        |-- components/   # Frontend components
        |-- App.jsx       # Main React app file
    |-- public/           # Public assets
    |-- index.html        # HTML entry point
|-- server/               # Backend project folder
    |-- config/           # Configuration files
    |-- controller/       # Server-side controllers
    |-- models/           # Mongoose models
    |-- routes/           # API routes
    |-- server.js         # Main server entry point
    |-- .gitignore        # Git ignore file
    |-- .env              # Environment variables
```

---

## 6. Notes

- **.env File**: Make sure to configure the `.env` file with the necessary environment variables (e.g., database URLs, API keys, etc.).
- **Security**: Ensure sensitive data in the `.env` file is kept secure and not shared publicly. Include `.env` and `node_modules` in `.gitignore` to avoid pushing them to the repository.

---


