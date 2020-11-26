import handler from "../libs/handler-lib";
import dynamoDB from "../libs/dynamo-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": "123",
    },
  };
  const res = await dynamoDB.query(params);
  return res.Items;
});