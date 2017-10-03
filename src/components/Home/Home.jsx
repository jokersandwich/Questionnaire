import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

const list = localStorage.list ? JSON.parse(localStorage.list) : [];
const mockData = [{
    key: '-1',
    title: '问卷一',
    date: '2017/10/10',
    stage: '未发布',
    questions: [{
        type: 'radio',
        title: '单选题',
        options: [{text: '选项一'}, {text: '选项二'}, {text: '选项三'}, {text: '选项四'}]
    }, {
        type: 'checkBox',
        title: '多选题',
        options: [{text: '选项一'}, {text: '选项二'}, {text: '选项三'}, {text: '选项四'}]
    }, {
        type: 'textArea',
        title: '文本题',
        text: '',
        required: false
    }],
    titleEditable: false,
    addAreaVisible: false
}, {
    key: '-2',
    title: '问卷二',
    date: '2017/10/10',
    stage: '发布中',
    questions: [{
        type: 'radio',
        title: '单选题',
        options: [{text: '选项一'}, {text: '选项二'}, {text: '选项三'}, {text: '选项四'}]
    }, {
        type: 'checkBox',
        title: '多选题',
        options: [{text: '选项一'}, {text: '选项二'}, {text: '选项三'}, {text: '选项四'}]
    }, {
        type: 'textArea',
        title: '文本题',
        text: '',
        required: false
    }],
    titleEditable: false,
    addAreaVisible: false
}, {
    key: '-3',
    title: '问卷三',
    date: '2017/10/10',
    stage: '已结束',
    questions: [{
        type: 'radio',
        title: '单选题',
        options: [{text: '选项一'}, {text: '选项二'}, {text: '选项三'}, {text: '选项四'}]
    }, {
        type: 'checkBox',
        title: '多选题',
        options: [{text: '选项一'}, {text: '选项二'}, {text: '选项三'}, {text: '选项四'}]
    }, {
        type: 'textArea',
        title: '文本题',
        text: '',
        required: false
    }],
    titleEditable: false,
    addAreaVisible: false
}];
const initialDate = mockData.concat(list);

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: initialDate
        }
    }

    handleDelete(key) {
        const dataSource = [...this.state.dataSource];
        if (list.length > 0 && key > 0) {  //  用于删除mock数据，防止刷新
            localStorage.list = JSON.stringify(list.filter(item => item.key !== key));
            window.location.reload();   //  每次刷新只能删一个list元素
        }
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
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
            render: (text, record) => {
                let firstButton;
                switch (record.stage) {
                    case '未发布':
                        firstButton = <Link to="/edit"><Button>编辑问卷</Button></Link>
                        break;
                    case '发布中':
                        firstButton = <Link to="/fill"><Button>填写问卷</Button></Link>
                        break;
                    case '已结束':
                        firstButton = <Link to="/check"><Button>查看数据</Button></Link>
                        break;
                    default:
                        firstButton = <div></div>
                }
                return (
                    <span>
                        {firstButton}
                        <Popconfirm title="确定要删除吗?" onConfirm={() => this.handleDelete(record.key)}>
                            <Button style={{ marginLeft: 8 }}>删除问卷</Button>
                        </Popconfirm>
                    </span>
                );
            }
        }];

        return (
            <div>
                <Table columns={columns} dataSource={this.state.dataSource} pagination={false} />
                <Link to="/edit"><Button type="primary" style={{ marginTop: 16, width: '100%', height: '40px' }}>新建问卷</Button></Link>
            </div>
        );
    }
}

export default Home;