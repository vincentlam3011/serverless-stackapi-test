import handler from "../libs/handler-lib";
import dynamoDB from "../libs/dynamo-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: "123",
      noteId: event.pathParameters.id,
    },
  };

  const res = await dynamoDB.get(params);
  if (!res) {
    throw new Error("Item not found!");
  }
  return res.Item;
});
