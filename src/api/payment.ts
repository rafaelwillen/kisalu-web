import axios from "axios";

const comprovativosAPI = axios.create({
  baseURL:
    "https://comprovativos-back-production.up.railway.app/api/comprovativo/validacao",
});

export default async function executePayment(file: File) {
  try {
    const formData = new FormData();
    formData.append("comprovativo-express", file);
    await comprovativosAPI.post("/multicaixa-express", formData, {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=---011000010111000001101001",
      },
    });
  } catch (error) {
    throw new Error("Pagamento não foi bem sucedido");
  }
}
