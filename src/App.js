// Libraries
import axios from "axios";
import { useEffect, useState } from "react";

// Components
import { GlobalStyle } from "./GlobalStyles";
import { Container, SubContainer } from "./styled";
import Post from "./components/Post/Post";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promisse = axios.get("https://example-website/wp-json/wp/v2/posts");
    promisse.then((response) => {
      setData([...response.data]);
    });
    promisse.catch((error) => console.log(error));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <SubContainer>
        {data.map((item) => (
          <Post title={item.title.rendered} excerpt={item.excerpt.rendered} link={item.link}/>
        ))}
        </SubContainer>
      </Container>
    </>
  );
}
