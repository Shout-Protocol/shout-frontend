import { tablelandDatabaseConnection } from "@/configs/tableland.config";
import { filterHelper } from "@/utils/tableland.util";

// const tableName = "A_80001_1909";
// const chainId = 80001;

export const fetchAll = async <T>(tableName: string, chainId?: number): Promise<T> => {
  const results = fetch<T>(tableName, undefined, chainId);
  return results;
};

export const fetch = async <T>(
  tableName: string,
  filters?: Record<string, string>,
  chainId?: number
): Promise<T> => {
  const db = await tablelandDatabaseConnection(chainId);
  let query = `SELECT * FROM ${tableName}`;
  if (filters) {
    query += ` WHERE ${filterHelper(filters)};`;
  } else {
    query += ";";
  }
  const { results } = await db.prepare(query).all();
  return results as T;
};
