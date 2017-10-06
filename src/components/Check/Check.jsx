import React from 'react';
import createG2 from 'g2-react';
import { Stat } from 'g2';
import { Button } from 'antd';
import mockData from '../mockData';

const data = mockData[2];
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
        this.state = data;
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
            if (question.type === 'radio') {
                return (
                    <div className="questionsWrap" style={{ padding: 30 }} key={questionIndex}>
                        <span>Q{questionIndex + 1}</span>
                        <span style={{ marginLeft: 8 }}>{question.title}</span>
                        <div style={{ marginLeft: 3, marginTop: 8 }}>
                            <PieChart data={question.data} />
                        </div>
                    </div>
                );
            } else if (question.type === 'checkbox') {
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