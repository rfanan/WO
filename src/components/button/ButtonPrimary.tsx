import * as React from "react";
import { Button } from "antd";
import {COLOR} from "@/styles/color";

interface Props {
    children?: any;
    onClick?: any;
    htmlType?: any;
    block?: boolean;
    loading?: boolean;
    width?: any;
    margin?: any;
    disabled?: any;
    style? : any;
    size? : any;
    icon? : any;
}

const ButtonPrimary = (props: Props) => {
    return (
        <Button
            loading={props.loading}
            htmlType={props.htmlType}
            onClick={props.onClick}
            type={"primary"}
            block={props.block}
            disabled={props.disabled}
            size={props.size}
            icon={props.icon}
            style={{
                margin: props.margin || "5px",
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily :"Product Sans",
                backgroundColor: COLOR.primaryButton,
                color: COLOR.white,
                border: "solid 1px " + COLOR.primaryButton,
                borderRadius: "200px",
                width: props.width,
                ...props.style
        }}>{props.children}</Button>
    );
}

export default ButtonPrimary;
