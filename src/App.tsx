import NavbarComponent from './components/navbar';
import TabComponent from './components/tab';
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <>
      <NavbarComponent />
      <Container>
        <TabComponent />
      </Container>
    </>
  )
}

export default App
