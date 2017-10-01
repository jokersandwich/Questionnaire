import React from 'react';
import { DatePicker, Button, Input, Radio, Checkbox } from 'antd';
import style from './Edit.css';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTitleBlur = this.handleTitleBlur.bind(this);
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleDatePick = this.handleDatePick.bind(this);
        this.state = {
            title: '这里是标题',
            questions: [],
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
                        ref="input"
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

    getQuestions() {
        const { TextArea } = Input;
        const radioStyle = {
            display: 'block',
            height: '28px',
            lineHeight: '28px',
            marginLeft: '32px'
        };
        return (
            <div style={{ marginBottom: 20 }}>
                <div className="questionsWrap" style={{ padding: 30 }}>
                    <p>
                        <span style={{ position: 'absolute' }}>Q1</span>
                        <span style={{ marginLeft: 32 }}>单选题</span>
                    </p>
                    <Radio.Group>
                        <Radio style={radioStyle} value={1}>A</Radio>
                        <Radio style={radioStyle} value={2}>B</Radio>
                        <Radio style={radioStyle} value={3}>C</Radio>
                        <Radio style={radioStyle} value={4}>D</Radio>
                    </Radio.Group>
                    <div>
                        <p style={{ float: 'right' }}>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>上移</span>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>下移</span>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>复用</span>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>删除</span>
                        </p>
                    </div>
                </div>
                <div className="questionsWrap" style={{ padding: 30 }}>
                    <p>
                        <span style={{position: 'absolute' }}>Q2</span>
                        <span style={{ marginLeft: 32 }}>多选题</span>
                    </p>
                    <Checkbox.Group>
                        <Checkbox style={radioStyle} value={1}>A</Checkbox>
                        <Checkbox style={radioStyle} value={2}>B</Checkbox>
                        <Checkbox style={radioStyle} value={3}>C</Checkbox>
                        <Checkbox style={radioStyle} value={4}>D</Checkbox>
                    </Checkbox.Group>
                    <div>
                        <p style={{ float: 'right' }}>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>上移</span>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>下移</span>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>复用</span>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>删除</span>
                        </p>
                    </div>
                </div>
                <div className="questionsWrap" style={{ padding: 30 }}>
                    <p>
                        <span style={{ position: 'absolute' }}>Q3</span>
                        <span style={{ marginLeft: 32 }}>文本题</span>
                    </p>
                    <div style={{ margin: '8px 32px' }}>
                        <TextArea rows={5} cols={10}/>
                    </div>
                    <Checkbox style={radioStyle} value={false}>此题是否必填</Checkbox>
                    <div>
                        <p style={{ float: 'right' }}>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>上移</span>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>下移</span>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>复用</span>
                            <span className="questionsOperate" style={{ marginLeft: 8 }}>删除</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    handleAddQuestion() {
        this.setState({
            addAreaVisible: !this.state.addAreaVisible
        })
    }

    getAddArea() {
        return (
            this.state.addAreaVisible ? (
                <div style={{ padding: 30, textAlign: 'center', border: '1px solid #eee' }}>
                    <Button icon="check-circle-o" size="large">单选</Button>
                    <Button icon="check-square-o" size="large" style={{ marginLeft: 16 }}>多选</Button>
                    <Button icon="file-text" size="large" style={{ marginLeft: 16 }}>文本</Button>
                </div>
            ) : ''
        );
    }

    handleDatePick(date, dateString) {
        this.setState({
            date: dateString
        })
    }

    render() {
        return (
            <div>
                {this.getTitle()}
                <div style={{ padding: 20, borderTop: '2px solid #ccc', borderBottom: '2px solid #ccc' }}>
                    {this.getQuestions()}
                    {this.getAddArea()}
                    <div className="addQuestion" style={{ wdith: '100%', height: '100%', padding: 30, background: '#eee', textAlign: 'center'}} onClick={this.handleAddQuestion}>
                        添加问题
                    </div>
                </div>
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
            </div>
        );
    }
}

export default Edit;