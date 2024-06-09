import { createAsync, useAction  } from '@solidjs/router';
import { createEffect } from "solid-js";

import { getCounter, incrementCounter } from '~/api';

export const route = {
  load: () => getCounter(),
}

export default function Counter() {
  const counter = createAsync(() => getCounter());
  const inc = useAction(incrementCounter);
  createEffect(() => {
    console.log('Counter', counter());
  });
  return (
    <button
      class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
      onClick={() => inc()}
    >
      Clicks: {counter()?.toString()}
    </button>
  );
}
