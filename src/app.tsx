import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import ServerTest from "~/components/ServerTest";

export default function App() {
  return (
    <Router
      root={(props) => (
        <Suspense>
          <Nav />
          <ServerTest />
          {props.children}
        </Suspense>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
