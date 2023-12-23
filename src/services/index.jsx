import { baseUrl } from "../constants/base/baseUrl";
import axios from "axios";

const instanceAxios = axios.create({
  baseURL: baseUrl,
  params: { gl: "ID" },
  headers: {
    'X-RapidAPI-Key': '5c4135ca85mshe30698e9ae6eae8p18b24fjsn3b1a3834023c',
    'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
  }
});

export const getQuickMusic = async () => {
  const response = await instanceAxios.get(`recommend`);
  return response;
};

export const searchMusic = async (value) => {
  const response = await instanceAxios.get(`search`, {
    params: {
      q: value,
      type: "song",
    },
    headers: {
      'X-RapidAPI-Key': '5c4135ca85mshe30698e9ae6eae8p18b24fjsn3b1a3834023c',
      'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
    }
  });

  return response;
};

export const getMusicInfo = async (musicId) => {
  const response = await instanceAxios.get(`music/info`, {
      params: {
        id: musicId,
      },
      headers: {
        'X-RapidAPI-Key': 'b54b07eecbmsha8aa20deb149865p126ba0jsnbfa90474c239',
        'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
      }
  });

  return response;
}