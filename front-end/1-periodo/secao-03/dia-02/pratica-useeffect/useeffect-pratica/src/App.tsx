import { useEffect, useState } from 'react';
import './App.css';
import { fetchCoordinates } from './services';

// Tipagem do objeto que é armazenado no estado do componente.
type Coordinates = {
  latitude: number;
  longitude: number;
};

function App() {
  // Estado do componenente que irá armazenar um objeto com as chaves latitude e longitude.
  const [coordinates, setCoordinates] = useState<Coordinates | null >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função assíncrona dentro do useEffect que vai aguardar o retorno de fetchCoordinates e armazenar no estado do componente. Logo após a criação, vem a chamada da função para que ela seja executada. No segundo parâmetro foi passado um array vazio para que a callback seja executada apenas uma vez, após a primeira renderização do componente App.
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
      setLoading(false);
    }
    fetchData();

    // Configuração do intervalo para buscar as coordenadas a cada 3 segundos.
    const intervalId = setInterval(() => {
      // Chama fetchData para atualizar as coordenadas.
      fetchData();
    }, 3000);

    // Função de limpeza que é executada quando o componente é desmontado.
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Array vazio indica que o efeito é executado apenas na montagem inicial.

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>International Space Station Location Tracker</h1>
      {/* Condicional que verifica se o estado já está preenchido com as informações necessárias. Portanto, o componente vai retornar as coordenadas apenas quando o estado de coordinates estiver com os valoes armazenados. Ou seja, apenas após a execução do useEffect */}
      {coordinates && (
        <>
          <h2>{`Latitude: ${coordinates.latitude}`}</h2>
          <h2>{`Longitude: ${coordinates.longitude}`}</h2>
        </>
      )}
    </>
  );
}

export default App;

/*
1. No início, os estados coordinates e loading são configurados no estado inicial.
2. O useEffect é usado para buscar as coordenadas iniciais do serviço fetchCoordinates e configurar um intervalo de atualização para buscar as coordenadas a cada 3 segundos.
3. A função fetchData é uma função assíncrona que busca as coordenadas e atualiza o estado coordinates com os valores de latitude e longitude. A propriedade loading é definida como false para indicar que as coordenadas foram carregadas.
4. A função fetchData é chamada inicialmente para buscar as coordenadas iniciais.
5. Um intervalo é configurado usando setInterval para chamar a função fetchData a cada 3 segundos e atualizar as coordenadas.
6. A função de limpeza retornada pelo useEffect é responsável por limpar o intervalo criado quando o componente é desmontado.
7. O componente renderiza "Loading..." enquanto as coordenadas estão sendo buscadas.
8. Quando as coordenadas são carregadas (loading é false), o título do rastreador e as coordenadas (latitude e longitude) são renderizados. */
