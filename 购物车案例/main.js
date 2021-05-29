const app = new Vue({
  el: "#app",
  data: {
    message: "hello world !",
    books: [
      {id: '10201', name: '算法导论', publicationDate: '2001-05-23', price: 85.00, quantity: 1},
      {id: '10402', name: '计算机组成原理', publicationDate: '2015-04-16', price: 69.00, quantity: 1},
      {id: '10503', name: '操作系统', publicationDate: '2021-03-13', price: 49.00, quantity: 1},
      {id: '10809', name: '计算机网络', publicationDate: '2008-11-21', price: 59.00, quantity: 1},
      {id: '15037', name: '图解TCP/IP协议', publicationDate: '2020-05-21', price: 39.37, quantity: 1},
    ]
  },
  computed: {
    totalPrice: function (){
      let totalPrice = 0;
      for(let index = 0; index < this.books.length; index++){
        totalPrice += this.books[index].price * this.books[index].quantity;
      }
      return totalPrice;
    },
  },
  methods: {
    increment(index){
      this.books[index].quantity++;
    },
    decrement(index){
      this.books[index].quantity--;
    },
    remove(index){
      this.books.splice(index,1);
    },
  },
  /*过滤器 调用时 v1 | showPrice  会将v1作为参数传递 */
  filters:{
    showPrice(price){
      return '￥' + price.toFixed(2);
    }
  }
})