var client = require('redis').createClient({
    url:"redis://localhost:6379"
});

client.on("error",()=>{
    console.log('error');
})
module.exports = client;

