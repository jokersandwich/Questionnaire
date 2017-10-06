import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleHome() {
        window.location.reload();
    }

    render() {
        return (
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
                <Menu.Item key="1">
                    <Link to="/" onClick={this.handleHome}>我的问卷</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Header;