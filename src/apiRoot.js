const DEV_URL = 'http://localhost:3001/';
const PROD_URL = null;
const ROOT_URL = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;

export default ROOT_URL