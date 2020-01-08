module.exports = {
    "goods": {
        "code": 0,
        "slider":[
          {
            "id":17, 
            "img": "/img/01.jpg"
          },
          {
            "id":18, 
            "img": "/img/02.jpg"
          },
          {
            "id":19, 
            "img": "/img/03.jpg"
          },
          {
            "id":11, 
            "img": "/img/04.jpg"
          }
        ],
        "keys":[
          "Fe", "Python", "Java","Ai","Bigdata"
        ],
        "data":{
          "Ai": [
            {
              "id":17,
              "title": '算法实战',
              "count": 144,
              "price": "80",
              "img": "/img/01.jpg"
            },
            {
              "id":18,
              "title": '个性化推广',
              "count": 100,
              "price": "30",
              "img": "/img/02.jpg"
            },
            {
              "id":19,
              "title": '机器学习',
              "count": 22,
              "price": "54",
              "img": "/img/03.jpg"
            }
          ],
          "Bigdata": [
            {
              "id": 1,
              "title": "大数据分析",
              "count": 33,
              "price": "32",
              "img": "/img/04.jpg"
            }
          ],
          "Fe": [
            {
              "id": 11,
              "title": "VUE实战",
              "count": 455,
              "price":"193",
              "img": "/img/05.jpg"
            }
          ],
          "Java": [
            {
              "id": 7,
              "title": "java编程",
              "count": 99,
              "price": "88",
              "img": "/img/02.jpg"
            }
          ],
          "Python": [
            {
              "id": 65,
              "title": "深度学习",
              "count": 44,
              "price": "33",
              "img": "/img/01.jpg"
            }
          ]
        }
    },
    "allGoods": [
        
        {
          "id": "17",
          "title": "算法实战",
          "desc": "机器学习算法及实战——朴素贝叶斯 朴素贝叶斯(Naive Bayes)= Naive + Bayes 。(特征条件独立 + Bayes定理)的实现。零、贝叶斯定理(Bayes' theorem)",
          "price":"19",
          "count": 144,
          "images": [
            {"img": "/img/01.jpg"},
            {"img": "/img/02.jpg"},
            {"img": "/img/03.jpg"},
            {"img": "/img/04.jpg"}
          ]
        },
        {
          "id": "18",
          "title": "个性化推广",
          "desc": "个性化营销推广策略+五度传播理念=高效品牌传播 五度传播 发布时间:07-1622:31 怎样才能让一个品牌在行业中脱颖而出,一直坚持有持久的生命力,并且给广",
          "price": "88",
          "count": 100,
          "images": [
            {"img": "/img/01.jpg"},
            {"img": "/img/02.jpg"},
            {"img": "/img/03.jpg"},
            {"img": "/img/04.jpg"}
          ]
        },
        {
          "id": "19",
          "title": "机器学习",
          "desc": "机器学习是一门多领域交叉学科，涉及概率论、统计学、逼近论、凸分析、算法复杂度理论等多门学科。专门研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能",
          "price": "33",
          "count": 22,
          "images": [
            {"img": "/img/01.jpg"},
            {"img": "/img/02.jpg"},
            {"img": "/img/03.jpg"},
            {"img": "/img/04.jpg"}
          ]
        },
        {
          "id": "1",
          "title": "大数据分析",
          "desc": "大数据用户行为分析产品 , 神策数据 , 数据分析必备工具 , 自定义多维度分析 , 深度洞察用户数据 , 可实现多维度 , 精细化的统计分析 , 秒级处理 , 实时更新 ",
          "price": "32",
          "count": 33,
          "images": [
            {"img": "/img/01.jpg"},
            {"img": "/img/02.jpg"},
            {"img": "/img/03.jpg"},
            {"img": "/img/04.jpg"}
          ]
        },
        {
          "id": "11",
          "title": "VUE实战",
          "desc": "Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式JavaScript框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，方便与第三方库或既有项目整合",
          "price":"193",
          "count": 455,
          "images": [
            {"img": "/img/01.jpg"},
            {"img": "/img/02.jpg"},
            {"img": "/img/03.jpg"},
            {"img": "/img/04.jpg"}
          ]
        },
        {
          "id": "7",
          "title": "java编程",
          "desc": "ava是一种可以撰写跨平台应用程序的面向对象的程序设计语言。Java 技术具有卓越的通用性、高效性、平台移植性和安全性,广泛应用于PC、数据中心、游戏控制台",
          "price": "88",
          "count": 99,
          "images": [
            {"img": "/img/01.jpg"},
            {"img": "/img/02.jpg"},
            {"img": "/img/03.jpg"},
            {"img": "/img/04.jpg"}
          ]
        },
        {
          "id": "65",
          "title": "深度学习",
          "desc": "深度学习(DL, Deep Learning)是机器学习(ML, Machine Learning)领域中一个新的研究方向，它被引入机器学习使其更接近于最初的目标——人工智能(AI, Artificial Intelligence)。",
          "price": "33",
          "count": 44,
          "images": [
            {"img": "/img/01.jpg"},
            {"img": "/img/02.jpg"},
            {"img": "/img/03.jpg"},
            {"img": "/img/04.jpg"}
          ]
        }
    ],
    "routes": {
        code: 0,
        route: [
          {
            path: '/',
            name: 'home',
            componentPath: '/Home'
          },
          {
            path: '/cart',
            name: 'cart',
            componentPath: '/Cart'
          },
          {
            path: '/about',
            name: 'about',
            meta: {
              auth: true
            }
          },
        ]
      }
}