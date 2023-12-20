import AntdIcon from '@ant-design/icons';
import { SvgComponent } from '../models/SvgComponent';
import { IconProps } from '../models/IconProps';

export const createIcon = (svg: SvgComponent) =>
  function Icon(props: IconProps) {
    return <AntdIcon component={svg} {...props} />;
  };