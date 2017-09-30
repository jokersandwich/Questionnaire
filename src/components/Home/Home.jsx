import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [{
                key: '1',
                title: '问卷一',
                time: '2017/10/10',
                stage: '未发布'
            }, {
                key: '2',
                title: '问卷二',
                time: '2017/10/10',
                stage: '发布中'
            }, {
                key: '3',
                title: '问卷三',
                time: '2017/10/10',
                stage: '已结束'
            }]
        }
    }

    handleDelete(key) {
        const dataSource = [...this.state.dataSource];
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
            dataIndex: 'time',
            key: 'time',
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
            <Table columns={columns} dataSource={this.state.dataSource} />
        );
    }
}

export default Home;