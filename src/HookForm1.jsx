import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";
let renderCount = 0;

const HookForm1 = () => {
  renderCount++;
  const form = useForm();
  const { register, control, handleSubmit } = form; //Here All the data will contain inside the register variable and contor are take for devtool
  const onSubmit = (data) => {
    console.log(data);
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
          {...register("userName")}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Input User Email"
          id="email"
          className="border-2 mt-2"
          {...register("email")}
        />
        <br />
        <label htmlFor="channel">Channel</label>
        <input
          type="url"
          name="channel"
          placeholder="Input Channel URL"
          id="channel"
          className="border-2 mt-2"
          {...register("channel")}
        />
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
