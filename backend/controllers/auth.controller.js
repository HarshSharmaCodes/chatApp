import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender} = req.body; 

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords Don't Match" })
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({ error: "Username Already Exists" })
        }

        //HashPasswordhere 
        const pw = await bcrypt.genSalt(10);
        const HashPassword = await bcrypt.hash(password,pw);

        const boyprofilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlprofilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: HashPassword,
            gender,
            profilePic: gender === "male" ? boyprofilePic : girlprofilePic
        })

        await newUser.save();
        
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        })

    } catch (error) {
        console.log("Error in signUp Controller",error.message)
        res.status(500).json({ error: "Server Error" });
    }
};

export const login = (req, res) => {
    console.log("Login user");
}

export const logout = (req, res) => {
    console.log("Logout user");
}