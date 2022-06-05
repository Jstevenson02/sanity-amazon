import nc from 'next-connect';
import client from '../../../utils/client';

const handler = nc();

handler.get(async (req, res) => {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]`,
    { id: req.query.id },
  );
  res.sendData(product);
});
