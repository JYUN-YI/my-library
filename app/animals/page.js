import React from 'react';
import ItemList from "./item-list";

function Page() {
  return (
    <main class="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="z-10 max-w-5xl w-full items-center justify-between text-sm"> 
      <h1 class="text-4xl font-bold mb-5">African Wildlife Illustrated Book</h1>
      <ItemList />
      </div>
      <p>sources: Wikipedia</p>
    </main>
  );
}

export default Page;