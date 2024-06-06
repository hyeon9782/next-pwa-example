"use client";
import { ChangeEvent, FormEvent, useState } from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

const LoginForm = () => {
  const [loginUser, setLoginUser] = useState({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser((prevLoginUser) => ({
      ...prevLoginUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(loginUser);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        placeholder="Email"
        value={loginUser.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={loginUser.password}
        onChange={handleChange}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
