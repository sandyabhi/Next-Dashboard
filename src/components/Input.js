import React from "react";

const Input = ({
  title,
  secondary,
  type,
  placeholder,
  name,
  setUser,
  user,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();

    const data = event.target.value;
    setUser({ ...user, [name]: data });
    console.log(user, name);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="flex flex-row">
        {title} {secondary && <p className="text-gray-500">(Optional)</p>}
      </label>

      <input
        className="white p-1 pl-2 w-[350px] rounded-md"
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
