import ServiceCard from './components/servicecard'
import './App.css'

function App() {
  const details = [
    {
      id:1,
      title:"Web Development",
      description:"specializes in creating web applications"
    },
    {
      id:2,
      title:"Backend web development",
      description:"specializes in creating and maintaining website databases"
    },
  ]

  return (
    <ServiceCard details/>
  )
}

export default App
