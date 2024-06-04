import Buah from "./components/Buah"
import Header from "./components/Header"
import { fruits } from "./components/Buah"
function App() {

  return (
    <>
      <Header/>
      <main className="flex gap-5 justify-center p-5">
        {
          fruits.map((fruit) => (
            <Buah key={fruit.id} fruit={fruit}/>
          ))
        }
      </main>
    </>
  )
}
export default App