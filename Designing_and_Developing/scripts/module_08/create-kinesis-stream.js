const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-west-2' })

const kinesis = new AWS.Kinesis()
const streamName = 'hamster-race-results'

createKinesisStream(streamName)
.then(data => console.log(data))

function createKinesisStream (streamName) {
  const params = {
    ShardCount: 1,
    StreamName: streamName
  }

  return new Promise((resolve, reject) => {
    kinesis.createStream(params, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}
