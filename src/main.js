import Axios from 'axios';

const bitcoin = document.getElementById('bitcoin');
const ethereum = document.getElementById('ethereum');
const dogecoin = document.getElementById('dogecoin');

const API_KEY = 'CG-P93AkG13D6TDn5Gji5Gd9dVs';

const myAxios = Axios.create({
  baseURL:
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
});

async function getCurrencies() {
  const params = {
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': API_KEY,
    },
  };
  try {
    const response = await myAxios.get('', params);
    const data = response.data;
    bitcoin.textContent = '$' + Number(data.bitcoin.usd).toFixed(2);
    ethereum.textContent = '$' + Number(data.ethereum.usd).toFixed(2);
    dogecoin.textContent = '$' + Number(data.dogecoin.usd).toFixed(4);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

getCurrencies();
