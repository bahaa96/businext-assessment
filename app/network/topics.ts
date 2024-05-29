import { Topic } from "@/domain-models";
import { instance } from "./instance";

interface RequestFetchAllTopicsArgs {
  rpi: number;
  rps: number;
  options?: {
    signal?: AbortSignal;
  };
}

const requestFetchAllTopics = async ({
  rpi,
  rps,
  options,
}: RequestFetchAllTopicsArgs) => {
  const { data } = await instance.get("/topics", {
    params: {
      page: rpi,
      per_page: rps,
    },
    signal: options?.signal,
  });

  return { data };
};

export { requestFetchAllTopics };
