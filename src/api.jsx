/* this file's going to contain all the cod related to contacting the 
Unsplash API  */
import axios from "axios";
// pass parameter for user to input
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    //header & params
    headers: {
      // authorization : it's what identifies us to Unsplash and tell who's making a req
      Authorization: "Client-ID nyC8mzX4zuVHHa14G1cXl6Iv9f-7f2x14gSUidfD7k4", //use access key code
    },
    params: {
      query: term, //sth we can search for
    },
  });

  return response.data.results;
};

export default searchImages;
