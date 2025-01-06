import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get("https://backenddemo-1-wrok.onrender.com/api/user/fetch")
            .then(response => {
                setUser(response.data.users);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const deleteUser = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this user?");
        if (isConfirmed) {
            axios.delete(`https://backenddemo-1-wrok.onrender.com/api/user/delete/${id}`)
                .then(() => {
                    alert("User deleted successfully!");
                    fetchUsers();
                })
                .catch(err => {
                    console.log(err);
                    alert("Failed to delete the user. Please try again.");
                });
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">User's Data</h1>
            <div className="d-flex justify-content-start mb-3">
                <Link to="/create" className="btn btn-primary">Create User</Link>
            </div>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/update/${user._id}`} className="btn btn-warning btn-sm me-2">
                                    Update
                                </Link>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;
