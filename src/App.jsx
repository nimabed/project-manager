import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CreateMessageTemp from './components/CreateMessageTemp';
import AddProjectForm from './components/AddProjectForm';
import EditProject from './components/EditProject';
import './App.css'

function generateId(arr) {
  let id = 0;
  if(arr.length > 0) {
    id = arr[0].id + 1;
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
      date: date.current.value,
      tasks: [],
      isSelected: false
    };

    setProjects(currProjects => [newProject, ...currProjects]);

    [title.current.value, description.current.value, date.current.value] = ['', '', ''];

    setMainState('temp');
  }

  function selectProject(projectId) {
    setProjects(currItems => 
                  currItems.map((project) => 
                    project.id === projectId
                      ? {...project, isSelected: true}
                      : {...project, isSelected: false}
                  )
    );

    if (mainState !== 'edit') {
      setMainState('edit');
    }
  }

  function deleteProject(projectId) {
    setProjects(currItems => 
                  currItems.filter((item) => item.id !== projectId));

    setMainState('temp');
  }

  function addTask(projectId, taskRef) {
    const newTask = taskRef.current.value;

    setProjects(currProjects => 
                  currProjects.map((project) => {
                    if (project.id === projectId) {
                      const taskId = generateId(project.tasks);
                      return {
                        ...project,
                        tasks: [
                          {
                            id: taskId,
                            task: newTask
                          },
                          ...project.tasks
                        ]
                      };
                    }
                    return project;
                  }))       
    taskRef.current.value = '';
                                      
  }


  console.log(projects);


  return (
    <div className="min-h-screen grid grid-cols-[400px_1fr]">
      <section className="pt-10">
        <Sidebar mainToCreate={() => setMainState('create')} selectProject={selectProject} projectItems={projects} />
      </section>
      <main className="">
        {mainState === 'temp' && <CreateMessageTemp mainToCreate={() => setMainState('create')} />}
        {mainState === 'create' && <AddProjectForm mainToTemp={() => setMainState('temp')} saveInputs={saveProject} />}
        {mainState === 'edit' && <EditProject project={projects.filter(project => project.isSelected)[0]} deleteProject={deleteProject} addTask={addTask} />}
      </main>
    </div>
  )
}

export default App
