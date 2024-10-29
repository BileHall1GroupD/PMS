import User from '../model/User.js'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const JWT_SECRET = 'your_jwt_secret_key_here';


export const registerUser = async (req, res) => {
    try {
        const { name, email, user_name, phone, password } = req.body;

        
        const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email or phone.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            user_name,
            phone,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Login a user
export const loginUser = async (req, res) => {
    try {
        const { phone, password } = req.body;

        // Find the user by phone
        const user = await User.findOne({ phone });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Create a JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        // Send response with token
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
