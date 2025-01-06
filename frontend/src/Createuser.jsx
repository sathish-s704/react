import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Createuser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            age: parseInt(age),
            email: email
        };

        axios.post('https://backenddemo-1-wrok.onrender.com/api/user/create', newUser)
            .then((response) => {
                console.log('User Created:', response.data);
                alert('User created successfully!');
                navigate('/');
            })
            .catch((err) => {
                console.error('Error creating user:', err);
                alert('Failed to create user. Please try again.');
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Create New User</h1>
            <div className="card mx-auto" style={{ maxWidth: '500px' }}>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Create User</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Createuser;
