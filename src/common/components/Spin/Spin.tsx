import { Spin as AntSpin, Row, SpinProps } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Spin = ({ children, ...props }: SpinProps) => (
    <Row align="middle" justify="center" style={{minHeight: 480}}>
        <AntSpin indicator={<LoadingOutlined style={{ fontSize: 36 }} />} {...props}>
            {children}
        </AntSpin>
    </Row>
);