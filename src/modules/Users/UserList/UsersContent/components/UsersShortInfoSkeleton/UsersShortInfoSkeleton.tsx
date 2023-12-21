import { Col, Row, Skeleton } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import './UsersShortInfoSkeleton.less';

type UserShortInfoSkeletonProps = {
  active: boolean;
  count: number;
};

export const UsersShortInfoSkeleton = ({
  active,
  count,
}: UserShortInfoSkeletonProps) => {
  const skeletonItemsArray = new Array(count).fill('skeleton');
  skeletonItemsArray.map;
  return (
    <>
      {skeletonItemsArray.map(() => (
        <Row
          key={uuidv4()}
          className="user-short-skeleton"
          gutter={8}
          align="middle"
        >
          <Col>
            <Skeleton.Avatar active={active} size={48} />
          </Col>
          <Col flex={1}>
            <Skeleton.Input active={active} />
          </Col>
          <Col>
            <Skeleton.Button active={active} />
          </Col>
        </Row>
      ))}
    </>
  );
};
