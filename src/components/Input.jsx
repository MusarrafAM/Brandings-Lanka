const Input = ({ name, label, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={name} className="flex">
        {label ? label : name}
      </label>
      {name === "message" ? (
        <textarea
          id={name}
          value={value}
          onChange={(e) => handleChange(e.target.value, name)}
          rows="4"
          cols="50"
          className="w-[80%] mb-4 outline-none"
          required
        />
      ) : (
        <input
          type={name === "email" ? "email" : "text"}
          id={name}
          value={value}
          onChange={(e) => handleChange(e.target.value, name)}
          className="w-[80%] mb-4 rounded-sm p-1 outline-none"
          required
        />
      )}
    </div>
  );
};
export default Input;
