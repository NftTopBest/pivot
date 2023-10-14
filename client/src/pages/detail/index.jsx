import { useParams } from "react-router-dom";
import DetailCard from "../../component/card/detailCard";
function Detail({}) {
    let { tokenId } = useParams();
    return (
        <>
            {tokenId}
        </>
    )
}
export default Detail;