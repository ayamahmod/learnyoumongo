var mongo = require('mongodb').MongoClient
var dbName = process.argv[2]
var url = 'mongodb://localhost:27017/'+dbName
var collectionName = 'users'

mongo.connect(url, function(err, client) {
  if(err) throw err;
  var db = client.db(dbName)
  var collect = db.collection(collectionName)

  collect.update({
    username: 'tinatime'
  }, {
    $set: {
      age: 40
    }
  },function(err, data) {
    if(err) throw err;
  })

  client.close()
})
