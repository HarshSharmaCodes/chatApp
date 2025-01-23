import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generatetoken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords Don't Match" })
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username Already Exists" })
        }

        //HashPasswordhere 
        const pw = await bcrypt.genSalt(10);
        const HashPassword = await bcrypt.hash(password, pw);

        const boyprofilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlprofilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: HashPassword,
            gender,
            profilePic: gender === "male" ? boyprofilePic : girlprofilePic
        })

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            })
        }

    } catch (error) {
        console.log("Error in signUp Controller", error.message)
        res.status(500).json({ error: "Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Username or password" });
        }

        generateTokenAndSetCookie(User._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        })
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out Succesfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
}