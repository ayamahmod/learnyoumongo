var mongo = require('mongodb').MongoClient
var dbName = 'learnyoumongo'
var url = 'mongodb://localhost:27017/' + dbName
var collectionName = 'prices'

mongo.connect(url, function(err, client) {
  if(err) throw err;
  var db = client.db(dbName)
  var collect = db.collection(collectionName)

  collect.aggregate([
      { $match: { size: process.argv[2] }},
      { $group: {
        _id: 'average',
        average: {
          $avg: '$price'
        }
      }}
    ]).toArray(function(err, results) {
      if(err) throw err;
      if (!results.length) {
        throw new Error('No results found')
      }
      var o = results[0]
      console.log(Number(o.average).toFixed(2))
    })


  client.close()
})
