import axios from "axios"
import config from "../config"
const c = '/qr'

const decodeQr = async (code) => {
  const qr = await axios.post(`${c}/decode`, {code}, {headers: {secret: config.API_SECRET}});
  return qr.data;
}

export default {
  decodeQr,
}