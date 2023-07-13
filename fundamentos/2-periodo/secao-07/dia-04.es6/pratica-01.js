// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Kiwi', 'Morango', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Sucrilhos', 'Amendoim', 'Granola'];

// Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.
const fruitSalad = (fruit, additional) => {
  const fruitSaladItems = [...fruit, ...additional];
  return fruitSaladItems;
};

console.log(fruitSalad(specialFruit, additionalItens));

