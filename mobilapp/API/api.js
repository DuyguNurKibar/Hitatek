import axios from "axios";

export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "general",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
    name: "health",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/money.png",
    name: "economy",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
    name: "sports",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
    name: "entertainment",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
    name: "science",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
    name: "technology",
  },
];

export const country = [
  {
    code: "tr",
    name: "Turkey",
  },
];
export const sources = [
  {
    author: "CnnTürk",
    pic: "https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2019/03/26/59231-181955325.png?itok=2rExyoKP",
  },

  {
    author: "Habertürk",
    pic: "https://im.haberturk.com/l/2023/01/24/ver1674582087/3559082/jpg/640x360",
  },
  {
    author: "Hürriyet",
    pic: "https://yt3.googleusercontent.com/ytc/APkrFKbYntTQ_fLNQjDvJPKrpjOWjszmge6KHTSr_IUrSw=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    author: "Sabah",
    pic: "https://play-lh.googleusercontent.com/T-6eWGUB7GQysIwSmDZCIgJZEUoqhFwfBMsGt7IGOPuutx2wxO_eAWOu6jSKrmQKoKM",
  },
  {
    author: "Milliyet",
    pic: "https://play-lh.googleusercontent.com/o7zaP1Pc6l2pECc6gao9lCJGV64AQfiIGb5AMY63PdHaWcinEv59pV4Dd_fqWribxVaM",
  },

  {
    author: "sözcü",
    pic: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/81/3d/d1/813dd15e-86a9-e225-ed10-d4630460d41f/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
  },
  {
    author: "fotomaç",
    pic: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/5c/a7/f8/5ca7f874-2b29-593b-2b5e-6459588b5ea5/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
  },
  {
    author: "Ntv",
    pic: "https://pbs.twimg.com/profile_images/1636344114617745410/5v2k93k4_400x400.png",
  },
  {
    author: "A Spor",
    pic: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/36/46/e9/3646e970-efab-a7f7-3161-5c50695bd18b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
  },

  {
    author: "T24",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/T24_haber_sitesi_logo.jpg/800px-T24_haber_sitesi_logo.jpg",
  },
  {
    author: "Fanatik",
    pic: "https://play-lh.googleusercontent.com/A_L-RWP9F_spf6Mg4uVw7GhbOzHucWAHHT87wT0tZa_9Ddy9ZotEpS9PFerxjTvu4E4p",
  },
  {
    author: "Webtekno",
    pic: "https://www.webtekno.com/images/editor/default/0002/54/011971679b9e666470c5bb93ecfc49251efb8537.jpeg",
  },
];

export const API_URL =
  "https://newsapi.org/v2/top-headlines?country=tr&apiKey=efab3ac17d224ab9868b3a2491d77f38";

export const getNews = async () => {
  const result = await axios.get(API_URL).then((response) => {
    return response.data.articles;
  });
  return result;
};
export const getNewsAPI = (category, country = "tr") => {
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=efab3ac17d224ab9868b3a2491d77f38`;
  return apiUrl;
};

export const getSourceAPI = (source, country = "tr") => {
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&sources=${source}&apiKey=efab3ac17d224ab9868b3a2491d77f38`;
  return apiUrl;
};
