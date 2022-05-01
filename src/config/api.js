export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const headerKey = 'e3fb9b7550mshdf0c22c13e820cap1a77bdjsn1d3d1cb2a398'
export const headerHost = 'crypto-tracker.p.rapidapi.com'
export const urlGainer = 'https://crypto-tracker.p.rapidapi.com/api/topgainers';

export const headerKeyLosers = 'e3fb9b7550mshdf0c22c13e820cap1a77bdjsn1d3d1cb2a398'
export const headerHostLosers = 'crypto-tracker.p.rapidapi.com';
export const urlLoser = 'https://crypto-tracker.p.rapidapi.com/api/toplosers';
