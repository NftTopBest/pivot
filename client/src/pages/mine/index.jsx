import { Space, Table, Modal, Button } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
function Mine() {
    const navigate = useNavigate()
    const showDetail = (i) => {
        navigate(`/detail/${i.key}`, {
            replace: false
        })
    }
    const { confirm } = Modal;
    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure rage quit this task?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const maxLength = 20; // 最大字符数
    const columns = [
        {
            title: '名称',
            dataIndex: 'url',
            key: 'url',
            render: (text, record) => <a href={text} target="_blank">{record.name.length <= maxLength ? record.name : record.name.slice(0, maxLength) + "..."}</a>,
        },
        {
            title: '作者',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: '位次',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: '收益',
            dataIndex: 'profit',
            key: 'profit',
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="small">
                    <Button type='link' onClick={()=>showDetail(record) }>详情</Button>
                    <Button type='link' danger onClick={showDeleteConfirm}>怒退</Button>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: '【王刚探店】明婷饭店，成都初代苍蝇馆子，菜单居然没有传统川菜？',
            url: 'https://www.bilibili.com/video/BV1sj411x7f3/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=b932b7fe1de64e00ea88c13f8dd72204',
            author: '王刚',
            profit: '25',
            position: '2',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: '【生活化减脂减肥】从理论到案例 就吃食堂外卖',
            url: 'https://www.bilibili.com/video/BV1794y1a7y4/?spm_id_from=333.1007.tianma.1-3-3.click&vd_source=b932b7fe1de64e00ea88c13f8dd72204',
            author: '好人松松',
            profit: '25',
            position: '2',
            tags: ['nice', 'developer'],
        },
       
    ];
    return (
        <div className='mine'>
            <h4>我购买的资产：</h4>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
export default Mine;