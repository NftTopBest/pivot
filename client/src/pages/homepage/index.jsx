import { Carousel, Button, Row } from 'antd';
import { useEffect, useCallback, useState } from 'react';
import CardItem from '../../component/card/cardItem';
import { useNavigate } from "react-router-dom";
import bk from '../../img/bk.jpg'
function Homepage() {
    const navigate = useNavigate()
    const testList = [
        {
            id: '0',
            picUrl: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
            title: '22',
            describe: '222',
            price: '222',
        },
        {
            id: '1',
            picUrl: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
            title: '22',
            describe: '222',
            price: '222',
        },
        {
            id: '2',
            picUrl: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
            title: '22',
            describe: '222',
            price: '222',
        },
        {
            id: '3',
            picUrl: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
            title: '22',
            describe: '222',
            price: '222',
        },
        {
            id: '4',
            picUrl: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
            title: '22',
            describe: '222',
            price: '222',
        },

    ]
    const showDetail = (i) => {
        console.log(6666)
        navigate(`/detail/${i.id}`, {
            replace: false
        })
    }
    const toExplore = () => {
        navigate(`/publish`, {
            replace: false
        })
    }
    return (
        <div className="homepage">
            <div className='top_box'>
                <div className="left">
                    <h2>P.I.V.O.T.</h2>
                    <p>一个全去中心化的不贬值资产的众包估值协议</p>
                    <Button style={{ marginRight: '15px',marginTop:'120px' }} onClick={toExplore}>Explore</Button>
                    {/* <Button>Learn More</Button> */}
                </div>
                <div className="right">
                    <img src={bk} style={{height:'100%',width:'100%'}}/>
                </div>
            </div>
            <div className='browse'>
                <div className='top'>
                    <div className='left'>
                        {/* <span>some describe...</span> */}
                        <h2>Browse</h2>
                    </div>
                    <div className='right'>
                        {/* <Button>show more</Button> */}
                    </div>
                </div>
                <div className='content'>
                    <Row gutter={[16, 16]}>
                        {testList.map(i => {
                            return (
                                <>
                                    <CardItem obj={i} key={i.id} showDetail={showDetail}></CardItem>
                                </>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default Homepage;