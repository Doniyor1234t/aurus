import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type FormValues = {
  name: string;
  phone_number?: string;
};

export const useMain = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const {
    setValue,
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: async (data: FieldValues) => {
      const errors: Record<string, any> = {};

      if (!data.name) {
        errors.name = { type: "required", message: "Ism talab qilinadi" };
      }

      if (!data.phone_number) {
        errors.phone_number = { type: "required", message: "Telefon raqami talab qilinadi" };
      }

      return {
        values: Object.keys(errors).length ? {} : data,
        errors,
      };
    }
  });

  const handleClose = () => {
    setIsOpen(false);
    reset();
  }

  const postUserData = async (data: any) => {
    try {
      // set header params
      const config = {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
        }
      };
      const res = await axios.post(
        "http://34.46.237.11:8080/v1/amocrm/create-lead", 
        data, 
        config
      );
      if (res) {
        handleClose()
      }
    } catch (error) {
      console.error("Error posting user data:", error);
    }
  };

  const onSubmit = (data: any) => {
    postUserData({
      data: {
        ...data
      }
    });
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
    onSubmit,
    errors
  };
};
