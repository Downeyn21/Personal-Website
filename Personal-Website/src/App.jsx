import './App.css'
import SideInfo from './SideInfo'
import MainContent from './MainContent'

function App() {

  return (
    <>
      <div className='PageWrapper'>
      <SideInfo />
        <div className='ContentWrapper'>
        <MainContent />
        </div>
      </div>
    </>
  )
}

export default App
