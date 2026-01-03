export default function CreateMessageTemp({ changeMainState }) {
  return (
    <div className="relative flex flex-col space-y-2 items-center mx-auto top-1/3">
      <h2 className="text-2xl font-extrabold text-gray-700">No Project Selected</h2>
      <p className="text-lg text-gray-400">Select a project or get started with a new one</p>
      <button
       className="py-2 px-4 bg-gray-900 text-xl text-gray-400 rounded-md cursor-pointer hover:bg-gray-900/80 mt-4"
       onClick={changeMainState}
      >
        Create new project
      </button>
    </div>
  )
}