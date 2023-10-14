import { Button, Card } from 'antd';
const { Meta } = Card;

function DetailCard({ obj, showDetail }) {
    return (
        <>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img width={"200px"} alt="tupian" src={obj.picUrl ? obj.picUrl : ''} />}
            >
                <div className={"item"}><span className='title'>名称：</span>{obj.title}</div>
                <div className={"item"}><span className='title'>价格：</span>{obj.price}</div>
                <Meta title="简介" className="名称" description={obj.describe} />

            </Card>
        </>
    )
}
export default DetailCard;