const {localDB} = require("./index");
// // const {localDbChunk} = require( './src/localDbChunk' );

const ldb = localDB();

const data = {name: "Sourav", email: "keramotul.islam@gmail.com"};

// // setTimeout(function() {
	ldb.set(data)
		.catch( (err) => console.log(err) );
// }, 500)

// ldb.get()
// 	.then( (data) => console.log(data) )
// 	.catch( (err) => console.log(err) );

// ldb.remove({name: "Keramot UL Islam"})
// 	.catch( err => console.log(err) );

// ldb.update({"name": "Sourav"}, {name: "AbmSourav"}).catch(error => console.log(error));

// ldb.search("name", "AbmSourav", false).then( data => console.log(data) );

// ldb.searchByValue("AbmSourav", true).then( data => console.log(data) );

// ldb.insert({"id": "abm"}, {"Nick Name": "Abm Sourav"});
