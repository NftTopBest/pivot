import { Button, Card, message } from 'antd';
import useEth from "../../contexts/EthContext/useEth";
import { ethers } from 'ethers';

const { Meta } = Card;
function DetailCard({ obj }) {
    const [messageApi, contextHolder] = message.useMessage();
    const { state: { contract, address } } = useEth();
    const purchase = async () => {
        try {
            const transactionParameters = {
                value: 10, // 可选：向合约发送以太币
            };
            const res = await contract.mint(obj.id, transactionParameters)
            messageApi.open({
                type: 'success',
                content: '购买成功！',
            });
            console.log(res, 666)
        } catch (err) {
            messageApi.open({
                type: 'error',
                content: '购买失败！',
            });
            console.error(err)
        }

    }
    return (
        <>
            {contextHolder}
            <Card
                hoverable
                cover={<img width={"200px"} alt="tupian" src={obj.picUrl ? obj.picUrl : 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg'} />}
            >
                <div className={"item"}><span className='title'>名称：</span>{obj.title}</div>
                <div className={"item"}><span className='title'>作者：</span>{obj.owner}</div>
                <div className={"item"}><span className='title'>价格：</span>{obj.price}Eth</div>
                <Meta title="简介" className="名称" description={obj.describe} />
                <Button style={{ marginTop: '15px' }} onClick={purchase}>购买</Button>
            </Card>
        </>
    )
}
export default DetailCard;