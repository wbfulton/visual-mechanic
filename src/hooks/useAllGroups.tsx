import { Group } from "@/types";
import useSWR from "swr";

const fetcher = (input: RequestInfo | URL) =>
  fetch(input).then((res) => res.json());

export const useAllGroups = (): {
  groups: Group[];
  isError: boolean;
  isLoading: boolean;
} => {
  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:8000/groups/",
    fetcher,
  );
  return { groups: data, isError: error, isLoading };
};
