const settings = {
  async: true,
  scrossDomain: true,
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogcoin&vs_currencies=usd',
  method: 'Get',
  headers: {},
};
$.json(settings).done(function (response) {
  console.log(response);
});
