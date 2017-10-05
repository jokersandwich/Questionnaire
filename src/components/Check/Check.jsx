import React from 'react';
import createG2 from 'g2-react';
import { Stat } from 'g2';
import { Button } from 'antd';

const mockData = {
    key: '-3',
    title: '问卷三',
    date: '2017/12/30',
    stage: '已发布',
    questions: [{
        type: 'radio',
        title: '你的性别？',
        options: [{text: '男'}, {text: '女'}],
        value: '',
        data:[{'选项': '男'}, {'选项': '女'}, {'选项': '男'}, {'选项': '男'}, {'选项': '男'}, {'选项': '女'}, {'选项': '男'}, {'选项': '女'}, {'选项': '女'}, {'选项': '男'}]
    }, {
        type: 'radio',
        title: '你的年龄？',
        options: [{text: '0-18'}, {text: '19-30'}, {text: '31-50'}, {text: '51-117'}],
        value: '',
        data: [{'选项': '0-18'}, {'选项': '19-30'}, {'选项': '19-30'}, {'选项': '31-50'}, {'选项': '51-117'}, {'选项': '19-30'}, {'选项': '0-18'}, {'选项': '19-30'}, {'选项': '0-18'}, {'选项': '19-30'}]
    }, {
        type: 'checkbox',
        title: '以下共享单车你使用过哪些？',
        options: [{text: '摩拜'}, {text: 'ofo'}, {text: 'bulegogo'}, {text: '小鸣单车'}, {text: '其它'}],
        value: [],
        data: [{'选项': '摩拜'}, {'选项': 'ofo'}, {'选项': 'bulegogo'}, {'选项': '小鸣单车'}, {'选项': '其它'}]
    }, {
        type: 'checkbox',
        title: '你是通过哪些途径了解共享单车的？',
        options: [{text: '朋友推荐'}, {text: '社交媒体'}, {text: '海报广告'}, {text: '路上看到'}, {text: '其它'}],
        value: [],
        data: [{'选项': '朋友推荐'}, {'选项': '社交媒体'}, {'选项': '海报广告'}, {'选项': '路上看到'}, {'选项': '其它'}]
    }, {
        type: 'checkbox',
        title: '你使用共享单车的原因在于？',
        options: [{text: '低碳环保'}, {text: '锻炼身体'}, {text: '出行快捷'}, {text: '现在很流行'}, {text: '喜欢骑行的感觉'}, {text: '其它'}],
        value: [],
        data: [{'选项': '低碳环保'}, {'选项': '锻炼身体'}, {'选项': '出行快捷'}, {'选项': '现在很流行'}, {'选项': '喜欢骑行的感觉'}, {'选项': '其它'}]
    }, {
        type: 'checkbox',
        title: '你认为对于共享单车来说，哪些因素比较重要？',
        options: [{text: '价格'}, {text: '舒适度'}, {text: '安全性'}, {text: '便捷性'}, {text: '外观设计'}, {text: '其它'}],
        value: [],
        data: [{'选项': '价格'}, {'选项': '舒适度'}, {'选项': '安全性'}, {'选项': '便捷性'}, {'选项': '外观设计'}, {'选项': '其它'}]
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

const Pie = createG2(chart => {
    chart.coord('theta');
    chart.intervalStack().position(Stat.summary.proportion()).color('选项');
    chart.render();
});

class PieChart extends React.Component {
    render() {
        return (
            <div>
                <Pie
                    data={this.props.data}
                    width={500}
                    height={240}
                    plotCfg={{ margin: [20, 150, 20, 20] }}
                 />
            </div>
        );
    }
}

class Check extends React.Component {
    constructor(props) {
        super(props);
        this.handleReturn = this.handleReturn.bind(this);
        this.state = mockData;
    }

    handleReturn() {
        this.props.history.push('/');
    }

    getTitle() {
        return (
            <div className="editTitle" style={{ margin: '0 20px 20px 20px', padding: 20, textAlign: 'center' }} onClick={this.handleTitleClick}>
                <h2><strong>{this.state.title}</strong></h2>
            </div>
        );
    }

    getCharts() {
        let questions = this.state.questions;
        return questions.map((question, questionIndex) => {
            if (question.type == 'radio') {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }} key={questionIndex}>
                        <span>Q{questionIndex + 1}</span>
                        <span style={{ marginLeft: 8 }}>{question.title}</span>
                        <div style={{ marginLeft: 3, marginTop: 8 }}>
                            <PieChart data={question.data} />
                        </div>
                    </div>
                );
            } else if (question.type == 'checkbox') {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }} key={questionIndex}>
                        <span>Q{questionIndex + 1}</span>
                        <span style={{ marginLeft: 8 }}>{question.title}</span>
                        <div style={{ marginLeft: 3, marginTop: 8 }}>
                            <PieChart data={question.data} />
                        </div>
                    </div>
                );
            }
        })
    }

    getFooter() {
        return (
            <div style={{ padding: 20, textAlign: 'center' }}>
                <Button size="large" onClick={this.handleReturn}>返回主页</Button>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.getTitle()}
                <div style={{ marginBottom: 20, padding: 20, borderTop: '2px solid #ccc', borderBottom: '2px solid #ccc' }}>
                    {this.getCharts()}
                </div>
                {this.getFooter()}
            </div>
        );
    }
}

export default Check;