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
            title: '项目1',
            describe: '科技的快速发展正在改变我们的生活方式。从智能家居到无人驾驶汽车，技术正不断塑造我们的未来。随着人工智能和区块链等新技术的崛起，我们正站在科技革命的风口，创造更智能、更便捷的世界。',
            price: '1',
        },
        {
            id: '1',
            picUrl: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
            title: '项目2',
            describe: '环保已成为全球的焦点议题。随着气候变化日益严峻，可持续发展已成为当务之急。人们越来越重视绿色能源、再循环和减少碳排放，努力确保地球的未来能够更加美好。',
            price: '1',
        },
        {
            id: '2',
            picUrl: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
            title: '项目3',
            describe: '在数字化时代，网络安全至关重要。随着网络攻击的不断增多，保护个人信息和敏感数据变得尤为关键。信息安全专家正努力开发创新性解决方案，以应对不断演化的网络威胁。',
            price: '1',
        },
        {
            id: '3',
            picUrl: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
            title: '项目4',
            describe: '教育是塑造未来的关键。现代教育在培养学生的创造力、解决问题的能力和全球意识方面起着重要作用。教育的未来将借助技术工具，为学生提供更具吸引力和个性化的学习体验。',
            price: '1',
        },
        {
            id: '4',
            picUrl: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
            title: '项目5',
            describe: '当今，全球各地的文化多样性令人惊叹。从不同的语言、风俗习惯到独特的美食，每个地方都有其独特之处。文化交流变得更加容易，使我们能够更好地了解和尊重其他文化，促进世界和平与合作。',
            price: '3',
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