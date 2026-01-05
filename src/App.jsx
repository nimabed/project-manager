import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CreateMessageTemp from './components/CreateMessageTemp';
import AddProjectForm from './components/AddProjectForm';
import EditProject from './components/EditProject';
import './App.css'

function generateId(allProjects) {
  let id = 0;
  if(allProjects.length > 0) {
    id = allProjects[0].id + 1;
  }
  return id;
}

function App() {
  const [mainState, setMainState] = useState('temp');
  const [projects, setProjects] = useState([]);

  function saveProject(title, description, date) {

    const projectId = generateId(projects);

    const newProject = {
      id: projectId,
      title: title.current.value,
      description: description.current.value,
      date: date.current.value
    };

    setProjects(currProjects => [newProject, ...currProjects]);

    [title.current.value, description.current.value, date.current.value] = ['', '', ''];

    setMainState('temp');
  }

  console.log(projects);


  return (
    <div className="min-h-screen grid grid-cols-[400px_1fr]">
      <section className="pt-10">
        <Sidebar mainToCreate={() => setMainState('create')} mainToEdit={() => setMainState('edit')} projectItems={projects} />
      </section>
      <main className="">
        {mainState === 'temp' && <CreateMessageTemp mainToCreate={() => setMainState('create')} />}
        {mainState === 'create' && <AddProjectForm mainToTemp={() => setMainState('temp')} saveInputs={saveProject} />}
        {mainState === 'edit' && <EditProject />}
      </main>
    </div>
  )
}

export default App
