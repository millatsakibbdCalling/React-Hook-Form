import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";
let renderCount = 0;

/*

  What is covered

  take value and submit value
  validation
  Custom validation
  

*/

/* There are two type of validation in react Hook form 
1. Require Validation
2. Corner Case validation Like it is an Email or not
*/

const HookForm1 = () => {
  renderCount++;
  const form = useForm();
  const { register, control, handleSubmit, formState } = form; //Here All the data will contain inside the register variable and contor are take for devtool
  const { errors } = formState; // Here contains all error of our application form
  const onSubmit = (data) => {
    console.log(data); //Form data are consoled
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Submit the Form : Render {renderCount} times</h2>
        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          name="userName"
          placeholder="Input User name"
          id="userName"
          className="border-2 mt-2"
          {...register("userName", { required: "Username is required" })}
        />
        <p>{errors?.userName?.message}</p>
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Input User Email"
          id="email"
          className="border-2 mt-2"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format!",
            },

            // Multiple Custom validation in single validation

            validate: {
              notAdmit: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email address!"
                );
              },
              notBlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("baddomain.com") ||
                  "This is a bad domain!"
                );
              },
            },
          })}
        />
        <p>{errors?.email?.message}</p>
        <br />
        <label htmlFor="channel">Channel</label>
        <input
          type="url"
          name="channel"
          placeholder="Input Channel URL"
          id="channel"
          className="border-2 mt-2"
          //single Custom validation
          {...register("channel", {
            validate: (fieldValue) => {
              return (
                fieldValue !== "https://www.google.com" ||
                "This is not a youtube channel!"
              );
            },
          })}
        />
        <p>{errors.channel?.message}</p>
        <input
          type="submit"
          className="bg-red-500 text-white px-10 py-4 text-xl font-bold rounded-full"
          value="Submit"
        ></input>
      </form>
      <DevTool control={control}></DevTool>
    </div>
  );
};

export default HookForm1;
