import React from "react";
import { useForm } from "react-hook-form";

// Styles
import "./AddUserForm.css";

const AddUserForm = (props) => {
  // useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle OnSbmit()
  const onSubmit = (data, e) => {
    data.id = null;
    // console.log(data);
    props.addUser(data);
    e.target.reset();
  };

  return (
    <>
      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
        <label className="bg-white">Name</label>
        <input
          type="text"
          name="name"
          {...register("name", {
            required: true,
            maxLength: 30,
            message: "Required",
          })}
        />
        {errors.name && (
          <span className="alert alert-danger"> This field is required</span>
        )}

        <label className="bg-white">Username</label>
        <input
          type="text"
          name="userName"
          {...register("userName", {
            required: true,
            maxLength: 30,
            message: "Required",
          })}
        />
        {errors.userName && (
          <span className="alert alert-danger"> This field is required</span>
        )}
        <button className="d-flex mt-5">Add new user</button>
      </form>
    </>
  );
};

export { AddUserForm };
