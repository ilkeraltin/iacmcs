/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_COMICSVIEWER_ARN
	STORAGE_COMICSVIEWER_NAME
Amplify Params - DO NOT EDIT */

const axios = require('axios');
const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');
const region = process.env.REGION
const ddb_table_name = process.env.STORAGE_COMICSVIEWER_NAME
const docClient = new AWS.DynamoDB.DocumentClient({ region })


exports.handler = async (event) => {
    let URL;
    if (event.arguments) {
        const { comicId } = event.arguments;
        if (comicId === 0) {
            URL = 'https://xkcd.com/info.0.json';
        } else {
            URL = `https://xkcd.com/${comicId}/info.0.json`;
        }

        const getParams = {
            TableName: ddb_table_name,
            Key: {
                "num": comicId,
            }
        };

        let itemFromDb;
        try {
            itemFromDb = await docClient.get(getParams).promise();
            console.log('=== GET Success !!! ==> ', itemFromDb);
        } catch (error) {
            console.log('=== GET Error !!! ==> ', error);
        }


        if (itemFromDb && itemFromDb.Item) {
            return itemFromDb.Item;
        } else {
            const resp = await axios.get(URL);
            const newComicItem = { ...resp.data, id: uuidv4() }
            const putParams = {
                TableName: ddb_table_name,
                Item: newComicItem,
            };
            try {
                const newCreatedItem = await docClient.put(putParams).promise();
                console.log('=== PUT Successful !!! ==> ', newCreatedItem);
                return newComicItem;
            } catch (error) {
                console.log('=== PUT Error !!! ==> ', error);
                return null;
            }
        }
    }
};
