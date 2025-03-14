import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import JokeDisplay from "./JokeDisplay";
import { getJoke } from "./util";

const Loading = () => "Loading... waiting on data server-side...";

async function JokeDataFetching() {
  // This Promise triggers its parent <Suspense> boundary during SSR
  const initialData = await getJoke();
  return <JokeDisplay initialData={initialData} />;
}

export default async function JokeBoundary() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong...</div>}>
      <Suspense fallback={<Loading />}>
        <JokeDataFetching />
      </Suspense>
    </ErrorBoundary>
  );
}
