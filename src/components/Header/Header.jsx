import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
                <Menu.Item key="1">
                    <Link to="/">我的问卷</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Header;