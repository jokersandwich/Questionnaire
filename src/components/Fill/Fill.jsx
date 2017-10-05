import React from 'react';
import { Input, Button, Radio, Checkbox, Modal } from 'antd';
import mockData from '../mockData';

const data = mockData[1];

class Fill extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmitQuestionnaire = this.handleSubmitQuestionnaire.bind(this);
        this.state = data;
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