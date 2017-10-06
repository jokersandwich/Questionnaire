import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import mockData from '../mockData';

// localStorage.list = JSON.stringify(mockData);
// localStorage.list = []
const list = localStorage.list ? JSON.parse(localStorage.list) : [];
// const data = mockData.concat(list);
const defaultQuestionnaire = {
    title: '这里是标题',
    date: '',
    stage: '未发布',
    questions: [],
    titleEditable: false,
    addAreaVisible: false
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleFill = this.handleFill.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            dataSource: list
        }
    }

    handleAdd(){
        const index = list.length;
        const setEditing = Object.assign({}, {...defaultQuestionnaire, index})
        localStorage.editing = JSON.stringify(setEditing);
        window.location.reload();
        debugger
    }

    handleReset() {
        localStorage.list = JSON.stringify(mockData);
        window.location.reload();
    }

    handleEdit(index) {
        const setEditing = Object.assign({}, list[index]);
        localStorage.editing = JSON.stringify(setEditing);
        window.location.reload();
        debugger
    }

    handleFill(index) {
        const setEditing = Object.assign({}, list[index]);
        localStorage.editing = JSON.stringify(setEditing);
        window.location.reload();
    }

    handleCheck(index) {
        const setEditing = Object.assign({}, list[index]);
        localStorage.editing = JSON.stringify(setEditing);
        window.location.reload();
    }

    handleDelete(key, index) {
        const dataSource = [...this.state.dataSource];
        if (list[index]) {
            list.splice(index, 1);
            localStorage.list = JSON.stringify(list);
            window.location.reload();
        } else if (key) {
            this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
        }
        debugger
    }

    render() {
        const columns = [{
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            width: '25%'
        }, {
            title: '时间',
            dataIndex: 'date',
            key: 'date',
            width: '25%'
        }, {
            title: '阶段',
            dataIndex: 'stage',
            key: 'stage',
            width: '25%'
        }, {
            title: '操作',
            key: 'action',
            render: (text, record, index) => {
                let firstButton;
                switch (record.stage) {
                    case '未发布':
                        firstButton = <Link to="/edit"><Button onClick={() => this.handleEdit(index)}>编辑问卷</Button></Link>
                        break;
                    case '发布中':
                        firstButton = <Link to="/fill"><Button onClick={() => this.handleFill(index)}>填写问卷</Button></Link>
                        break;
                    case '已结束':
                        firstButton = <Link to="/check"><Button onClick={() => this.handleCheck(index)}>查看数据</Button></Link>
                        break;
                    default:
                        firstButton = <div></div>
                }
                return (
                    <span>
                        {firstButton}
                        <Popconfirm title="确定要删除吗?" onConfirm={() => this.handleDelete(record.key, index)}>
                            <Button style={{ marginLeft: 8 }}>删除问卷</Button>
                        </Popconfirm>
                    </span>
                );
            }
        }];

        return (
            <div>
                <Table columns={columns} dataSource={this.state.dataSource} pagination={false} />
                {/* 两行按钮 */}
                {/* <Link to="/edit"><Button type="primary" style={{ marginTop: 16, width: '100%', height: '40px' }} onClick={this.handleAdd}>新建问卷</Button></Link>
                <Button style={{ marginTop: 16, width: '100%', height: '40px' }} onClick={this.handleReset}>重置列表</Button> */}
                {/* 一行按钮，左右放 */}
                <Button style={{ marginTop: 16, width: '49%', height: '40px' }} onClick={this.handleReset}>重置列表</Button>
                <Link to="/edit"><Button type="primary" style={{ marginTop: 16, marginLeft: '2%', width: '49%', height: '40px' }} onClick={this.handleAdd}>新建问卷</Button></Link>
            </div>
        );
    }
}

export default Home;