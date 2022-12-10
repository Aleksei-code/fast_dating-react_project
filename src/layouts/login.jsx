import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "", name: "" });
    const [errors, setErrors] = useState({});

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    useEffect(() => {
        validate();
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    const validate = () => {
       const errors = validator (data, validatorConfig)
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    return (
        <>
            <NavBar />
            <form action="" onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={data.name}
                    error={errors.name}
                />
                <TextField
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    error={errors.email}
                />
                <TextField
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={data.password}
                    error={errors.password}
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <h3>Login</h3>;
        </>
    );
};

export default Login;
