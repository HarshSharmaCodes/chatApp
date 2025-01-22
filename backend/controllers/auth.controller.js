import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords Don't Match" });
        }
        const user = await User.findone({ username });
        if (user) {
            return res.status(400).json({ error: "Username Already Exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10); 

        const boyprofilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlprofilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyprofilePic : girlprofilePic,
        });

        await newUser.save();
        res.status(201).json({
            id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });

    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}

export const login = (req, res) => {
    console.log("Login user");
}

export const logout = (req, res) => {
    console.log("Logout user");
}