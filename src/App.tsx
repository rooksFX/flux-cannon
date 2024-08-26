import './App.css'
import { AudioPlayer } from './components/AudioPlayer'

function App() {
  return (
    <div className="bg-zinc-900 w-screen h-screen flex justify-center items-center flex-col">
      <div className="text-zinc-700">rfx / Flux Cannon</div>
      <AudioPlayer />
    </div>
  )
}

export default App
