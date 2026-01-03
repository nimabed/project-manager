

export default function Sidebar({ changeMainState }) {

  return (
    <div className="size-full bg-gray-900 rounded-tr-2xl pt-10 pl-7 ">
      <h2 className="text-white mt-10 text-2xl font-extrabold uppercase">Your Projects</h2>
      <button 
        className="py-3 px-5 mt-10 text-gray-400 bg-gray-600 rounded-md text-xl cursor-pointer hover:bg-gray-600/80"
        onClick={changeMainState}
      >
        + Add Project
      </button>
      <div className="text-white">
        Projects Board
      </div>
    </div>
  )
}