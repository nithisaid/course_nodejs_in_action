var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
  hosts: [
    'http://localhost:9200/'
  ]
});

client.search({
  index: 'media',
  type: 'photo',
  body: {
    query: {
      match: { "_all": "image" }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});