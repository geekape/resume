new Vue({
    el: '#app',
    data: {
        works: [{
            name: '深圳软数科技',
            time: '2020.11-2022.02',
            desc: '担任前端负责人，负责前端工具链的维护，自研产品小程序，管理后台，app的更新和维护，搭建前端文档，协调各个成员之间的工作'
        }, {
            name: '深圳优创智投科技有限公司',
            time: '2019.04-2020.06',
            desc: '参与团队基建，做技术分享，提高团队在业务开发上的效率； 和项目经理，设计，后端沟通，制定合适的开发方案和开发周期及报价； 负责公司前端团队新成员的招募，培训等；'
        }, {
            name: '圆梦云科技',
            time: '2018.04-2019.05',
            desc: '维护已有项目，修复Bug，对产品的进行优化和迭代测试工作； 担任前端负责人，搭建技术框架，制定前端规范，前后端分离架构，组件化来提高复用和可维护性；'
        },],
        projectCategorys: [
            {
                name: '所有',
                key: '*'
            },
            {
                name: '全栈',
                key: '.quanzhan'
            },
            {
                name: '小程序',
                key: '.miniapp'
            },
            {
                name: 'APP',
                key: '.app'
            },
            {
                name: 'H5',
                key: '.h5'
            },
            {
                name: 'Web',
                key: '.web'
            },
            {
                name: '游戏',
                key: '.game'
            }

        ],
        projects: [
            {
                key: 'quanzhan',
                dataTitle: '极客猿导航',
                dataCategory: 'node全栈',
                image: './images/geek-nav.jpg'
            },
            {
                key: 'quanzhan',
                dataTitle: '极客猿导航',
                dataCategory: 'node全栈',
                image: './images/geek-nav.jpg'
            }
        ]
    }
})