import { Button, Col, Row, Tooltip } from "antd";
import classNames from 'classnames';
import { LeftCircleOutlined } from '@ant-design/icons';
import './Title.less'

type TitleProps = {
    value: string;
    className?: string;
    goBack?: () => void;
}

export const Title = ({value, goBack, className}: TitleProps) => {

    return <Row className="custom-title" gutter={8} align='middle'>
        {goBack && 
           <Col>
            <Tooltip title="search">
                    <Button 
                        onClick={goBack}
                        shape="circle"
                        icon={<LeftCircleOutlined/>}
                    />
                </Tooltip>
            </Col>
        }
        <Col>
          <span className ={classNames('custom-title-value', className)}>{value}</span>
        </Col>
    </Row>

}