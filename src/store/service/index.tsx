import axios from "axios"

const url = "http://api/home"

export const getRecipe: any = async (query: any) => await axios.get(`https://mocki.io/v1/905fee9a-cead-4fcd-a53a-9dbb0146ffed?key=${query}`)