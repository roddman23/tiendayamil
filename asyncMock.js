const products = [
    {
      id: 1,
      category: 'nba',
      name: 'Camiseta NBA Lakers',
      description: 'Camiseta oficial de los Lakers de Los Ángeles.',
      price: 40,
      image: '/public/lakers.jpg',
    },
    {
      id: 2,
      category: 'nba',
      name: 'Camiseta NBA Bulls',
      description: 'Camiseta oficial de los Bulls de Chicago.',
      price: 35,
      image: '/public/bulls.jpg',
    },
    {
      id: 3,
      category: 'nba',
      name: 'Camiseta NBA Warriors',
      description: 'Camiseta oficial de los Warriors de Golden State.',
      price: 38,
      image: '/public/warriors.jpg',
    },
    {
      id: 4,
      category: 'nfl',
      name: 'Jersey NFL Patriots',
      description: 'Jersey oficial de los New England Patriots.',
      price: 50,
      image: '/public/patriots.jpg',
    },
    {
      id: 5,
      category: 'nfl',
      name: 'Jersey NFL Cowboys',
      description: 'Jersey oficial de los Dallas Cowboys.',
      price: 45,
      image: '/public/cowboys.jpg',
    },
    {
      id: 6,
      category: 'nfl',
      name: 'Jersey NFL Packers',
      description: 'Jersey oficial de los Green Bay Packers.',
      price: 48,
      image: '/public/packers.jpg',
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === itemId));
      }, 1000);
    });
  };
  