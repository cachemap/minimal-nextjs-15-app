"use client"

import { useQuery } from "@tanstack/react-query";
import { getJoke } from "./util";

function JokeDisplay({ initialData }) {
  const { data } = useQuery({
    queryKey: ['joke'],
    queryFn: () => getJoke,
    initialData, // populate client-side cache with SSRed data
    refetchInterval: 60 * 1000, // periodically refetch fresh data client-side
  });

  return <div>{data}</div>;
}
export default JokeDisplay;
