var mongo = require('mongodb').MongoClient
var dbName = process.argv[2]
var url = 'mongodb://localhost:27017/'+dbName
var collectionName = process.argv[3]

mongo.connect(url, function(err, client) {
  if(err) throw err;
  var db = client.db(dbName)
  var collect = db.collection(collectionName)

  collect.remove({
    _id: process.argv[4]
  }, function(err) {
    if(err) throw err;
  })

  client.close()
})
