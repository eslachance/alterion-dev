export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        <div class="flex justify-center items-center">
          <span class="mr-5">Alterion Development</span>
        </div>
      </h1>
      <h2 class="max-6-xs text-4xl">Under ... well... development, really.</h2>

      <div class="flex flex-col justify-center items-center gap-2 pt-8">
        <h3 class="text-2xl">Built With</h3>
        <a
          href="https://unocss.dev"
          target="_blank"
          class="text-sky-600 hover:underline flex justify-center items-center gap-2 border-1 border-solid border-sky-600 rounded-md p-2"
        >
          <span>UnoCSS</span>
          <img
            class="w-6 h-6"
            src="https://unocss.dev/logo.svg"
            alt="UnoCSS logo"
          />
        </a>
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline flex justify-center items-center gap-2 border-1 border-solid border-sky-600 rounded-md p-2"
        >
          <span>SolidJS</span>
          <img class="w-6 h-6" src="/solidjs.svg" alt="SolidJS logo" />
        </a>
      </div>
    </main>
  );
}
