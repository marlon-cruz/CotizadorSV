import "../input_login/Input.css";

function Input_login({
  label,
  placeholder,
  id,
  type = "text",
  icon = undefined,
  required = true,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <br />
      <div className="contentInput">
        <input
          className="inputLogin"
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
        />
        {icon == undefined ? null : <img className="iconInput" src={icon} />}
      </div>
    </>
  );
}

export default Input_login;
