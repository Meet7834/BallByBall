const express = require('express');
const User = require('../models/UserModel');

const router = express.Router();

// Route to create a new user
router.post('/users', async (req, res) => {
    try {
        const userData = req.body;
        const newUser = new User(userData);
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ message: 'Failed to create user', error: error.message });
    }
});

// Route to get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error: error.message });
    }
});

// Route to get a specific user by name
router.get('/users/:name', async (req, res) => {
    try {
        const user = await User.findOne(req.params.name);
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user', error: error.message });
    }
});

// Route to update a user's info
router.put('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUserData = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
        if(!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user', error: error.message });
    }
});

// Route to delete a user's info
router.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user', error: error.message });
    }
});

module.exports = router;