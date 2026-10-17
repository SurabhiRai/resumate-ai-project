
# ResuMate AI

**An AI-assisted resume builder for creating professional, customizable resumes.**

ResuMate AI is a full-stack web application customized to help users create, edit, preview, and download professional resumes using modern templates and AI-assisted writing tools.

## Features

- **Resume Creation:** Create and edit resumes with a structured form.
- **Resume Templates:** Choose from available resume layouts.
- **Live Preview:** Preview resume changes while editing.
- **Customization:** Personalize resume templates with accent colors.
- **PDF Export:** Print or save a completed resume as a PDF.
- **AI Writing Assistance:** Generate enhanced professional summaries and job descriptions using the configured AI service.
- **Resume Import:** Import an existing PDF resume for text extraction and AI-assisted data extraction. This feature is currently being tested.
- **User Accounts:** Registration, login, and resume management are part of the application.

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT authentication

### AI and Integrations
- OpenAI-compatible chat completions API
- PDF text extraction
- ImageKit integration for image handling

The actual AI provider depends on the backend configuration and environment variables.

## Project Structure

```text
resumate-ai-project/
├── client/             # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── app/
│   │   ├── assets/
│   │   └── configs/
│   └── package.json
├── server/             # Express backend
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── server.js
├── README.md
└── .gitignore
```

## Local Setup

### Requirements
- Node.js
- MongoDB database
- Required AI and image-service credentials for the integrations you enable

### 1. Install backend dependencies

```bash
cd server
npm install
```

### 2. Install frontend dependencies

```bash
cd ../client
npm install
```

### 3. Configure environment variables

Create a `server/.env` file using the project's environment example.

Configure the required database connection, JWT secret, AI credentials, and ImageKit credentials as applicable.

Never commit actual API keys, passwords, or environment files to GitHub.

### 4. Start the backend

From the `server` directory:

```bash
npm run server
```

### 5. Start the frontend

In a separate terminal:

```bash
cd client
npm run dev
```

The frontend normally runs at `http://localhost:5173` and the backend at `http://localhost:3000`.

## Deployment

The frontend and backend require separate deployment configurations.

- **Frontend:** Deploy the `client` directory using a React/Vite-compatible hosting service.
- **Backend:** Deploy the `server` directory using a Node.js-compatible hosting service.
- **Database:** Configure a production MongoDB connection.
- **Environment variables:** Add production credentials through the hosting provider's environment settings.

Live deployment links will be added after deployment and testing.

## Developer

**Customized and maintained by Surabhi Rai**

GitHub: https://github.com/SurabhiRai

## Acknowledgements

This project is based on the open-source resume-builder project by Abhinav Suri:

https://github.com/Abhinavsuri90/resume-builder

The original project's license and applicable attribution notices are retained. This version includes customizations to the branding, interface, and project presentation.

---

**ResuMate AI — Build your next career move.**
