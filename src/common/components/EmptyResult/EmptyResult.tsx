import { Row } from "antd"
import { EmptyIcon } from "../../icons/EmptyIcon"
import './EmptyResult.less'

type EmptyResultProps = {
    title: string,
    description: string,
}

export const EmptyResult = ({ title, description}: EmptyResultProps) => {
    return (
        <Row className='empty-result' align='middle' justify='center'>
            <EmptyIcon/>
            <div className='empty-result-title'>{title}</div>
            <div className='empty-result-description'>{description}</div>
        </Row>
    )
}