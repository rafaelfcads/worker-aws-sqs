const handleMessage = require('./handler')

module.exports = {
    queueUrl: process.env.AWS_QUEUE_URL,
    handleMessage
}