import { NextApiRequest, NextApiResponse } from 'next';

const data = async (request: NextApiRequest, response: NextApiResponse) => {
  const data = await (
    await fetch('https://jsonplaceholder.typicode.com/posts')
  ).json();
  response.json(data);
};

export default data;
