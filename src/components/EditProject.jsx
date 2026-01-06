export default function EditProject({ project, deleteProject }) {
  return (
    <div className="relative w-[70%] ml-7 top-1/5">
      <div className="pb-3 border-b-2 border-b-stone-300">
        <div className="flex justify-between mb-2">
          <h2 className="text-3xl font-extrabold text-stone-700">{project.title}</h2>
          <button
            className="cursor-pointer text-stone-700 hover:text-stone-700/80"
            onClick={() => deleteProject(project.id)}
          >
            Delete
          </button>
        </div>
        <span className="text-gray-400">{project.date}</span>
        <pre className="text-stone-700 mt-5 text-wrap">
          {project.description}
        </pre>
      </div>

      <div className="pt-3">
        <h2 className="text-3xl font-extrabold text-stone-700 mb-5">Tasks</h2>
        <input className="w-sm py-2 px-1 mr-4 bg-stone-200 rounded-sm" type="text" />
        <button className="cursor-pointer text-stone-700 hover:text-stone-700/80">Add Task</button>
        <p className="text-stone-700 mt-5">This project does not have any tasks yet.</p>
      </div>
    </div>
  );
}