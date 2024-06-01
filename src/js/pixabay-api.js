import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

 

async function searchImages(url) {
  try {
    const { data } = await axios(url)
    console.log(data);
  
    if (data.hits.length === 0) {
      iziToast.show({
        position: 'topRight',
        backgroundColor: '#EF4040',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FAFAFB',
      });
      return null;
    } else {
      return data;
    }
  }  
  catch (error) {
    console.log('Fetch error:', error);
    return null;
    };
}

export { searchImages }
