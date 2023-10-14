import { Col, Card, Spin } from 'antd';
const { Meta } = Card;

function CardItem({ obj, showDetail }) {
    return (
        <>
            <Col className="nft-item" span={8} onClick={() => showDetail(obj)}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img width={"200px"} alt="tupian" src={obj.picUrl ? obj.picUrl : ''} />}
                >
                    <div className={"item"}><span className='title'>名称：</span>{obj.title}</div>
                    {/* <div className={"item"}><span className='title'>简介：</span>{obj.describe}</div> */}
                    <div className={"item"}><span className='title'>价格：</span>{obj.price}</div>
                    <Meta title="简介" className="名称" description={obj.describe} />
                </Card>
            </Col>
        </>
    )
}
export default CardItem;