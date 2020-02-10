import axios from "axios";

export const getQuotes = async () => {
    const { data: quotes } = await axios.get("/crud");
    let result = quotes.map((quote) => ([quote]))
    console.log(result);
    return result;
}