import Axios from 'axios';

const bitcoin = document.getElementById('bitcoin');
const ethereum = document.getElementById('ethereum');
const dogecoin = document.getElementById('dogecoin');

const API_KEY = 'adtI3iEzrICUmeauFlmvag==C0c4O4zjLM82nYsK';

const myAxios = Axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/cryptoprice/',
});

async function getCurrencies() {
  const params = {
    headers: {
      'X-Api-Key': API_KEY,
    },
  };
  const response = await myAxios.get('', params);
  const data = response.data;
  console.log(data);
}

//getCurrencies();
