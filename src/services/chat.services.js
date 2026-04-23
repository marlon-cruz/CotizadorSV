import api from "./API";
import { ENDPOINTS } from "./endpoints";


export default class chatServices {

  sendMessagebot = async (userMessage) => {
    const response = await api.post(ENDPOINTS.CHAT.SEND, {prompt:userMessage}); 
    return response.data;
  }

}
