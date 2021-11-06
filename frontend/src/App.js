import './styles/app.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Header />
      <main className="py-3 test">
        <Container>
          <h2>This is the H2</h2>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
