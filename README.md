
# Project Setup Guide

Follow these steps to set up and run the project.

## 1. Create Project Folder
Start by creating a new project folder.

```bash
mkdir <project-folder>
cd <project-folder>
```

## 2. Set Up the Client

Inside your project folder, create a `client` folder and initialize the frontend project with Vite.

```bash
mkdir client
cd client
npm create vite@latest
```

### Configuration Options:
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

## 3. Running the Client

To start the development server and run the client-side application, use the following command:

```bash
npm run dev
```

## 4. Install Additional Dependencies

Inside the `client` folder, install the following packages:

```bash
npm install axios
npm install react-router-dom
npm install @mui/material @emotion/react @emotion/styled
npm install socket.io-client
```

This completes the setup for the client-side. You can now start building and testing your application.
