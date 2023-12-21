import { ReactNode } from "react";
import "./AdditionalBlockInfo.less";

type AdditionalBlockInfoProps = {
    children: ReactNode;
}

export const AdditionalBlockInfo = ({ children }: AdditionalBlockInfoProps) => 
    <div className="user-additional-block-info">
        { children }
    </div>