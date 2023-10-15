import { useParams } from "react-router-dom";
import DetailCard from "../../component/card/detailCard";
function Detail({ }) {
    let { tokenId } = useParams();
    const obj = {
        id: '1',
        picList: 'https://cdn.jsdelivr.net/gh/fnkk/resource@0.0.2/img/mayi.jpg',
        title: '22',
        describe: '222',
        price: '222',
    }
    return (
        <>
            <div className="detail">
                <DetailCard obj={obj}></DetailCard>
            </div>

        </>
    )
}
export default Detail;