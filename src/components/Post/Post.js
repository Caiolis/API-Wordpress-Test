import { Container, Title, Subtitle } from "./styled";

export default function Post({ title, excerpt, link }) {
  return (
    <Container> 
      <div>
        <img src="https://vipimune.com.br/wp-content/uploads/2023/04/Vacinacao-corporativa-por-que-implementar-em-2023-637x478.jpg"/>
      </div>

      <Title><a href={link} target="_blank">{title}</a></Title>

      <Subtitle><a href={link} target="_blank">{excerpt}</a></Subtitle>
    </Container>
  );
}