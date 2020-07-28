import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Olá! Você acessou a TrollFlix. Aqui você encontrará dicas de séries, músicas, canais de programação e jogos. Será uma forma de compartilhar com o mundo conteúdos que acho incríveis e espero que agradem alguns de vocês também. A TrollFlix surgiu como projeto da Imersão React da Alura. Não deixa de acompanhar a Alura nas redes sociais para ficar por dentro de todo esse conteúdo sensacional e confere a plataforma, são mais de mil cursos, quem sabe tu encontra aquele que faz o coração bater mais rápido?!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />             

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

        

      <Footer />
    </div>
  );
}

export default App;