import "./chat.css";
import Company_logo from "../../common/company_logo/Company_logo";
import logo_react from "../../../assets/react.svg";
import MessageSend from "../../common/Message.send/MessageSend";
import MessageResponse from "../../common/Message.response/MessageResponse";
import Input_login from "../../common/input_login/Input";
import iconSend from "../../../assets/icon.svg";
import Spinner from "../../common/spinner/spinner";
import SpinnerLoad from "../../common/Spinner_load/SpinneLoad";
import { useState, useRef, useEffect } from "react";
import chatServices from "../../../services/chat.services";
import formatTextMsg from "../../../utils/formantMsg";
function Chat() {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [estado, setEstatus] = useState(false);
  const [messageUser, setMessageUser] = useState("");
  const scrollMessage = useRef(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollMessage.current) {
      scrollMessage.current.scrollTo({
        top: scrollMessage.current.scrollHeight,
        behavior: "smooth",
      });
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [lista]);

  function requestMessage(text = " ") {
    const nuevoContenido = `${text}`;
    console.log();
    setLista((prev) => [...prev, nuevoContenido]);
  }
  const servicios = new chatServices();

  async function sendMessage() {
    const nuevoContenido = messageUser;
    if (messageUser) {
      try {
        setLista((prev) => [...prev, nuevoContenido]);
        setMessageUser("");
        setEstatus(true);
        //Aqui colocar la request
        setLoading(true);
        try {
          const result = await servicios.sendMessagebot(messageUser);
          requestMessage(result.data);
          setLoading(false);
          setEstatus(false);
        } catch (error) {
          requestMessage("Ha ocurrido un error ");
          setLoading(false);
          setEstatus(false);
        }
      } catch (error) {
        setLoading(false);
        setEstatus(false);
      }
    }
  }

  return (
    <div className="Content">
      <div>
        <div className="contentImge">
          <Company_logo company_name={"CotizadorSV"} img={logo_react} />
        </div>
      </div>
      <div className="contentChat" id="contentChat" ref={scrollMessage}>
        {lista.map((text, index) =>
          index % 2 === 0 ? (
            <MessageSend key={index} menssage={text} />
          ) : (
            <MessageResponse key={index} menssage={text} />
          )
        )}
        {loading ? <Spinner /> : null}
      </div>
      <div className="contentInputSend">
        <div className="contentInput">
          <Input_login
            placeholder={"Has una pregunta..."}
            id={"inputQuestion"}
            type="text"
            icon={iconSend}
            event={sendMessage}
            eventKey={(e) => setMessageUser(e.target.value)}
            value={messageUser}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            status={estado}
            ref={inputRef}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
