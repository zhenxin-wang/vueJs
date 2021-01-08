const data = [
    {
        id:1,
        title:'标题1',
        status:0,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题2',
        status:1,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题3',
        status:2,
        channel_id:2,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题4',
        status:3,
        channel_id:2,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题5',
        status:4,
        channel_id:3,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题6',
        status:2,
        channel_id:4,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题7',
        status:1,
        channel_id:3,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题8',
        status:1,
        channel_id:4,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题9',
        status:1,
        channel_id:5,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题10',
        status:1,
        channel_id:6,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题11',
        status:1,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题12',
        status:1,
        channel_id:6,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题13',
        status:0,
        channel_id:5,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题14',
        status:1,
        channel_id:7,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题15',
        status:2,
        channel_id:7,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题16',
        status:3,
        channel_id:8,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题17',
        status:4,
        channel_id:8,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题18',
        status:0,
        channel_id:8,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题19',
        status:1,
        channel_id:9,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题20',
        status:2,
        channel_id:9,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题21',
        status:3,
        channel_id:9,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题22',
        status:4,
        channel_id:9,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题23',
        status:0,
        channel_id:2,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题24',
        status:1,
        channel_id:2,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题25',
        status:2,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题26',
        status:3,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题27',
        status:4,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题28',
        status:0,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题29',
        status:1,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题30',
        status:2,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题31',
        status:3,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题32',
        status:4,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题33',
        status:0,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题34',
        status:1,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题35',
        status:2,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题36',
        status:3,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题37',
        status:4,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg'},
        content:'aaaaaaaaa'
    },{
        id:1,
        title:'标题38',
        status:0,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题39',
        status:1,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题40',
        status:2,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题41',
        status:3,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题42',
        status:4,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题43',
        status:0,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题44',
        status:1,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题45',
        status:2,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题46',
        status:3,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题47',
        status:4,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg'},
        content:'aaaaaaaaa'
    },{
        id:1,
        title:'标题48',
        status:0,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题49',
        status:1,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题50',
        status:2,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题51',
        status:3,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'},
        content:'aaaaaaaaa'
    },
    {
        id:1,
        title:'标题52',
        status:4,
        channel_id:1,
        begin_pubdate: '2019-07-07 12:12:12',
        end_pubdate: '2020-07-07 12:12:12',
        cover:{images:'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg'},
        content:'aaaaaaaaa'
    },




]
const channels = [
    {
        id:1,
        name:'java'
    },
    {
        id:2,
        name:'c++'
    },
    {
        id:3,
        name:'python'
    },
    {
        id:4,
        name:'c'
    },
    {
        id:5,
        name:'vue'
    },
    {
        id:6,
        name:'js'
    },
    {
        id:7,
        name:'html'
    },
    {
        id:8,
        name:'css'
    },
    {
        id:9,
        name:'ios'
    },
    ]
export function getArticleData(page,count,form) {

    var aData = data
    if ( form.status != 'null' && form.status != null && form.status != undefined && form.status != ""){
        aData = data.filter(item => item.status === parseInt(form.status))

    }
    if (form.channelId != 'null' && form.channelId != null && form.channelId != undefined && form.channelId != ""){
        aData = aData.filter(item => item.channel_id === parseInt(form.channelId))

    }
    return aData.slice((page-1)*count,(page+1)*count)

}

export function getArticleChannels() {
    return channels
}
