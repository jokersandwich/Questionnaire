import React from 'react';

const mockData = {
    key: '-2',
    title: '问卷二',
    date: '2017/12/30',
    stage: '未发布',
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
        options: [{text: '低碳环保'}, {text: '锻炼身体'}, {text: '出行快捷'}, {text: '喜欢骑行'}, {text: '其它'}],
        value: [],
        data: []
    }, {
        type: 'checkbox',
        title: '你认为对于共享单车来说，哪些因素比较重要？',
        options: [{text: '外观设计'}, {text: '舒适度'}, {text: '安全性'}, {text: '便捷性'}, {text: '其它'}],
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
};

const Check = () => (<div><h2>Check</h2></div>);

export default Check;