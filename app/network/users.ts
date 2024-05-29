import { User } from "@/domain-models";
import { usersInstance } from "./instance";

interface RequestFetchAllUsersArgs {
  options?: {
    signal?: AbortSignal;
  };
}

interface RequestFetchAllUsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

const requestFetchAllUsers = async ({ options }: RequestFetchAllUsersArgs) => {
  const { data } = await usersInstance.get<RequestFetchAllUsersResponse>(
    "/users",
    {
      params: { select: "firstName,lastName,image" },
      signal: options?.signal,
    }
  );

  return { data: data.users };
};

export { requestFetchAllUsers };
