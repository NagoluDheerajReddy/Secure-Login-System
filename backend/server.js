const express = require("express");
const session = require("express-session");
const cors = require("cors");
const MongoStore = require("connect-mongo"); // ✅ direct import

require("./db");

const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");
const User = require("./models/User");

const app = express();

// ✅ Middleware
app.use(express.json());

// 🔥 CORS (SAFE + FLEXIBLE)
app.use(cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
    credentials: true
}));

// 🔥 SESSION (FINAL WORKING VERSION)
app.use(session({
    name: "session-id",
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: "mongodb://127.0.0.1:27017/secureLoginDB"
    }),
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 // 1 hour
    }
}));

// 🔥 ROUTES
app.use("/api/auth", authRoutes);

// 🔐 Protected Dashboard
app.get("/api/dashboard", authMiddleware, async (req, res) => {
    try {
        console.log("SESSION:", req.session);

        if (!req.session.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const user = await User.findById(req.session.userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            message: "Authorized",
            user
        });

    } catch (err) {
        console.error("ERROR:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Debug route
app.get("/", (req, res) => {
    res.send("Server running...");
});

// ✅ Start server
app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000");
});