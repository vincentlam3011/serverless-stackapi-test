// const AWS = require("aws-sdk");
// const uuid = require("uuid");

// const dynamoDB = new AWS.DynamoDB.DocumentClient();

// export const main = async (event, context) => {
//   const data = JSON.parse(event.body);
//   const params = {
//     TableName: process.env.tableName,
//     Item: {
//       userId: "2182",
//       noteId: uuid.v1(),
//       content: data.content,
//       attachment: data.attachment,
//       createdAt: Date.now(),
//     },
//   };
//   try {
//     await dynamoDB.put(params).promise();
//     return {
//       statusCode: 200,
//       body: JSON.stringify(params.Item),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// };

import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamo-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      // The attributes of the item to be created
      userId: "123", // The id of the author
      noteId: uuid.v1(), // A unique uuid
      content: data.content, // Parsed from request body
      attachment: data.attachment, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});
