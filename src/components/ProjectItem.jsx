export default function ProjectItem({title, showProject}) {
  return (
    <button 
      className="text-white p-2 text-start cursor-pointer rounded-lg hover:bg-gray-800/80"
      onClick={showProject}
    >
      {title}
    </button>
  );
}