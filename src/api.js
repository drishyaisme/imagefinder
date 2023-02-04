import axios from 'axios';


const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID BiUQUh7CtvEVnOIFvXI1QczS-byjnR2BmDIEP5aXo-k',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;