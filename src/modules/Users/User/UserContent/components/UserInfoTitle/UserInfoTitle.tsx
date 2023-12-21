import './UserInfoTitle.less'

type UserInfoTitleProps = {
    title: string;
}

export const UserInfoTitle = ({ title }: UserInfoTitleProps) =>
    <div className='user-info-title'>{title}</div>
