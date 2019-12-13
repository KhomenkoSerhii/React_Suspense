import React, { Suspense } from "react";
import { useResource } from "./resource";
import { Posts } from "./Posts";

const resource = useResource();

function App() {
  return (
    <div className="container">
      <h1>Suspense for Data Fetching</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Posts resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
