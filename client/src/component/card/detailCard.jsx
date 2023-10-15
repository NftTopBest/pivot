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
                <div className={"item"}><span className='title'>价格：</span>{obj.price}</div>
                <Meta title="简介" className="名称" description={obj.describe} />
                <Button>购买</Button>
            </Card>
        </>
    )
}
export default DetailCard;