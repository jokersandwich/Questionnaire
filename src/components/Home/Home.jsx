import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

const list = localStorage.list ? JSON.parse(localStorage.list) : [];
const mockData = [{
    key: '-1',
    title: '问卷一',
    date: '2017/12/30',
    stage: '未发布',
    questions: [{
        type: 'radio',
        title: '你是否使用过 GitHub 社交网站？',
        options: [{text: '是'}, {text: '我不知道 GitHub，我打算当成微博来填'}],
        value: '',
        data:[]
    }, {
        type: 'radio',
        title: '你使用 GitHub 的频率是？',
        options: [{text: '几乎每天都会用'}, {text: '每周都会用'}, {text: '每个月都会用'}, {text: '很少使用'}],
        value: '',
        data: []
    }, {
        type: 'checkbox',
        title: '你使用 GitHub 的目的是？',
        options: [{text: '展现自己多彩的生活'}, {text: '有机会结交更多的朋友'}, {text: '关注名人动态'}, {text: '工作需要'}],
        value: [],
        data: []
    }, {
        type: 'checkbox',
        title: '你在 GitHub 上主要做什么？',
        options: [{text: '分享新鲜事'}, {text: '关注热点'}, {text: '与好友互动'}, {text: '随便浏览，打发时间'}],
        value: [],
        data: []
    }, {
        type: 'checkbox',
        title: '你认为对于 GitHub 来说，哪些因素比较重要？',
        options: [{text: '界面布局好，设计美观'}, {text: '方便交到新朋友'}, {text: '能看到感兴趣的内容'}, {text: '打开速度快，不被墙'}],
        value: [],
        data: []
    }, {
        type: 'checkbox',
        title: '除了 GitHub，你还使用以下哪些社交网站？',
        options: [{text: 'bilibili'}, {text: '知乎'}, {text: '蓝色国度'}, {text: '非常男孩'}],
        value: [],
        data: []
    }, {
        type: 'textarea',
        title: '你对 GitHub 还有什么其它想说的吗？',
        text: '',
        required: false,
        data: []
    }],
    titleEditable: false,
    addAreaVisible: false
}, {
    key: '-2',
    title: '问卷二',
    date: '2017/12/30',
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
    date: '2017/9/30',
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