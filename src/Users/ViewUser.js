import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    uname: "",
    email: "",
    phno: "",
    wname: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back
      </Link>
      <h1 className="display-4">User Id:{id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">User Name: {user.uname}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone Number: {user.phno}</li>
        <li className="list-group-item">Website Name: {user.wname}</li>
      </ul>
    </div>
  );
};

export default ViewUser;
