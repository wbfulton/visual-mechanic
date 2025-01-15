import { Group } from "@/types";
import useSWR from "swr";

const fetcher = (input: RequestInfo | URL) =>
  fetch(input).then((res) => res.json());

export const useGroup = ({
  selectedGroupId,
}: {
  selectedGroupId: number;
}): {
  group: Group;
  isError: boolean;
  isLoading: boolean;
} => {
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8000/groups/${selectedGroupId}`,
    fetcher,
  );
  return { group: data, isError: error, isLoading };
};
