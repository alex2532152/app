import './UserInfo.less';

type UserInfoProps = {
  value: string | number;
  name: string;
};

export const UserInfo = ({ value, name }: UserInfoProps) => (
  <div className="user-info">
    <div className="user-info-name">{name}</div>
    <div className="user-info-value">{value}</div>
  </div>
);
