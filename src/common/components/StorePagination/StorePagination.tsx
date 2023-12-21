import { Button, Pagination, PaginationProps } from 'antd';
import { PaginationState } from '../../models/PaginationState';
import { PaginationStore } from '../../store/PaginationStore';
import { useEffect } from 'react';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import './StorePagination.less';

type StorePaginationProps = Omit<
  PaginationProps,
  keyof PaginationState | 'onChange'
> & {
  store: PaginationStore;
  simple?: boolean;
};

export const StorePagination = ({
  store: { state, set },
  total,
  simple = false,
  ...rest
}: StorePaginationProps) => {
  const lastPage = !total ? undefined : Math.ceil(total / state.pageSize);

  const itemRender: PaginationProps['itemRender'] = (
    _,
    type,
    originalElement,
  ) => {
    if (type === 'prev') {
      return (
        <div>
          <Button icon={<LeftCircleOutlined />} type="text" />
        </div>
      );
    }
    if (type === 'next') {
      return (
        <div>
          <Button icon={<RightCircleOutlined />} type="text" />
        </div>
      );
    }
    return originalElement;
  };

  useEffect(() => {
    if (lastPage === undefined) {
      return;
    }

    if (state.current > lastPage) {
      set(lastPage, state.pageSize);
    }
  }, [lastPage, set, state, total]);

  return (
    <Pagination
      showSizeChanger={false}
      {...rest}
      {...state}
      onChange={set}
      simple={simple}
      total={total}
      className="store-pagination"
      itemRender={itemRender}
    />
  );
};
