import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  console.log(props.currentUser);

  // useForm
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: props.currentUser,
  });

  // Save Edited Values
  setValue("name", props.currentUser.name);
  setValue("userName", props.currentUser.userName);

  // Handle OnSbmit()
  const onSubmit = (data, e) => {
    // data.id = null;
    // props.addUser(data);
    props.updateUser(props.currentUser.id, data);
    e.target.reset();
  };

  return (
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
      <button className="d-flex mt-5">Save Changes</button>
    </form>
  );
};

export { EditUserForm };
