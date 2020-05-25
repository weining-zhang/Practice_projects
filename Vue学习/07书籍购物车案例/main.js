const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2020-1',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2020-4',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《JS高级程序设计》',
        date: '2019-8',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《CSS3权威指南》',
        date: '2016-7',
        price: 128.00,
        count: 1
      }
    ]
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count;
      // }
      // return totalPrice;
      //使用数组reduce方法更简洁
      this.books.reduce((total, book) => total + book.price * book.count);
    }
  },
  methods: {
    decrement(index) {
      this.books[index].count--;
      // console.log('decre', index);
    },
    increment(index) {
      this.books[index].count++;
      // console.log('incre', index);
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    }
  },
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2)
    }
  }
})