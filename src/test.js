import axios from 'axios'

 async function fetchData() {
      const url = `https://kfipmta4tf.execute-api.eu-west-2.amazonaws.com/porfoliowebsite_index`;
  
      axios.get(url).then((data) => {
        console.log(data.data);
      });
    }
  
    fetchData();