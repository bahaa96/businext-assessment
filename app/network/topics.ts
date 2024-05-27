import instance from "./instance";

interface requestFetchAllTopicsArgs {
  options?: {
    signal?: AbortSignal;
  };
}

interface requestFetchAllTopicsResponse {
  data: any;
}

const requestFetchAllTopics = () => {
  const { data } = instance.get<requestFetchAllTopicsResponse>("/topics");

  return data;
};

export { requestFetchAllTopics };
