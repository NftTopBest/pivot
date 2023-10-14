import { useNavigate } from "react-router-dom";
import { BankOutlined } from '@ant-design/icons';
import { Menu, Button } from 'antd';
import { useState } from 'react';
import { ethers } from 'ethers';

function Header() {
    const [account, setAccount] = useState(null)
    const navigate = useNavigate()
    const goToLocation = (address, key) => {
        var title = address.split('')
        title.shift()
        title = title.join('')
        document.title = `project`
        setCurrent(key)
        navigate(address, {
            replace: false
        })
    }
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts)
        const account = ethers.getAddress(accounts[0])
        setAccount(account);
    }
    const items = [
        {
            label: '首页',
            key: 'homepage',
            icon: <BankOutlined />
        },
        {
            label: '发布',
            key: 'publish',
            icon: <BankOutlined />
        },
        {
            label: '个人中心',
            key: 'Mine',
            icon: <BankOutlined />
        },
    ];
    const [current, setCurrent] = useState('homepage');
    const onClick = (e) => {
        console.log(e)
        goToLocation(`/${e.key}`, e.key)
    };
    return (
        <>
            <div id="header">
                <div className={'menu'}><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /></div>
                <div className={'connect'}>
                    {account ? (
                        <Button
                            className='nav__connect'
                        >
                            {account.slice(0, 6) + '...' + account.slice(38, 42)}
                        </Button>

                    ) : (
                        <Button
                            className='nav__connect'
                            onClick={connectHandler}
                        >
                            Connect
                        </Button>
                    )}
                </div>
            </div>
        </>
    )
}
export default Header;