import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Updateuser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', age: '', email: '' });

    useEffect(() => {
        axios
            .get(`https://backenddemo-1-wrok.onrender.com/api/user/fetch/${id}`)
            .then((response) => {
                setUser(response.data.user);
            })
            .catch((err) => {
                console.error("Error fetching user:", err);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`https://backenddemo-1-wrok.onrender.com/api/user/update/${id}`, user)
            .then(() => {
                alert('User updated successfully!');
                navigate('/');
            })
            .catch((err) => {
                console.error("Error updating user:", err);
                alert('Failed to update user. Please try again.');
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Update User</h1>
            <div className="card mx-auto" style={{ maxWidth: '500px' }}>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="age"
                                name="age"
                                value={user.age}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Updateuser;
