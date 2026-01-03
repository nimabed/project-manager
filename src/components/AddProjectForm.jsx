export default function AddProjectForm() {
  return (
    <div className="relative w-[70%] ml-7 top-1/4 flex flex-col space-y-6">
      <div className="text-end">
        <button className="text-gray-900 text-lg mr-4 cursor-pointer hover:text-gray-900/80">Cancel</button>
        <button className="py-3 px-5 bg-gray-900 text-white text-lg rounded-lg cursor-pointer hover:bg-gray-900/80">Save</button>
      </div>
      <div>
        <label 
          htmlFor="title"
          className="block uppercase text-lg font-extrabold text-stone-700 mb-2"
        >
          Title
        </label>
        <input 
          type="text" 
          id="title"
          className="w-full bg-stone-200 p-1 border-b-2 border-b-stone-300 text-lg rounded-sm focus:outline-0 focus:border-b-stone-700" 
        />
      </div>
      <div>
        <label 
          htmlFor="description"
          className="block uppercase text-lg font-extrabold text-stone-700 mb-2"
        >
          Description
        </label>
        <textarea 
          id="description" 
          className="w-full h-[5rem] bg-stone-200 p-1 border-b-2 border-b-stone-300 text-lg rounded-sm focus:outline-0 focus:border-b-stone-700"
        />
      </div>
      <div>
        <label 
          htmlFor="date"
          className="block uppercase text-lg font-extrabold text-stone-700 mb-2"
        >
          Due date
        </label>
        <input 
          type="date" 
          id="date" 
          className="w-full bg-stone-200 p-1 border-b-2 border-b-stone-300 text-lg rounded-sm focus:outline-0 focus:border-b-stone-700"
        />
      </div>
    </div>
  );
}