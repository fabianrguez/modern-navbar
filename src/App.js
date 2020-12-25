import { useState } from 'react';
import {
  Nav,
  NavButton,
  NavIcon,
  Phone,
  NavText,
  Content,
  Burger,
  Layout,
  Greeting,
  Name,
  Hi,
  Image,
} from './styles';

import image from './photo.jpeg';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <Phone>
        <Nav>
          <NavButton>
            <NavIcon className="uil uil-home" />
            <NavText>Home</NavText>
          </NavButton>
          <NavButton>
            <NavIcon className="uil uil-cloud-download" />
            <NavText>About</NavText>
          </NavButton>
          <NavButton>
            <NavIcon className="uil uil-calendar-alt" />
            <NavText>Docs</NavText>
          </NavButton>
          <NavButton>
            <NavIcon className="uil uil-signout" />
            <NavText>Logout</NavText>
          </NavButton>
        </Nav>
        <Content open={open}>
          <Burger onClick={() => setOpen(!open)} className="uil uil-bars" />
          <Greeting>
            <Hi>Hello, </Hi>
            <Name>Mr. Fabián</Name>
            <Image src={image} alt=""/>
          </Greeting>
        </Content>
      </Phone>
    </Layout>
  );
}

export default App;
