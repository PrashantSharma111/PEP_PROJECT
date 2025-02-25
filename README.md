# Convo - Real-Time Chat Application

![GIF (2)](https://github.com/user-attachments/assets/a7afa244-2231-4694-803e-fb3415c0fc23)


## 🌟 Overview

Convo is a real-time chat application built using the MERN stack and **Socket.io**, designed to provide a seamless and interactive messaging experience. Users can sign up, join communities, engage in private chats, share media, and personalize their settings. The application also supports online status visibility and secure authentication.

---

## 🚀 Features

### ✅ Core Features

- **User Authentication** – Secure login and signup with JWT.
- **Community Join** – Users can join different chat communities.
- **One-to-One Chat** – Private messaging between users.
- **Online Status** – View who is currently online.
- **Settings Customization** – Modify preferences like theme and notifications.
- **Profile Management** – Upload profile images, view join date, and edit details.
- **Active Status** – See whether users are online or offline.
- **Logout** – Securely log out of the application.
- **Media Sharing** – Send images and videos via Cloudinary.
- **Toast Notifications** – Real-time alerts using **React Hot Toast**.

### 📌 Upcoming Features

- **AI Chat Assistant** – Chat with AI by typing `@ai` in the message bar.
- **Group Chat** – Create and join group conversations.

---

# 🛠️ Tech Stack

### Frontend

- **Framework:** React.js
- **State Management:** React Context API
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Package Manager:** npm

### Backend

- **Environment:** Node.js with Express.js
- **Authentication:** JSON Web Tokens (JWT)
- **Validation:** Express-validator
- **Security:** bcrypt.js (for password hashing)
- **Real-Time Communication:** Socket.io

### Database

- **Database:** MongoDB (via Mongoose ORM)

### Resource Storage

- **Cloud Storage:** Cloudinary

### Other Technologies Used

- **API Requests:** Fetch API
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

---

## 🛠️ Installation

### 1. Clone the Repository

```sh
git clone https://github.com/PrashantSharma111/PEP_PROJECT.git
cd convo
```

### 2. Install Dependencies

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the **backend** directory and add the following:

```env
MONGO_URI=<YOUR_MONGODB_CONNECTION_STRING>
JWT_SECRET=<YOUR_SECRET_KEY>
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
CLOUDINARY_API_KEY=<YOUR_CLOUDINARY_API_KEY>
CLOUDINARY_API_SECRET=<YOUR_CLOUDINARY_API_SECRET>
NODE_ENV=<YOUR_NODE_ENVIRONMENT_NAME>
PORT=<YOUR_PORT_NUMBER>
```

Create a `.env` file in the **frontend** directory and add the following:

```env
REACT_APP_HOST=<YOUR_BACKEND URL>
```

### 4. Start the Application

#### Start Backend Server

```sh
cd backend
npm run dev
```

#### Start Frontend Server

```sh
cd frontend
npm run dev
```

---

## 👥 Contributing

Pull requests are welcome! Feel free to open an issue for feature requests or bug reports.

---

## 🐜 License

This project is licensed under the MIT License, making it open-source and free for modification and distribution.
