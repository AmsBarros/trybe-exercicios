const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (fullOrder) => {
    let deliveryPerson = fullOrder.order.delivery.deliveryPerson;
    let customerName = fullOrder.name;
    let costumerPhone = fullOrder.phoneNumber;
    let streetAdress = fullOrder.address['street'];
    let adressNumber = fullOrder.address.number;
    let apartmentNumber = fullOrder.address.apartment;
   return `Olá, ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${costumerPhone}, ${streetAdress}, Número: ${adressNumber}, AP: ${apartmentNumber}.`
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    fullOrder.name = 'Luiz Silva';
    fullOrder.payment['total'] = 50;
    let pizzaOrder = Object.keys(fullOrder.order.pizza).join(', ');
    let drinkOrder = fullOrder.order.drinks.coke['type'];  

    return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzaOrder} e ${drinkOrder} é R$ ${fullOrder.payment.total},00.`
    //return `Olá, ${costumerName}, o valor total de seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke['type']} é R$ ${order.payment.total},00.`    
  }
  
  console.log(orderModifier(order));


  