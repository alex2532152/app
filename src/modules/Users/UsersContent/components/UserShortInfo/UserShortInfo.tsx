import { Avatar, Col, Row, Button } from "antd"
import { RightOutlined } from '@ant-design/icons'
import './UserShortInfo.less'

type UserShortInfoProps = {
    avatarUrl: string;
    fullname: string;
    address: string
}

export const UserShortInfo = ({avatarUrl, fullname, address}: UserShortInfoProps) => {
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
                <Button type="text" icon={<RightOutlined />} />
            </Col>
        </Row>
    )
}