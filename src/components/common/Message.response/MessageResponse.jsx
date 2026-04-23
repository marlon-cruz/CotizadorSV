import "./MessageResponse.css"

function MessageResponse({menssage}){
    return (
    <div className="MessageResponse" dangerouslySetInnerHTML={{ __html: menssage }}>
           
    </div>
    )
}

export default MessageResponse