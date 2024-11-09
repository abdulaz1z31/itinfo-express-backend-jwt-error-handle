import { User } from "../database/models/index.model.js";

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered", user: newUser });
    } catch (err) {
        next(err);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        if (user.password !== password) {
            return res.status(401).json({ message: "Passwor or email is not valid" });
        }
        const payload = {
            id:user._id,
            name: user.name,
            email:user.email
        }
        const token = createTokens(payload)
       

        res.status(200).json({ message: "User logged in", token });
    } catch (err) {
        next(err);
    }
};


export const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "User created", user: newUser });
    } catch (err) {
        next(err);
    }
};



export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const updateUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated", user: updatedUser });
    } catch (err) {
        next(err);
    }
};

export const deleteUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted", user: deletedUser });
    } catch (err) {
        next(err);
    }
};
