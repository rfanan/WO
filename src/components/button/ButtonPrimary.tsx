import * as React from "react";
import { Button } from "antd";
import { COLOR } from "@/styles/color";
import { CSSProperties } from "react";

interface Props {
    children?: any;
    onClick?: any;
    htmlType?: any;
    block?: boolean;
    loading?: boolean;
    width?: any;
    margin?: any;
    disabled?: any;
    style?: CSSProperties;
    size?: any;
    icon?: any;
    className?: string;
    shapeType?: "rectangle" | "oval";
}

const ButtonPrimary = (props: Props) => {

    let shapeStyle: CSSProperties = {}
    if (props.shapeType == "oval") {
        shapeStyle = {
            borderRadius: 20
        }
    } else if (props.shapeType == "rectangle") {
        shapeStyle = {
            borderRadius: 10
        }
    }

    return (
        <Button
            className={props.className}
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
                backgroundColor: COLOR.primaryColor,
                color: COLOR.white,
                border: "solid 1px " + COLOR.primaryColor,
                width: props.width,
                ...shapeStyle,
                ...props.style
            }}>{props.children}</Button>
    );
}

export default ButtonPrimary;