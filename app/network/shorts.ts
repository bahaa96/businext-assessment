import { Short } from "@/domain-models";
import { usersInstance } from "./instance";

interface RequestFetchAllShortsArgs {
  rpi: number;
  rps: number;
  options?: {
    signal?: AbortSignal;
  };
}

interface RequestFetchAllShortsResponse {
  recipes: Short[];
  total: number;
  skip: number;
  limit: number;
}

const requestFetchAllShorts = async ({
  rpi,
  rps,
  options,
}: RequestFetchAllShortsArgs) => {
  const { data } = await usersInstance.get<RequestFetchAllShortsResponse>(
    "/recipes",
    {
      params: { limit: rps, skip: rpi * rps, select: "name,image" },
      signal: options?.signal,
    }
  );

  return { data: data.recipes };
};

export { requestFetchAllShorts };
