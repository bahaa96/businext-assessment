import { Story } from "@/domain-models";
import { usersInstance } from "./instance";

interface RequestFetchAllStoriesArgs {
  options?: {
    signal?: AbortSignal;
  };
}

interface RequestFetchAllStoriesResponse {
  users: Story[];
  total: number;
  skip: number;
  limit: number;
}

const requestFetchAllStories = async ({
  options,
}: RequestFetchAllStoriesArgs) => {
  const { data } = await usersInstance.get<RequestFetchAllStoriesResponse>(
    "/users",
    {
      params: { select: "firstName,lastName,image" },
      signal: options?.signal,
    }
  );

  return { data: data.users };
};

export { requestFetchAllStories };
