import { Button, Card } from 'antd';
const { Meta } = Card;

function DetailCard({ obj }) {
    return (
        <>
            <Card
                hoverable
                cover={<img width={"200px"} alt="tupian" src={obj.picUrl ? obj.picUrl : 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg'} />}
            >
                <div className={"item"}><span className='title'>名称：</span>{obj.title}</div>
                <div className={"item"}><span className='title'>作者：</span>{obj.owner}</div>
                <div className={"item"}><span className='title'>价格：</span>{obj.price}Eth</div>
                <Meta title="简介" className="名称" description={obj.describe} />
                <Button style={{marginTop: '15px'}}>购买</Button>
            </Card>
        </>
    )
}
export default DetailCard;