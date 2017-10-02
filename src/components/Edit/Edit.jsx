import React from 'react';
import { DatePicker, Button, Input, Radio, Checkbox } from 'antd';
import style from './Edit.css';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTitleBlur = this.handleTitleBlur.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleAddRadio = this.handleAddRadio.bind(this);
        this.handleAddCheckBox = this.handleAddCheckBox.bind(this);
        this.handleAddTextArea = this.handleAddTextArea.bind(this);
        this.handleDatePick = this.handleDatePick.bind(this);
        this.state = {
            id: '',
            title: '这里是标题',
            questions: [{
                type: 'radio',
                id: '1',
                title: '单选题',
                options: [{
                    text: '选项一'
                }, {
                    text: '选项二'
                }, {
                    text: '选项三'
                }, {
                    text: '选项四'
                }]
            }, {
                type: 'checkBox',
                id: '2',
                title: '多选题',
                options: [{
                    text: '选项一'
                }, {
                    text: '选项二'
                }, {
                    text: '选项三'
                }, {
                    text: '选项四'
                }]
            }, {
                type: 'textArea',
                id: '3',
                title: '文本题',
                required: false
            }],
            date: '',
            stage: '',
            titleEditable: false,
            addAreaVisible: false
        }
    }

    handleTitleClick() {
        this.setState({
            titleEditable: true
        })
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleTitleBlur() {
        this.setState({
            titleEditable: false
        })
    }

    getTitle() {
        return (
            this.state.titleEditable ? (
                <div className="editTitle" style={{ margin: 20, padding: 20, textAlign: 'center' }} onClick={this.handleTitleClick}>
                    <Input 
                        style={{ fontSize: 18, fontWeight: 'bold', padding: 30, textAlign: 'center' }} 
                        value={this.state.title} 
                        onChange={this.handleTitleChange} 
                        onBlur={this.handleTitleBlur} 
                    />
                </div>
            ) : (
                <div className="editTitle" style={{ margin: 20, padding: 20, textAlign: 'center' }} onClick={this.handleTitleClick}>
                    <h2><strong>{this.state.title}</strong></h2>
                </div>
            )
        );
    }

    getQuestionOperator() {
        return (
            <div>
                <p style={{ float: 'right' }}>
                    <span className="questionOperate" style={{ marginLeft: 8 }}>上移</span>
                    <span className="questionOperate" style={{ marginLeft: 8 }}>下移</span>
                    <span className="questionOperate" style={{ marginLeft: 8 }}>复用</span>
                    <span className="questionOperate" style={{ marginLeft: 8 }}>删除</span>
                </p>
            </div>
        );
    }

    handleAddOption(questionIndex) {
        const newOption = { text: '新选项' };
        let { questions } = this.state;
        questions[questionIndex].options.push(newOption);
        this.setState({
            questions: questions
        })
    }

    getQuestions() {
        let questions = this.state.questions;
        const { TextArea } = Input;
        const radioStyle = {
            display: 'block',
            height: '28px',
            lineHeight: '28px',
            marginLeft: '32px'
        };
        return questions.map((question, questionIndex) => {
            if (question.type === 'radio') {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }} key={questionIndex}>
                        <p>
                            <span style={{ position: 'absolute' }}>Q{questionIndex}</span>
                            <span style={{ marginLeft: 32 }}>{question.title}</span>
                        </p>
                        <Radio.Group>
                            {question.options.map((option, optionIndex) => {
                                return (
                                    <Radio style={radioStyle} value={option.text} key={optionIndex}>{option.text}</Radio>
                                );
                            })}
                        </Radio.Group>
                        <div className="addOption" style={{ width: '95%', height: 28, margin: '8px 32px' }} onClick={() => this.handleAddOption(questionIndex)}></div>
                        {this.getQuestionOperator()}
                    </div>
                );
            } 
            else if (question.type === 'checkBox') {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }} key={questionIndex}>
                        <p>
                            <span style={{position: 'absolute' }}>Q{questionIndex}</span>
                            <span style={{ marginLeft: 32 }}>{question.title}</span>
                        </p>
                        <Checkbox.Group>
                            {question.options.map((option, optionIndex) => {
                                return (
                                    <Checkbox style={radioStyle} value={option.text} key={optionIndex}>{option.text}</Checkbox>
                                );
                            })}
                        </Checkbox.Group>
                        <div className="addOption" style={{ width: '95%', height: 28, margin: '8px 32px' }} onClick={() => this.handleAddOption(questionIndex)}></div>
                        {this.getQuestionOperator()}
                    </div>
                );
            }
            else if (question.type === 'textArea' ) {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }}  key={questionIndex}>
                        <p>
                            <span style={{ position: 'absolute' }}>Q{questionIndex}</span>
                            <span style={{ marginLeft: 32 }}>{question.title}</span>
                        </p>
                        <div style={{ margin: '8px 32px' }}>
                            <TextArea rows={5} cols={10}/>
                        </div>
                        <Checkbox style={radioStyle} checked={question.required}>此题是否必填</Checkbox>
                        {this.getQuestionOperator()}
                    </div>
                );
            }
            else {
                return <div></div>;
            }
        })
    }

    handleAddQuestion() {
        this.setState({
            addAreaVisible: !this.state.addAreaVisible
        })
    }

    handleAddRadio() {
        const newQuestion = {
            type: 'radio',
            id: '1',
            title: '单选题',
            options: [{
                text: '选项一'
            }, {
                text: '选项二'
            }, {
                text: '选项三'
            }, {
                text: '选项四'
            }]
        };
        this.setState((prevState) => ({
            questions: prevState.questions.concat(newQuestion),
            addAreaVisible: false
        }));
    }

    handleAddCheckBox() {
        const newQuestion = {
            type: 'checkBox',
            id: '2',
            title: '多选题',
            options: [{
                text: '选项一'
            }, {
                text: '选项二'
            }, {
                text: '选项三'
            }, {
                text: '选项四'
            }]
        };
        this.setState((prevState) => ({
            questions: prevState.questions.concat(newQuestion),
            addAreaVisible: false
        }));
    }

    handleAddTextArea() {
        const newQuestion = {
            type: 'textArea',
            id: '3',
            title: '文本题',
            required: false
        };
        this.setState((prevState) => ({
            questions: prevState.questions.concat(newQuestion),
            addAreaVisible: false
        }));
    }

    getAddArea() {
        return (
            this.state.addAreaVisible ? (
                <div style={{ padding: 30, textAlign: 'center', border: '1px solid #eee' }}>
                    <Button icon="check-circle-o" size="large" onClick={this.handleAddRadio}>单选</Button>
                    <Button icon="check-square-o" size="large" style={{ marginLeft: 16 }} onClick={this.handleAddCheckBox}>多选</Button>
                    <Button icon="file-text" size="large" style={{ marginLeft: 16 }} onClick={this.handleAddTextArea}>文本</Button>
                </div>
            ) : ''
        );
    }

    handleDatePick(date, dateString) {
        this.setState({
            date: dateString
        })
    }
0
    getFooter() {
        return (
            <div style={{ padding: 20 }}>
                <div style={{ float: 'left' }}>
                    <span>问卷截止日期：</span>
                    <DatePicker onChange={this.handleDatePick} />
                </div>
                <div style={{ float: 'right' }}>
                    <Button>保存问卷</Button>
                    <Button type="primary" style={{ marginLeft: 16 }}>发布问卷</Button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.getTitle()}
                <div style={{ padding: 20, borderTop: '2px solid #ccc', borderBottom: '2px solid #ccc' }}>
                    <div style={{ marginBottom: 20 }}>
                        {this.getQuestions()}
                    </div>
                    {this.getAddArea()}
                    <div className="addQuestion" style={{ wdith: '100%', height: '100%', padding: 30, background: '#eee', textAlign: 'center'}} onClick={this.handleAddQuestion}>
                        添加问题
                    </div>
                </div>
                {this.getFooter()}
            </div>
        );
    }
}

export default Edit;