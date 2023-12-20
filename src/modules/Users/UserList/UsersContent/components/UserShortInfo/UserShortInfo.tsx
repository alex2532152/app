import { Avatar, Col, Row, Button } from "antd"
import { RightOutlined } from '@ant-design/icons'
import './UserShortInfo.less'
import { useNavigate } from "react-router-dom";

type UserShortInfoProps = {
    avatarUrl: string;
    fullname: string;
    address: string;
    id: number;
}

export const UserShortInfo = ({avatarUrl, fullname, address, id}: UserShortInfoProps) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/user/${id}`)
    }
    return (
        <Row className="user-short" gutter={8} align='middle'>
            <Col>
                <Avatar className='user-short-avatar' size={48} src={avatarUrl} />
            </Col>
            <Col flex={1}>
                <div>{fullname}</div>
                <div>{address}</div>
            </Col>
            <Col>
                <Button type="text" icon={<RightOutlined />} onClick={handleClick}/>
            </Col>
        </Row>
    )
}