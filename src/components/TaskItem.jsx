export default function TaskItem({ text }) {
  return (
    <div className="flex justify-between">
      <span className="text-stone-700">{text}</span>
      <button className="text-stone-700 cursor-pointer hover:text-stone-700/80">Clear</button>
    </div>
  );
}