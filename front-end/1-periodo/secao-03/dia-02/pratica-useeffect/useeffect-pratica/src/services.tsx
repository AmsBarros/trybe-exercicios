export const fetchCoordinates = async () => {
  const response = await fetch(
    'https://api.wheretheiss.at/v1/satellites/25544',
  );

  if (!response.ok) {
    throw new Error('Failed to fetch coordinates');
  }

  const coordinates = await response.json();

  const latitude = Number(coordinates.latitude.toFixed(4));
  const longitude = Number(coordinates.longitude.toFixed(4));

  return { latitude, longitude };
};

/*
Arquivo responsável por armazenar e exportar todos os serviços da aplicação. Nesse caso, as requisições feitas à API.
Então estamos exportando a função fetchCoordinates com o endpoint que retorna um objeto com as chaves latitude e longitude.
Nesse caso, foi usado .toFixed(4) para renderizar apenas o valor com 4 números depois da vírgula e Number() para garantir que o valor armazenado será um number.
*/
