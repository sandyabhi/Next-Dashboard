import React, { useState } from "react";
import Input from "../Input";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

const AddUserModal = ({ setVisible, setUser, user }) => {
  const [step, setStep] = useState(0);

  const handleSubmit = () => {
    event.preventDefault();
    console.log("--==-=");
    // Submit the form data to your backend server or store it in your database
    console.log(user);

    setVisible(false);
  };
  return (
    <div className="bg-opacity-60 fixed top-0 left-0 right-0 mx-auto flex justify-center items-center z-50 w-screen h-screen bg-black">
      <div className="bg-sky-50 bg-opacity-100 relative shadow-md rounded-md w-96 text-black p-4">
        {/* Header */}
        <div className="pb-4 flex justify-between">
          <p>Add New Profile</p>
          <AiOutlineClose
            className="text-gray-500"
            onClick={() => setVisible(false)}
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-row justify-evenly gap-10">
          <span className="flex flex-col w-full text-center">
            <p className="pb-1">Basic</p>
            <hr
              className={`w-full  border-solid border-2 rounded-md font-weight-bold
              ${step === 0 ? `border-blue-500` : `border-slate-500`}
              `}
            />
          </span>

          <span className="flex flex-col w-full text-center">
            <p className="pb-1">Social</p>
            <hr
              className={`w-full  border-solid border-2 rounded-md font-weight-bold
              ${step === 1 ? `border-blue-500` : `border-slate-500`}
              `}
            />
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="py-5 flex flex-col justify-center items-start">
            {step === 0 ? (
              <div className="flex flex-col gap-3">
                <Input
                  title="Enter Name*"
                  type="text"
                  placeholder="Eg. John Doe"
                  name="name"
                  setUser={setUser}
                  user={user}
                />
                <Input
                  title="Enter Email*"
                  type="email"
                  placeholder="Eg. John@xyz"
                  name="email"
                  setUser={setUser}
                  user={user}
                />
                <Input
                  title="Enter Phone*"
                  type="text"
                  placeholder="Eg. 9123456789"
                  name="phone"
                  setUser={setUser}
                  user={user}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Input
                  title="Instagram Link"
                  secondary
                  type="text"
                  placeholder="Eg. ..instagram/username"
                  name="instagram"
                  setUser={setUser}
                  user={user}
                />
                <Input
                  title="Youtube Link"
                  secondary
                  type="text"
                  placeholder="Eg. ..youtube/username"
                  name="youtube"
                  setUser={setUser}
                  user={user}
                />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              disabled={step === 1 ? true : false}
              onClick={() => {
                setStep(step + 1);
              }}
              className={`py-2 px-3 text-white rounded-md bg-blue-500 right-0
              ${step === 1 ? `hidden` : ``}
              `}
            >
              Next
            </button>

            <button
              disabled={step === 0 ? true : false}
              onClick={() => {
                setStep(step - 1);
              }}
              className={`py-2 px-3 text-black border-2 border-solid border-black rounded-md bg-white right-0
              ${step === 0 ? `hidden` : ``}
              `}
            >
              Back
            </button>
            <button
              disabled={step === 0 ? true : false}
              // onClick={() => {
              //   setVisible(true);
              // }}
              type="submit"
              className={`py-2 px-3 text-white rounded-md bg-blue-500 right-0
              ${step === 0 ? `hidden` : ``}
              `}
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
