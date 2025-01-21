
export default function Page() {
  return (
    <main class="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="z-10 max-w-5xl w-full items-center justify-between text-sm"> 
      <h1 class="text-4xl font-bold mb-5">My Library</h1> 
      <div class="text-lg">
        <ul>
          <li class="hover:underline">
            <a href = "/animals">African Wildlife Illustrated Book</a>
          </li>
        </ul>
      </div>
      </div>
    </main>
  );
}
