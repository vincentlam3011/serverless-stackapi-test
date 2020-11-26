import dynamoDB from "../libs/dynamo-lib";
import handler from "../libs/handler-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id,
    },
  };
  const res = await dynamoDB.delete(params);
  return {
    status: true,
    message: res,
  };
});
