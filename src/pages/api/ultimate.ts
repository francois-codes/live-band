import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url =
    "https://tabs.ultimate-guitar.com/tab/amy-winehouse/back-to-black-chords-467281";
  const { data } = await axios.get(url);

  res.status(200).json({ data });
}
