export default function handler(req, res) {
  const { query, method } = req;
  const { _id } = query;
  switch (method) {
    case 'GET':
      res.status(200).json({ id: _id, name: `User ${_id}` });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
