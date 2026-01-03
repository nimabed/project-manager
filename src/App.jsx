import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CreateMessageTemp from './components/CreateMessageTemp';
import AddProjectForm from './components/AddProjectForm';


import './App.css'

function App() {
  const [mainState, setMainState] = useState('temp');



  return (
    <div className="min-h-screen grid grid-cols-[400px_1fr]">
      <section className="pt-10">
        <Sidebar changeMainState={() => setMainState('create')} />
      </section>
      <main className="">
        {mainState === 'temp' && <CreateMessageTemp changeMainState={() => setMainState('create')} />}
        {mainState === 'create' && <AddProjectForm />}
      </main>

    </div>
  )
}

export default App
