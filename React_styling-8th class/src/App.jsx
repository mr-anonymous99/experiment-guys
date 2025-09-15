
import Card from "./Components/Card.jsx"
function App() {
  return (
    <>
      <div className="flex gap-5 justify-center items-center h-screen bg-[#f0f0f0]">
        <Card img="./tanjiro.jpg" title="Kamado-Tanjiro" description="A Demon-Slayer works to keep her sister Alive"/>
        <Card img="./Akaza.jpg" title="Akaza" description="A person who became as a Demon for his Love"/>
        <Card img="./mitsuri.jpg" title="Mitsuri-Kanroji" description="She became a Demon Slayer For Marriage"/>
    
      </div>
    </>
  )
}

export default App
