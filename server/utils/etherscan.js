
import dotenv from 'dotenv';
dotenv.config();
const API_KEY = '5TKVKGRMNPSC4P1ITI8NMUSJGSE2A2TUAY';
const address = '0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC';

const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`;

/*
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(err => {
    console.error('Error:', err);
  });
*/


const urlApi = `${process.env.ETHERSCAN_API_URL}
   ?chainid=1
   &module=account
   &action=txlist
   &address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC
   &startblock=0
   &endblock=99999999
   &page=1
   &offset=10
   &sort=asc
   &apikey=${process.env.DETECTIVE_AGENT_KEY}`;

async function getAddressInfo() {
    const response = await fetch(url);
    const addressInfo = await response.json();
    
    console.log(addressInfo);
}

getAddressInfo(); 