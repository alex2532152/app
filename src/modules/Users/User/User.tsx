import { useNavigate } from "react-router-dom";
import { Title } from "../../../common/components/Title/Title";


export const User = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('../')
    }
    return (
        <Title value="User" goBack={handleGoBack}/>
    )
}