const mq = require("amqplib")
const runCode = require("./runner")
const QUEUE_NAME = "CODE"

async function consume() {
  try {
    const connection = await mq.connect("amqp://localhost:5672")
    const channel = await connection.createChannel()
    channel.assertQueue(QUEUE_NAME)
    await channel.consume(QUEUE_NAME, async message => {
      const sourceCodeInfo = message.content.toJSON()
    //   const fileName = sourceCodeInfo.fileName
        const out =await runCode('sh test.sh')
        console.log(out);

      channel.ack(message)
    })
  } catch (error) {}
}

consume()
