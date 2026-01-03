import Sidebar from './components/Sidebar';
import CreateMessageTemp from './components/CreateMessageTemp';


import './App.css'

function App() {
  return (
    <div className="min-h-screen grid grid-cols-[400px_1fr]">
      <section className="pt-10">
        <Sidebar />
      </section>


      <main className="">
        <CreateMessageTemp />
      </main>
    </div>
  )
}

export default App
