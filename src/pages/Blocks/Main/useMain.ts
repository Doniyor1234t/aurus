import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useMain = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const {
    setValue,
    watch,
    register,
    handleSubmit
  } = useForm();
// axios post request
  const postUserData = async (data: any) => {
    try {
      // set header params
      const config = {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
        }
      };
      const response = await axios.post(
        "http://34.71.211.25:8080/v1/amocrm/create-lead", 
        data, 
        config
      );
    } catch (error) {
      console.error("Error posting user data:", error);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  }

  const onSubmit = (data: any) => {
    postUserData(data);
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(event)
  //   // Handle form submission
  // };

  return {
    navigate,
    setValue,
    watch,
    isOpen,
    setIsOpen,
    handleClose,
    handleSubmit,
    register,
    onSubmit
  };
};
