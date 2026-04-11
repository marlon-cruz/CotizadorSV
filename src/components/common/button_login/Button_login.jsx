import '../button_login/Button_login.css'

function Button_login({text, type}){
    return(
        <button className='buttonLogin' type={type}>{text}</button>
    )
}

export default Button_login