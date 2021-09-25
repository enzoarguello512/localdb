const { localDbChunk } = require("../localDbChunk");

async function update(find, newData) {
	if (localDbChunk.errorCheck(find).status) return localDbChunk.errorCheck.message;
	if (localDbChunk.errorCheck(newData).status) return localDbChunk.errorCheck.message;

	const itemKey = Object.keys(find);
	const newDataKey = Object.keys(newData);

	let getAllData = localDbChunk.getData();
	if (getAllData == undefined) {
		return console.error("LocalDB is empty...");
	}
	getAllData = JSON.parse( getAllData );

	const notFound = [];
	const dataMap = [];
	const match = [];
	getAllData.filter(function(getItem) {
		if (getItem[itemKey[0]] === undefined) notFound.push("Not found in LocalDB...");

		if ( getItem[itemKey[0]] != undefined ) {
			if ( getItem[itemKey[0]] === find[itemKey[0]] ) {
				if (getItem[newDataKey[0]] != undefined ) {
					match.push(getItem);
					getItem[newDataKey[0]] = newData[newDataKey[0]];
				}
			}
		}
		dataMap.push(getItem);
	})

	if (notFound.length != 0 && match.length === 0) return console.error(notFound[0]);
	if (match.length != 0) {
		return await localDbChunk.writeFile(dataMap);
	} else return console.error("Not found in LocalDB...");
}

exports.update = update
