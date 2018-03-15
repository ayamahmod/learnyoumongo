var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, client) {
  if(err) throw err;
  var db = client.db('learnyoumongo')
  var collect = db.collection('docs')
  var doc = {
        firstName: process.argv[2],
        lastName: process.argv[3]
    };

  collect.insert(doc, function(err, data) {
    if(err) throw err;
    console.log(JSON.stringify(doc))
  })

  client.close()
})
