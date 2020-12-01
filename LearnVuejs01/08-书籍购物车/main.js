const app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id:1,
                name: '算法导论',
                date: '2006-3',
                price: 55.00,
                count: 1
            },
            {
                id:2,
                name: '算法',
                date: '2006-3',
                price: 55.00,
                count: 1
            },
            {
                id:3,
                name: '导论',
                date: '2006-3',
                price: 55.00,
                count: 1
            },
            {
                id:4,
                name: 'dadsf',
                date: '2006-3',
                price: 55.00,
                count: 1
            },
            {
                id:5,
                name: '算法导论',
                date: '2006-3',
                price: 55.00,
                count: 1
            }
        ]
    },
    methods: {
        increment(obj){
            obj.count++
        },
        decrement(obj){
            if(obj.count > 1){
                obj.count--
            }
        },
        delBtn(index){
            this.list.splice(index,1)
        }

    },
    computed:{
        totalPrice(){
            // let totalPrice = 0
            // for(let i of this.list){
            //     // totalPrice += this.list[i].price * this.list[i].count
            //     totalPrice += i.price * i.count
            // }
            //reduce 数据汇总，filter过滤数组，map
            let totalPrice = this.list.reduce(function (prevalue,book) {
                return prevalue + book.price * book.count
            },0)

            return totalPrice
        }
    },
    //过滤器
    filters: {
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    }
})
