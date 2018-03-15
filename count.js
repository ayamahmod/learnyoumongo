var mongo = require('mongodb').MongoClient
var dbName = 'learnyoumongo'
var url = 'mongodb://localhost:27017/' + dbName
var collectionName = 'parrots'

mongo.connect(url, function(err, client) {
  if(err) throw err;
  var db = client.db(dbName)
  var collect = db.collection(collectionName)

  collect.count({
    age: {$gt: +process.argv[2]}
  }, function(err, count) {
    if(err) throw err;
    console.log(count);
  })

  client.close()
})
