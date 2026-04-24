# Secure Login System

This project is a simple full-stack web application that implements a secure login system using sessions. It demonstrates basic authentication concepts such as password hashing, session management, and protected routes.

---

## Features

* User registration and login
* Password hashing using bcrypt
* Session-based authentication
* Protected dashboard (accessible only after login)
* Logout functionality
* MongoDB session storage using connect-mongo

---

## Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express.js
* Database: MongoDB (Mongoose)

---

## Project Structure

```
secure-login-system/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   └── middleware/
│       └── authMiddleware.js
│
├── frontend/
│   ├── index.html
│   └── dashboard.html
│
└── README.md
```

---

## Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/your-username/secure-login-system.git
cd secure-login-system
```

---

### 2. Install dependencies

```
cd backend
npm install
```

---

### 3. Start MongoDB

Make sure MongoDB is running locally:

```
mongodb://127.0.0.1:27017/secureLoginDB
```

---

### 4. Run the server

```
node server.js
```

---

### 5. Open the frontend

Use Live Server or any static server:

```
http://localhost:5500/frontend/index.html
```

---

## How It Works

* When a user registers, the password is hashed using bcrypt before storing it in the database.
* During login, the password is verified and a session is created.
* The session ID is stored in MongoDB and sent to the browser as a cookie.
* Protected routes check for a valid session before allowing access.
* Logging out destroys the session.

---

## Notes

* Make sure the frontend and backend are running on matching hosts (either localhost or 127.0.0.1) to avoid session issues.
* This project is intended for learning purposes and can be extended further.

---

## Future Improvements

* Add JWT-based authentication
* Implement two-factor authentication (2FA)
* Add rate limiting to prevent brute-force attacks
* Improve UI using a frontend framework

---

## Author

Dheeraj Reddy
