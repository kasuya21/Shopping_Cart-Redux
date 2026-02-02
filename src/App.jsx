import './App.css'
import  Navbar  from './componants/Navbar'
import  {Provider}  from 'react-redux'
import { store } from './redux/store'
import Page from './pages/Page'
function App() {
  

  return (
    <Provider store={store}>
      <Navbar />
      <Page />
    </Provider>
  )
}

export default App
