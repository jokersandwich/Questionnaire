import React from 'react';
import { DatePicker, Button, Input } from 'antd';
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
                    <Input style={{ fontSize: 18, fontWeight: 'bold', padding: 30, textAlign: 'center' }} value={this.state.title} onChange={this.handleTitleChange} onBlur={this.handleTitleBlur} />
                </div>
            ) : (
                <div className="editTitle" style={{ margin: 20, padding: 20, textAlign: 'center' }} onClick={this.handleTitleClick}>
                    <h2><strong>{this.state.title}</strong></h2>
                </div>
            )
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

    getQuestionArea() {}

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
                    {this.getAddArea()}
                    <div className="eidtAddQuestion" style={{ wdith: '100%', height: '100%', padding: 30, background: '#eee', textAlign: 'center'}} onClick={this.handleAddQuestion}>
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