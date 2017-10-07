const mockData = [{
    key: '-1',
    index: '0',
    title: '问卷一',
    date: '2017/12/30',
    stage: '未发布',
    questions: [{
        type: 'radio',
        title: '你是否使用过 GitHub 社交网站？',
        options: [{text: '是'}, {text: '我不知道 GitHub，我打算当成微博来填'}],
        value: '',
        data:[]
    }, {
        type: 'radio',
        title: '你使用 GitHub 的频率是？',
        options: [{text: '几乎每天都会用'}, {text: '每周都会用'}, {text: '每个月都会用'}, {text: '很少使用'}],
        value: '',
        data: []
    }, {
        type: 'checkbox',
        title: '你使用 GitHub 的目的是？',
        options: [{text: '展现自己多彩的生活'}, {text: '有机会结交更多的朋友'}, {text: '关注名人动态'}, {text: '工作需要'}],
        value: [],
        data: []
    }, {
        type: 'checkbox',
        title: '你在 GitHub 上主要做什么？',
        options: [{text: '分享新鲜事'}, {text: '关注热点'}, {text: '与好友互动'}, {text: '随便浏览，打发时间'}],
        value: [],
        data: []
    }, {
        type: 'checkbox',
        title: '你认为对于 GitHub 来说，哪些因素比较重要？',
        options: [{text: '界面布局好，设计美观'}, {text: '方便交到新朋友'}, {text: '能看到感兴趣的内容'}, {text: '打开速度快，不被墙'}],
        value: [],
        data: []
    }, {
        type: 'checkbox',
        title: '除了 GitHub，你还使用以下哪些社交网站？',
        options: [{text: 'bilibili'}, {text: '知乎'}, {text: '蓝色国度'}, {text: '非常男孩'}],
        value: [],
        data: []
    }, {
        type: 'textarea',
        title: '你对 GitHub 还有什么其它想说的吗？',
        text: '',
        required: false,
        data: []
    }],
    titleEditable: false,
    addAreaVisible: false
}, {
    key: '-2',
    index: '1',
    title: '问卷二',
    date: '2017/12/30',
    stage: '发布中',
    questions: [{
        type: 'radio',
        title: '你的性别？',
        options: [{text: '男'}, {text: '女'}],
        value: '',
        data:[]
    }, {
        type: 'radio',
        title: '你的年龄？',
        options: [{text: '0-18'}, {text: '19-30'}, {text: '31-50'}, {text: '51-117'}],
        value: '',
        data: []
    }, {
        type: 'checkbox',
        title: '以下共享单车你使用过哪些？',
        options: [{text: '摩拜'}, {text: 'ofo'}, {text: 'bulegogo'}, {text: '小鸣单车'}, {text: '其它'}],
        value: [],
        data: []
    }, {
        type: 'checkbox',
        title: '你是通过哪些途径了解共享单车的？',
        options: [{text: '朋友推荐'}, {text: '社交媒体'}, {text: '海报广告'}, {text: '路上看到'}, {text: '其它'}],
        value: [],
        data: []
    }, {
        type: 'checkbox',
        title: '你使用共享单车的原因在于？',
        options: [{text: '低碳环保'}, {text: '锻炼身体'}, {text: '出行快捷'}, {text: '现在很流行'}, {text: '喜欢骑行的感觉'}, {text: '其它'}],
        value: [],
        data: []
    }, {
        type: 'checkbox',
        title: '你认为对于共享单车来说，哪些因素比较重要？',
        options: [{text: '价格'}, {text: '舒适度'}, {text: '安全性'}, {text: '便捷性'}, {text: '外观设计'}, {text: '其它'}],
        value: [],
        data: []
    }, {
        type: 'textarea',
        title: '关于共享单车还有什么其它想说的吗？',
        text: '',
        required: false,
        data: []
    }],
    titleEditable: false,
    addAreaVisible: false
}, {
    key: '-3',
    index: '2',
    title: '问卷三',
    date: '2017/9/30',
    stage: '已结束',
    questions: [{
        type: 'radio',
        title: '你的性别？',
        options: [{text: '男'}, {text: '女'}],
        value: '',
        data:[{'选项': '男'}, {'选项': '女'}, {'选项': '男'}, {'选项': '男'}, {'选项': '男'}, {'选项': '女'}, {'选项': '男'}, {'选项': '女'}, {'选项': '男'}, {'选项': '男'}]
    }, {
        type: 'radio',
        title: '你的年龄？',
        options: [{text: '0-18'}, {text: '19-30'}, {text: '31-50'}, {text: '51-117'}],
        value: '',
        data: [{'选项': '0-18'}, {'选项': '19-30'}, {'选项': '19-30'}, {'选项': '31-50'}, {'选项': '51-117'}, {'选项': '19-30'}, {'选项': '31-50'}, {'选项': '19-30'}, {'选项': '0-18'}, {'选项': '19-30'}]
    }, {
        type: 'checkbox',
        title: '以下共享单车你使用过哪些？',
        options: [{text: '摩拜'}, {text: 'ofo'}, {text: 'bulegogo'}, {text: '小鸣单车'}, {text: '其它'}],
        value: [],
        data: [{'选项': '摩拜'}, {'选项': 'ofo'}, {'选项': 'bulegogo'}, {'选项': '摩拜'}, {'选项': 'ofo'}, {'选项': 'ofo'}, {'选项': 'bulegogo'}, {'选项': '摩拜'}, {'选项': 'ofo'}, {'选项': '摩拜'}, {'选项': '摩拜'}, {'选项': 'ofo'}, {'选项': 'ofo'}, {'选项': '摩拜'},{'选项': 'bulegogo'}, {'选项': '小鸣单车'}, {'选项': '其它'}]
    }, {
        type: 'checkbox',
        title: '你是通过哪些途径了解共享单车的？',
        options: [{text: '朋友推荐'}, {text: '社交媒体'}, {text: '海报广告'}, {text: '路上看到'}, {text: '其它'}],
        value: [],
        data: [{'选项': '朋友推荐'}, {'选项': '社交媒体'}, {'选项': '朋友推荐'}, {'选项': '朋友推荐'},  {'选项': '路上看到'}, {'选项': '路上看到'}, {'选项': '其它'}, {'选项': '朋友推荐'}, {'选项': '路上看到'}, {'选项': '社交媒体'}, {'选项': '海报广告'}, {'选项': '路上看到'}, {'选项': '其它'}]
    }, {
        type: 'checkbox',
        title: '你使用共享单车的原因在于？',
        options: [{text: '低碳环保'}, {text: '锻炼身体'}, {text: '出行快捷'}, {text: '现在很流行'}, {text: '喜欢骑行的感觉'}, {text: '其它'}],
        value: [],
        data: [{'选项': '低碳环保'}, {'选项': '锻炼身体'}, {'选项': '出行快捷'}, {'选项': '出行快捷'}, {'选项': '低碳环保'}, {'选项': '锻炼身体'}, {'选项': '出行快捷'}, {'选项': '喜欢骑行的感觉'}, {'选项': '低碳环保'}, {'选项': '锻炼身体'}, {'选项': '出行快捷'}, {'选项': '喜欢骑行的感觉'}, {'选项': '其它'},{'选项': '低碳环保'}, {'选项': '锻炼身体'}, {'选项': '出行快捷'}, {'选项': '现在很流行'}, {'选项': '喜欢骑行的感觉'}]
    }, {
        type: 'checkbox',
        title: '你认为对于共享单车来说，哪些因素比较重要？',
        options: [{text: '价格'}, {text: '舒适度'}, {text: '安全性'}, {text: '便捷性'}, {text: '外观设计'}, {text: '其它'}],
        value: [],
        data: [{'选项': '价格'}, {'选项': '舒适度'}, {'选项': '便捷性'}, {'选项': '便捷性'}, {'选项': '安全性'}, {'选项': '外观设计'}, {'选项': '便捷性'}, {'选项': '外观设计'}, {'选项': '舒适度'}, {'选项': '安全性'}, {'选项': '便捷性'}, {'选项': '便捷性'}, {'选项': '舒适度'}, {'选项': '外观设计'}, {'选项': '舒适度'}, {'选项': '其它'}, {'选项': '舒适度'}, {'选项': '安全性'}, {'选项': '便捷性'}, {'选项': '外观设计'}]
    }, {
        type: 'textarea',
        title: '关于共享单车还有什么其它想说的吗？',
        text: '',
        required: false,
        data: []
    }],
    titleEditable: false,
    addAreaVisible: false
}];

export default mockData;