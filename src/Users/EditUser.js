import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    uname: "",
    email: "",
    phno: "",
    wname: "",
  });

  const { name, uname, email, phno, wname } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUsers = async () => {
    const result = await Axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container shadow w-50 p-4 mt-3">
      <h1 className="text-center">Edit User</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your username"
            name="uname"
            value={uname}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your phone number"
            name="phno"
            value={phno}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your website name"
            name="wname"
            value={wname}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button className="btn btn-primary btn-block">Edit User</button>
      </form>
    </div>
  );
};

export default EditUser;
