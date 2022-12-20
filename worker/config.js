var client = require('redis').createClient({
    url:"redis://localhost:6379"
});
// console.log(client);
client.on("error",()=>{
    console.log('error');
})

const addToRedis=async()=>{
    try {
      await client.connect()
      // await client.set("deba",'processing')
      const msg = await client.get('deba')
      console.log(msg);
      await client.disconnect()
    } catch (error) {
      console.log(error);
    }
  }
  addToRedis()

module.exports = client;