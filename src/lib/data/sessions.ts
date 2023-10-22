import { client } from "./client";

const TABLE_NAME = "sessions";
const FIELDS = ["id", "name", "active"];

export const getSessions = async () => {
  const { data, error } = await client.from(TABLE_NAME).select();
  return data;
};
