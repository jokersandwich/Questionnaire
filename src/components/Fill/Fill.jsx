import React from 'react';
import { Input, Button, Radio, Checkbox, Modal } from 'antd';

const mockData = {
    key: '-2',
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
};

class Fill extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmitQuestionnaire = this.handleSubmitQuestionnaire.bind(this);
        this.state = mockData;
    }

    handleRadioChange(e, questionIndex) {
        let { questions } = this.state;
        questions[questionIndex].value = e.target.value;
        this.setState({
            questions: questions
        });
    }

    handleCheckboxChange(checkedValues, questionIndex) {
        let { questions } = this.state;
        questions[questionIndex].value = checkedValues;
        this.setState({
            questions: questions
        });
    }

    handleTextChange(e, questionIndex) {
        let { questions } = this.state;
        questions[questionIndex].text = e.target.value;
        this.setState({
            questions: questions
        });
    }
    
    handleSubmitQuestionnaire() {
        let { questions } = this.state;
        let answer = 0, unnecessary = 0;
        questions.forEach((item) => {
            switch (item.type) {
                case 'radio':
                    if (item.value !== '') {
                        answer ++;
                    }
                    break;
                case 'checkbox':
                    if (item.value.length > 0) {
                        answer ++;
                    }
                    break;
                    
                case 'textarea':
                    if (item.text !== '') {
                        answer ++;
                    }
                    if (!item.required) {
                        unnecessary ++;
                    }
                    break;
            }
        });
        if (answer >= questions.length - unnecessary) {
            const me = this;
            Modal.confirm({
                title: '确认提交问卷吗？',
                onOk() {
                    let questionsWithData = questions.map((item) => {
                        switch (item.type) {
                            case 'radio':
                            case 'checkbox':
                                item.data.push(item.value);
                                break;
                            case 'textarea':
                                item.data.push(item.text);
                                break;
                        }
                        return item;
                    });
                    me.setState({
                        questions: questionsWithData
                    });
                    me.props.history.push('/');
                }
            });
        } else {
            Modal.warning({
                title: '请完整填写问卷',
                content: '还有'+ (questions.length - unnecessary - answer) +'个问题没有填写'
            }); 
        }
    }

    getTitle() {
        return (
            <div className="editTitle" style={{ margin: '0 20px 20px 20px', padding: 20, textAlign: 'center' }} onClick={this.handleTitleClick}>
                <h2><strong>{this.state.title}</strong></h2>
            </div>
        );
    }

    getQuestions() {
        let questions = this.state.questions;
        const { TextArea } = Input;
        const optionStyle = {
            display: 'block',
            height: '32px',
            lineHeight: '32px'
        };
        return questions.map((question, questionIndex, array) => {
            if (question.type === 'radio') {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }} key={questionIndex}>
                        <span>Q{questionIndex + 1}</span>
                        <span style={{ marginLeft: 8 }}>{question.title}</span>
                        <div style={{ marginLeft: 3, marginTop: 8 }}>
                            <Radio.Group onChange={e => this.handleRadioChange(e, questionIndex)}>
                                {question.options.map((option, optionIndex) => {
                                    return (
                                        <Radio style={optionStyle} value={option.text} key={optionIndex}>{option.text}</Radio>
                                    );
                                })}
                            </Radio.Group>
                        </div>
                    </div>
                );
            } else if (question.type === 'checkbox') {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }} key={questionIndex}>
                        <span>Q{questionIndex + 1}</span>
                        <span style={{ marginLeft: 8 }}>{question.title}</span>
                        <div style={{ marginLeft: 3, marginTop: 8 }}>
                            <Checkbox.Group onChange={(checkedValues) => this.handleCheckboxChange(checkedValues, questionIndex)}>
                                {question.options.map((option, optionIndex) => {
                                    return (
                                        <Checkbox style={optionStyle} value={option.text} key={optionIndex}>{option.text}</Checkbox>
                                    );
                                })}
                            </Checkbox.Group>
                        </div>
                    </div>
                );
            } else if (question.type === 'textarea' ) {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }}  key={questionIndex}>
                        <span>Q{questionIndex + 1}</span>
                        <span style={{ marginLeft: 8 }}>{question.title}</span>
                        <div style={{ margin: '16px 4px' }}>
                            <TextArea rows={5} value={question.text} onChange={(e) => this.handleTextChange(e, questionIndex)} />
                            <Checkbox style={{marginTop: 8 }} defaultChecked={question.required} disabled>此题是否必填</Checkbox>
                        </div>
                    </div>
                );
            }
            else {
                return null;
            }
        })
    }

    getFooter() {
        return (
            <div style={{ padding: 20, textAlign: 'center' }}>
                <Button type="primary" size="large" onClick={this.handleSubmitQuestionnaire}>提交问卷</Button>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.getTitle()}
                <div style={{ marginBottom: 20, padding: 20, borderTop: '2px solid #ccc', borderBottom: '2px solid #ccc' }}>
                    {this.getQuestions()}
                </div>
                {this.getFooter()}
            </div>
        );
    }
}

export default Fill;