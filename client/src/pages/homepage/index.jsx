import { Carousel, Button, Row } from 'antd';
import { useEffect, useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import CardItem from '../../component/card/cardItem';
function Homepage() {
    const navigate = useNavigate()
    const testList = [
        {
            id: '0',
            picList: '',
            title: '22',
            describe: '222',
            price: '222',
        },
        {
            id: '1',
            picList: '',
            title: '22',
            describe: '222',
            price: '222',
        },
        {
            id: '2',
            picList: '',
            title: '22',
            describe: '222',
            price: '222',
        },
        {
            id: '3',
            picList: '',
            title: '22',
            describe: '222',
            price: '222',
        },
        {
            id: '4',
            picList: '',
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
    return (
        <div className="homepage">
            <div className='top_box'>
                <div class="left">
                    <h2>左侧内容</h2>
                    <p>这里是左侧内容的一些文本。</p>
                    <Button style={{ marginRight: '15px' }}>Explore</Button>
                    <Button>Learn More</Button>
                </div>
                <div class="right">
                    <p>图片</p>
                </div>
            </div>
            <div className='browse'>
                <div className='top'>
                    <div className='left'>
                        <span>some describe...</span>
                        <h2>Browse</h2>
                    </div>
                    <div className='right'>
                        <Button>show more</Button>
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