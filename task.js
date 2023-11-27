const person = {
  name: 'Olena',
  email: 'Olena@test.com',
  phone: '035984883'
};

const products = [
  {
      title: 'BouquetRose',
      price: 2000,
      flowerNumber: 35,
      category: 'Flowers'
  },
  {
      title: 'BouquetTulip',
      price: 1500,
      flowerNumber: 25,
      category: 'Flowers'
  },
  {
      title: 'BouquetGypsophila',
      price: 2500,
      flowerNumber: 10,
      category: 'Flowers'
  },
  {
      title: 'BouquetChrysanthemums',
      price: 1000,
      flowerNumber: 15,
      category: 'Flowers'
  },
  {
      title: 'BouquetDaisies',
      price: 1250,
      flowerNumber: 21,
      category: 'Flowers'
  }
];

const delivery = {
  title: 'BouquetGypsophila',
  person: 'Allia12@test.com',
  deliveryPrice: 250,
  from: 'вулиця Незалежності, 36A, Івано-Франківськ, Івано-Франківська область, 76000',
  to: 'Івано-Франківськ, вул.Галицька , 76000',
  status: 'new',
  error: null,
  orderItems: [],

  setStatus: function (newStatus) {
      this.status = newStatus;
  },

  addProductToOrder: function (productTitle, quantity) {
      const product = products.find(prod => prod.title === productTitle);
      if (product) {
          const orderItem = {
              title: product.title,
              price: product.price,
              quantity
          };
          this.orderItems.push(orderItem);
          console.log(`Додано ${quantity} шт. ${product.title} до замовлення.`);
          this.updateTotal();
      } else {
          console.log(`Товар з назвою ${productTitle} не знайдено.`);
      }
  },

  updateTotal: function () {
      this.total = this.orderItems.reduce((total, item) => total + item.price * item.quantity, 0) + this.deliveryPrice;
  },

  placeOrder: function () {
      this.updateTotal();
      console.log(`Шановна ${person.name}, ваше замовлення на суму ${this.total} успішно оформлено.`);
  }
};

console.log(delivery);

delivery.addProductToOrder('BouquetRose', 2);
delivery.addProductToOrder('BouquetTulip', 1);

delivery.setStatus('processing');

delivery.placeOrder();
