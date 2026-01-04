import ProjectsBoard from './ProjectsBoard';

export default function Sidebar({ mainToCreate }) {

  return (
    <div className="size-full bg-gray-900 rounded-tr-2xl pt-10 pl-7 ">
      <h2 className="text-white mt-10 text-2xl font-extrabold uppercase">Your Projects</h2>
      <button 
        className="py-3 px-5 mt-10 text-gray-400 bg-gray-600 rounded-md text-xl cursor-pointer hover:bg-gray-600/80"
        onClick={mainToCreate}
      >
        + Add Project
      </button>
      <div className="w-[85%] flex flex-col space-y-5 mt-10">
        <ProjectsBoard title="React Course" />
        <ProjectsBoard title="Python Course" />
        <ProjectsBoard title="React Root Course" />
        <ProjectsBoard title="C++ Course" />
      </div>
    </div>
  )
}