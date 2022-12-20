var client = require("redis").createClient({
  url: "redis://localhost:6379",
})

client.on("error", () => {
  console.log("error")
})

const addToRedis = async (key,value) => {
  try {
    await client.connect()
    await client.setEx(key,10,value)
    await client.quit()
  } catch (error) {
    console.log(error)
  }
}

const getData = async (key) => {
    try {
      await client.connect()
      // await client.set("deba",'processing')
      const data = await client.get(key)
      return data
      await client.quit()
    } catch (error) {
      return 'error'
    }
  }

module.exports={addToRedis,getData}