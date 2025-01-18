import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { themeAtom } from "../../atoms/theme/store";

const LoginForm = () => {
  const navigate = useNavigate();
  const theme = useAtomValue(themeAtom);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "") {
      toast.error("Enter email to continue.", {
        style: {
          background: theme === "dark" ? "#212121" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
        },
      });
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      toast.error("Please enter a valid email address.", {
        style: {
          background: theme === "dark" ? "#212121" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
        },
      });
    }

    if (formData.password === "") {
      toast.error("Enter password to continue.", {
        style: {
          background: theme === "dark" ? "#212121" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
        },
      });
    } else if (formData.password.length < 8) {
      toast.error("Password must contain at least 8 characters.", {
        style: {
          background: theme === "dark" ? "#212121" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
        },
      });
    } else {
      toast.success("Successfully Logged in!", {
        style: {
          background: theme === "dark" ? "#212121" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
        },
      });
      setTimeout(() => {
        navigate("/tableView");
      }, 2000);
    }
  };

  return (
    <div className="text-black dark:bg-[#191919] bg-[#e9e5e5] dark:text-white rounded-lg flex flex-col justify-center items-center lg:w-1/2 sm:max-w-[400px]  gap-[35px] border-[1px] py-[30px] px-[30px] border-[black] dark:border-[#787878]">
      <Toaster />

      <h1 className="text-[30px] w-full text-center font-[700] underline">
        Login to your account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center items-center gap-[20px]">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="bg-[#ffffff] dark:bg-[#323232] border-[1px] border-black px-[20px] py-[10px] rounded-md w-full dark:border-[#b6b6b6]"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          className="border-[1px] dark:bg-[#323232] border-[black] dark:border-[#b6b6b6] px-[20px] py-[10px] rounded-md w-full bg-[#ffffff]"
        />

        <button
          type="submit"
          className="w-full bg-[black] text-[white] dark:bg-[white] dark:text-black text-[17px] font-[500] transform transition duration-300 ease-in-out hover:scale-105 rounded-md px-[20px] py-[10px]">
          Continue
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
