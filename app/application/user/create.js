const { Producer } = require('sqs-producer')
const { findAll } = require('../../domain/user/userRepository')

module.exports = () => {
    const users = findAll()
    Producer.create({
        queueUrl: process.env.AWS_QUEUE_URL,
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }).send(users)
}