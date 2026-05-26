# CloudSnap

A cloud-based image upload and sharing platform built using the MERN stack and Cloudinary. Users can upload, store, and view images securely through a responsive web interface.

---

# Features

- Upload images from local device
- Store images securely on Cloudinary
- Save image metadata in MongoDB Atlas
- Display uploaded images dynamically
- REST API integration using Express.js
- Responsive frontend built with React

---

# Tech Stack

## Frontend
- React.js
- Axios

## Backend
- Node.js
- Express.js
- Multer

## Database
- MongoDB Atlas

## Cloud Storage
- Cloudinary

---

# Project Architecture

```text
Frontend (React)
       ↓
Backend API (Express)
       ↓
Cloudinary (Image Storage)
       ↓
MongoDB Atlas (Stores Image URLs)
```

---

# Folder Structure

```text
CloudSnap/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone <your-repository-url>
```

---

# 2. Backend Setup

## 2.1 Navigate to backend

```bash
cd backend
```

## 2.2 Install dependencies

```bash
npm install
```

## 2.3 Create `.env`

```env
MONGO_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

## 2.4 Run backend server

```bash
npm run dev
```

---

# 3. Frontend Setup

## 3.1 Navigate to frontend

```bash
cd frontend
```

## 3.2 Install dependencies

```bash
npm install
```

## 3.3 Start frontend

```bash
npm run dev
```

---

# API Endpoints

## Upload Image

```http
POST /api/images/upload
```

## Get All Images

```http
GET /api/images
```

---

# How It Works

1. User selects an image from frontend
2. React sends image to backend using Axios
3. Multer processes uploaded file
4. Backend uploads image to Cloudinary
5. Cloudinary returns image URL
6. MongoDB stores image URL
7. Frontend fetches and displays uploaded images

---

# Screenshots

## Home Page

![Home Page](https://github.com/user-attachments/assets/85de3c58-82e4-4a33-817c-0914518cfa0d)

## Upload Section

![Upload Section](https://github.com/user-attachments/assets/11bb5bd9-0768-419d-988d-a69c5c2edef1)

## Uploaded Images

![Uploaded Images](https://github.com/user-attachments/assets/1290a5e2-6d09-4a3f-9ca5-2d354980d7c5)

---

# Future Improvements

- User authentication
- Image deletion
- Drag & drop upload
- Multiple image upload
- Private galleries
- Search functionality

---

# Learning Outcomes

This project helped in understanding:

- MERN stack integration
- REST APIs
- File uploads using Multer
- Cloud storage concepts
- MongoDB Atlas integration
- React hooks (`useState`, `useEffect`)
- Axios for API communication

---

# Author

**Hansi Gupta**

---

# License

This project is created for educational and learning purposes.
