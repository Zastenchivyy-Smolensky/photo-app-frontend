import React from "react"
import CreateBook from "./components/CreateBook"
import ShowBook from "./components/ShowBook"

const App: React.FC = () => {
  return(
    <div>
      <CreateBook />
      <ShowBook />
    </div>
  )
}
export default App