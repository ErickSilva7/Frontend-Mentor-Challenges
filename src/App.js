import './App.scss'
import Display from './components/display'
import Header from './components/header'
import Keyboard from './components/keyboard'

const App = () => {
  return (
    <div className='calculator'>
      <Header />
      <Display />
      <Keyboard />
    </div>
  )
}

export default App
