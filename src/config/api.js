export const OPEN_SEA_API = 'https://api.opensea.io/api/v1';

export const GET_ASSET_LIST_API = `${OPEN_SEA_API}/assets`;

export const GET_ASSET_DETAIL_API = `${OPEN_SEA_API}/asset`;

/**
*   Check the http status code between 200~299
*   @param {number} status
*/
export const isRequestSucceed = status => Boolean(String(status).match(/(?=([2][0-9][0-9]))\d{3}/g));
