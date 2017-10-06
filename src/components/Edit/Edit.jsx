import React from 'react';
import { DatePicker, Button, Input, Checkbox, Icon, Modal } from 'antd';
import './Edit.css';

const list = localStorage.list ? JSON.parse(localStorage.list) : [];
const editing = localStorage.editing ? JSON.parse(localStorage.editing) : [];

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTitleBlur = this.handleTitleBlur.bind(this);
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleAddRadio = this.handleAddRadio.bind(this);
        this.handleAddCheckbox = this.handleAddCheckbox.bind(this);
        this.handleAddTextArea = this.handleAddTextArea.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleShiftQuestion = this.handleShiftQuestion.bind(this);
        this.handleCopyQuestion = this.handleCopyQuestion.bind(this);
        this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTextRequire = this.handleTextRequire.bind(this);
        this.handleDatePick = this.handleDatePick.bind(this);
        this.handleSaveQuestionnaire = this.handleSaveQuestionnaire.bind(this);
        this.handleReleaseQuestionnaire = this.handleReleaseQuestionnaire.bind(this);
        this.state = editing;
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

    handleAddQuestion() {
        this.setState({
            addAreaVisible: !this.state.addAreaVisible
        })
    }

    handleAddRadio() {
        const newQuestion = {
            type: 'radio',
            title: '单选题',
            options: [{text: '选项一'}, {text: '选项二'}, {text: '选项三'}, {text: '选项四'}]
        };
        this.setState((prevState) => ({
            questions: prevState.questions.concat(newQuestion),
            addAreaVisible: false
        }));
    }

    handleAddCheckbox() {
        const newQuestion = {
            type: 'checkbox',
            title: '多选题',
            options: [{text: '选项一'}, {text: '选项二'}, {text: '选项三'}, {text: '选项四'}]
        };
        this.setState((prevState) => ({
            questions: prevState.questions.concat(newQuestion),
            addAreaVisible: false
        }));
    }

    handleAddTextArea() {
        const newQuestion = {
            type: 'textarea',
            title: '文本题',
            text: '',
            required: false
        };
        this.setState((prevState) => ({
            questions: prevState.questions.concat(newQuestion),
            addAreaVisible: false
        }));
    }

    handleQuestionChange(e, questionIndex) {
        let { questions } = this.state;
        questions[questionIndex].title = e.target.value;
        this.setState({
            questions: questions
        });
    }

    handleShiftQuestion(questionIndex, num) {
        let { questions } = this.state;
        let shiftQuestion = questions.splice(questionIndex, 1)[0];
        questions.splice(questionIndex + num, 0, shiftQuestion);
        this.setState({
            questions: questions
        })
    }

    handleCopyQuestion(questionIndex) {
        let { questions } = this.state;
        let copy = Object.assign({}, questions[questionIndex]);
        if (questions[questionIndex].type !== 'textarea') {
            copy.options = copy.options.slice(0);
        }
        questions.splice(questionIndex + 1, 0, copy);
        this.setState({
            questions: questions
        });
    }

    handleRemoveQuestion(questionIndex) {
        let { questions } = this.state;
        questions.splice(questionIndex, 1);
        this.setState({
            questions: questions
        });
    }

    handleOptionChange(e, questionIndex, optionIndex) {
        let { questions } = this.state;
        questions[questionIndex].options[optionIndex].text = e.target.value;
        this.setState({
            questoins: questions
        });
    }

    handleAddOption(questionIndex) {
        let { questions } = this.state;
        const newOption = { text: '新选项' };
        questions[questionIndex].options.push(newOption);
        this.setState({
            questions: questions
        });
    }

    handleRemoveOption(questionIndex, optionIndex) {
        let { questions } = this.state;
        questions[questionIndex].options.splice(optionIndex, 1);
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

    handleTextRequire(e, questionIndex) {
        let { questions } = this.state;
        questions[questionIndex].required = e.target.checked;
        this.setState({
            questions: questions
        });
    }

    handleDatePick(date, dateString) {
        this.setState({
            date: dateString
        })
    }

    handleSaveQuestionnaire() {
        const index = this.state.index;
        list[index] = Object.assign({}, this.state);
        localStorage.list = JSON.stringify(list);
        debugger
        Modal.success({
            title: '保存成功'
        });
    }

    handleReleaseQuestionnaire() {
        let me = this;
        if (this.state.questions.length === 0) {
            Modal.warning({
                title: '请添加至少一个问题'
            });
        } else if (this.state.date === '') {
            Modal.warning({
                title: '请选择截止日期'
            });
        } else {
            Modal.confirm({
                title: '确定发布问卷吗？',
                content: '截止日期为 ' + this.state.date,
                onOk() {
                    const index = me.state.index;
                    list[index] = Object.assign({}, {...me.state, stage: '发布中'});
                    localStorage.list = JSON.stringify(list);
                    window.location.reload();
                    me.props.history.push('/');
                    debugger
                }
            });
        }
    }

    getTitle() {
        return (
            this.state.titleEditable ? (
                <div className="editTitle" style={{ margin: '0 20px 20px 20px', padding: 3, textAlign: 'center' }} onClick={this.handleTitleClick}>
                    <Input style={{ fontSize: 18, fontWeight: 'bold', padding: 30, textAlign: 'center' }} value={this.state.title} onChange={this.handleTitleChange} onBlur={this.handleTitleBlur} />
                </div>
            ) : (
                <div className="editTitle" style={{ margin: '0 20px 20px 20px', padding: 20, textAlign: 'center' }} onClick={this.handleTitleClick}>
                    <h2><strong>{this.state.title}</strong></h2>
                </div>
            )
        );
    }

    getAddArea() {
        return (
            this.state.addAreaVisible ? (
                <div style={{ padding: 30, textAlign: 'center', border: '1px solid #eee' }}>
                    <Button icon="check-circle-o" size="large" onClick={this.handleAddRadio}>单选</Button>
                    <Button icon="check-square-o" size="large" style={{ marginLeft: 16 }} onClick={this.handleAddCheckbox}>多选</Button>
                    <Button icon="file-text" size="large" style={{ marginLeft: 16 }} onClick={this.handleAddTextArea}>文本</Button>
                </div>
            ) : ''
        );
    }

    getQuestions() {
        let questions = this.state.questions;
        const { TextArea } = Input;
        return questions.map((question, questionIndex, array) => {
            if (question.type === 'radio') {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }} key={questionIndex}>
                        <span>Q{questionIndex + 1}</span>
                        <Input value={question.title} style={{ borderStyle: 'none', width: '97%', marginLeft: 3 }} onChange={(e) => this.handleQuestionChange(e, questionIndex)} />
                        {question.options.map((option,optionIndex) => {
                            return (
                                <div style={{ margin: '8px 0' }} key={optionIndex}>
                                    <Icon type="close" className="deleteOption" style={{ display: 'inline-block', marginRight: 8 }} onClick={() => this.handleRemoveOption(questionIndex, optionIndex)}/>
                                    <Input value={option.text} style={{ borderStyle: 'none', width: '20%' }} onChange={(e) => this.handleOptionChange(e, questionIndex, optionIndex)} />
                                </div>
                            );
                        })}
                        <div className="addOption" style={{ width: '20%', height: 28, margin: '8px 20px' }} onClick={() => this.handleAddOption(questionIndex)}></div>
                        {this.getQuestionOperator(questionIndex, array)}
                    </div>
                );
            } else if (question.type === 'checkbox') {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }} key={questionIndex}>
                        <span>Q{questionIndex + 1}</span>
                        <Input value={question.title} style={{ borderStyle: 'none', width: '97%', marginLeft: 3 }} onChange={(e) => this.handleQuestionChange(e, questionIndex)} />
                        {question.options.map((option,optionIndex) => {
                            return (
                                <div style={{ margin: '8px 0' }} key={optionIndex}>
                                    <Icon type="close" className="deleteOption" style={{ display: 'inline-block', marginRight: 8 }} onClick={() => this.handleRemoveOption(questionIndex, optionIndex)}/>
                                    <Input value={option.text} style={{ borderStyle: 'none', width: '20%' }} onChange={(e) => this.handleOptionChange(e, questionIndex, optionIndex)} />
                                </div>
                            );
                        })}
                        <div className="addOption" style={{ width: '20%', height: 28, margin: '8px 20px' }} onClick={() => this.handleAddOption(questionIndex)}></div>
                        {this.getQuestionOperator(questionIndex, array)}
                    </div>
                );
            } else if (question.type === 'textarea' ) {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }}  key={questionIndex}>
                        <span>Q{questionIndex + 1}</span>
                        <Input value={question.title} style={{ borderStyle: 'none', width: '97%', marginLeft: 3 }} onChange={(e) => this.handleQuestionChange(e, questionIndex)} />
                        <div style={{ margin: '16px 20px' }}>
                            <TextArea rows={5} value={question.text} onChange={(e) => this.handleTextChange(e, questionIndex)} />
                        </div>
                        <Checkbox checked={question.required} style={{ margin: '0 20px' }} onChange={(e) => this.handleTextRequire(e, questionIndex)}>此题是否必填</Checkbox>
                        {this.getQuestionOperator(questionIndex, array)}
                    </div>
                );
            }
            else {
                return null;
            }
        })
    }

    getQuestionOperator(questionIndex, array) {
        return (
            <div>
                <p style={{ float: 'right' }}>
                    {questionIndex === 0 ? (
                        null
                    ) : (
                        <span className="questionOperate" style={{ marginLeft: 8 }} onClick={() => this.handleShiftQuestion(questionIndex, -1)}>上移</span>
                    )}
                    {questionIndex === array.length - 1 ? (
                        null
                    ) : (
                        <span className="questionOperate" style={{ marginLeft: 8 }} onClick={() => this.handleShiftQuestion(questionIndex, 1)}>下移</span>
                    )}
                    <span className="questionOperate" style={{ marginLeft: 8 }} onClick={() => this.handleCopyQuestion(questionIndex)}>复用</span>
                    <span className="questionOperate" style={{ marginLeft: 8 }} onClick={() => this.handleRemoveQuestion(questionIndex)}>删除</span>
                </p>
            </div>
        );
    }

    getFooter() {
        const disabledDate = (current) => current && current.valueOf() < Date.now();
        return (
            <div style={{ padding: 20 }}>
                <div style={{ float: 'left' }}>
                    <span>问卷截止日期：</span>
                    <DatePicker onChange={this.handleDatePick} disabledDate={disabledDate}/>
                </div>
                <div style={{ float: 'right' }}>
                    <Button onClick={this.handleSaveQuestionnaire}>保存问卷</Button>
                    <Button type="primary" style={{ marginLeft: 16 }} onClick={this.handleReleaseQuestionnaire}>发布问卷</Button>
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