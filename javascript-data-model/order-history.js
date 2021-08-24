var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    orderTotal: 34.00,
    shipTo: 'JS Masher',
    delivered: 'Aug 8, 2020',
    itemsInOrder: [
      {
        itemName: 'JavaScript for impatient programmers',
        itemCost: 31.55,
        returnWindowClosed: 'Sep 7, 2020',
        otherItemInfo: {
          author: 'Rauschmayer, Dr. Axel'
        }
      }
    ]
  },
  {
    orderPlaced: 'July 19, 2020',
    orderTotal: 44.53,
    shipTo: 'JS Masher',
    delivered: 'Jul 20, 2020',
    itemsInOrder: [
      {
        itemName: 'The Timeless Way of Building',
        itemCost: 41.33,
        returnWindowClosed: 'Aug 19, 2020',
        otherItemInfo: {
          author: 'Alexander, Christopher'
        }
      }
    ]
  },
  {
    orderPlaced: 'July 4, 2020',
    orderTotal: 17.22,
    shipTo: 'JS Masher',
    delivered: 'Jul 7, 2020',
    itemsInOrder: [
      {
        itemName: 'Gamecube Controller Adapter',
        itemCost: 15.98,
        returnWindowClosed: 'Aug 5, 2020',
        otherItemInfo: {
        }
      }
    ]
  },
  {
    orderPlaced: 'July 3, 2020',
    orderTotal: 138.93,
    shipTo: 'JS Masher',
    delivered: 'Jul 5, 2020',
    itemsInOrder: [
      {
        itemName: 'GameCube Controller',
        itemCost: 94.95,
        returnWindowClosed: 'Aug 4, 2020',
        otherItemInfo: {

        }
      },
      {
        itemName: 'The Art of Sql',
        itemCost: 33.99,
        returnWindowClosed: 'Aug 4, 2020',
        otherItemInfo: {
          author: 'Faroult, Stephane'
        }
      }
    ]
  }
];

console.log(orderHistory[3].itemsInOrder[1].itemName);
