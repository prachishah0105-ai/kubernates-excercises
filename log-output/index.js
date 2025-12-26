// index.js
const { v4: uuidv4 } = require('uuid');


const randomId = uuidv4();

const printLog = () => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomId}`);
  

  setTimeout(printLog, 5000);
};

printLog();
