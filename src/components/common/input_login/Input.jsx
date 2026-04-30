import "../input_login/Input.css";

function Input_login({
  label,
  placeholder,
  id,
  type = "text",
  icon = undefined,
  required = true,
  event = null,
  eventKey = null,
  value = "",
  onKeyDown = null,
  status = false,
  ref = null,

 
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
          onChange={eventKey}
          value={value}
          onKeyDown = {onKeyDown}
          disabled = {status}
          ref={ref}
   
        
        />
        {icon == undefined ? null : <img className="iconInput" src={icon} onClick={event} / >}
      </div>
    </>
  );
}

export default Input_login;
