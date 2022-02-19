const { Consumer } = require('sqs-consumer')
const userConfig = require('../worker/user/handler/config')

const consumers = [userConfig].map(config => Consumer.create({
  queueUrl: config.queueUrl,
  handleMessage: config.handleMessage
}))

consumers.forEach(consumer => {
  
  consumer.on('error', (err) => {
    console.error(err.message);
  })

  app.on('processing_error', (err) => {
    console.error(err.message);
  })

  app.start()
})
