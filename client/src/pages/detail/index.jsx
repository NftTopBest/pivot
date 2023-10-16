import { useParams } from "react-router-dom";
import DetailCard from "../../component/card/detailCard";
import useEth from "../../contexts/EthContext/useEth";
import { useEffect, useState } from "react";

function Detail({ }) {
    let { tokenId } = useParams();
    const { state: { contract } } = useEth();
    const [obj, setObj] = useState({
        id: tokenId,
        picList: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
        title: '标题',
        describe: '当探索未知的星球，勇敢的宇航员们将面临无尽的冒险和奇遇。他们必须克服重力、寒冷和宇宙中的各种挑战，为了追求科学知识和未知的发现，他们前行，敢于挑战极限。夏日的沙滩，柔软的白沙，清澈的海水，和煦的阳光。人们沐浴在海风中，听着涛声拍打，享受着大自然的恩赐。欢笑声、沙滩排球和冰淇淋成了这个美好时光的背景音乐。这里是度假的天堂，让每个人留连忘返。',
    });
    
    // const obj = {
    //     id: '1',
    //     picList: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
    //     title: '22',
    //     describe: '当探索未知的星球，勇敢的宇航员们将面临无尽的冒险和奇遇。他们必须克服重力、寒冷和宇宙中的各种挑战，为了追求科学知识和未知的发现，他们前行，敢于挑战极限。夏日的沙滩，柔软的白沙，清澈的海水，和煦的阳光。人们沐浴在海风中，听着涛声拍打，享受着大自然的恩赐。欢笑声、沙滩排球和冰淇淋成了这个美好时光的背景音乐。这里是度假的天堂，让每个人留连忘返。',
    //     price: '222',
    // }
    const getInformation = async () => {
        const price = await contract.getPriceById(tokenId)
        const owner = await contract.getOwnerById(tokenId)
        // const tokenBalance = await contract.getTokenBalance(tokenId)
        console.log(typeof(owner))
        setObj({
            id: tokenId,
            picList: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
            title: '标题',
            describe: '当探索未知的星球，勇敢的宇航员们将面临无尽的冒险和奇遇。他们必须克服重力、寒冷和宇宙中的各种挑战，为了追求科学知识和未知的发现，他们前行，敢于挑战极限。夏日的沙滩，柔软的白沙，清澈的海水，和煦的阳光。人们沐浴在海风中，听着涛声拍打，享受着大自然的恩赐。欢笑声、沙滩排球和冰淇淋成了这个美好时光的背景音乐。这里是度假的天堂，让每个人留连忘返。',
            price:Number(price),
            owner,
            // tokenBalance
        })
    }

    useEffect(() => {
        getInformation()
    },[])
    return (
        <>
            <div className="detail">
                <DetailCard obj={obj}></DetailCard>
            </div>

        </>
    )
}
export default Detail;