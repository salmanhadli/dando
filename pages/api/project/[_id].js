import connectDb from "../../../utils/connectMongoDb";
import Demo from "../../../models/demo";


export default async function handler(req, res) {
  const { query, method } = req;
  const { _id } = query;
  await connectDb();
  const demoDb = await Demo.find({
    query: {
      _id: _id
    }
  })
  switch (method) {
    case 'GET':
      res.status(200).json(demoDb);
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
