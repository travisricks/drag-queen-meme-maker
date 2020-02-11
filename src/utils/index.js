import axios from "axios";

export const getQuotes = async () => {
    const data = await axios.get("/api");
    return data.data;
}