var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, client) {
  if(err) throw err;
  var db = client.db('learnyoumongo')
  var collect = db.collection('parrots')

  collect.find({
        age: { $gt: +process.argv[2] }
    }).project({ _id:0 }).toArray(function(err, documents) {
      if(err) throw err;
      console.log(documents)
    })
  client.close()
})
