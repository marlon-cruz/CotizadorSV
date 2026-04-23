
function formatTextMsg(msg = ""){

    if (!msg) return "";

  let resultado = msg.replace(/\*\*(.*?)\*\*/g, function(match, contenido) {
    return `<strong>${contenido}</strong>`;
  });

 resultado = resultado.replace(/\*(?!\*)/g, "<br> -");

  return resultado

}



export default formatTextMsg