export default function FilterTabs() {
  return (
    <div className="flex justify-center gap-4">
      <button className="underline">All</button>
      <button className="text-gray-300">Active</button>
      <button className="text-gray-300">Done</button>
    </div>
  );
}
