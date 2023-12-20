import {baseUrl} from '../constants/base/baseUrl'
import axios from "axios";

const instanceAxios = axios.create({
    baseURL: baseUrl,
    params: {gl: 'ID'},
    headers: {
        'X-RapidAPI-Key': '9076eac4a5msha9000f7a84a1cb1p112ed6jsn13542991e11b',
        'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
    }
});


export const getQuickMusic = async () => {
    const response = await instanceAxios.get(`recommend`);
    return response;
};

// export const searchMusic = async (value) => {
//     const respons =await instanceAxios.get(`search`, value);
// }