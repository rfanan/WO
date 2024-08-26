import { PageState } from "@/util/constant";
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Skeleton,
  Typography,
} from "antd";
import Password from "antd/es/input/Password";
import TextArea from "antd/es/input/TextArea";
import { CSSProperties } from "react";

export interface InputProps {
  name?: any;
  label?: any;
  placeholder?: any;
  style?: CSSProperties;
  styleFormItem?: CSSProperties;
  rules?: any;
  labelRules?: any;
  autoComplete?: "new-password" | "new-email" | "off" | "on";
  size?: "large" | "middle" | "small";
  type?: "Input" | "Password" | "InputNumber" | "DatePicker" | "TextArea";
  disabled?: any;
  onChange?: any;
  picker?: "week" | "month" | "quarter" | "year";
  mode?: "week" | "month" | "quarter" | "year";
  disabledDate?: any;
  parser?: any;
  formatter?: any;
  min?: any;
  max?: any;
  defaultValue?: any;
  readOnly?: any;
  suffix?: any;
  prefix?: any;
  loading?: boolean;
  hidden?: boolean;
  required?: boolean;
  addonBefore?: any;
  precision?: any;
  viewValue?: any;
  viewStyle?: CSSProperties;
  pageState?: any;
  tooltip?: any;
  visibilityToggle?: Object; // Example: visibilityToggle={{visible: false, onVisibleChange: (visible) => { console.log("visible", visible) } }}
}

let defaultProps = {
  disabled: false,
  size: "middle",
  autoComplete: "off",
  type: "Input",
  style: { width: "100%" },
  hidden: false,
  precision: 2,
};

function InputFormHandle(value: any) {
  if (value.type === "Input") {
    return (
      <Input
        addonBefore={value.addonBefore}
        disabled={value.disabled}
        autoComplete={value.autoComplete}
        placeholder={value.placeholder}
        size={value.size}
        style={value.style}
        onChange={value.onChange}
        prefix={value.prefix}
        suffix={value.suffix}
        defaultValue={value.defaultValue}
        readOnly={value.readOnly}
      />
    );
  }
  if (value.type === "Password") {
    return (
      <Password
        addonBefore={value.addonBefore}
        disabled={value.disabled}
        autoComplete={value.autoComplete}
        placeholder={value.placeholder}
        size={value.size}
        style={value.style}
        onChange={value.onChange}
        defaultValue={value.defaultValue}
        readOnly={value.readOnly}
        visibilityToggle={value.visibilityToggle}
      />
    );
  }
  if (value.type === "InputNumber") {
    return (
      <InputNumber
        addonBefore={value.addonBefore}
        disabled={value.disabled}
        autoComplete={value.autoComplete}
        placeholder={value.placeholder}
        precision={value.precision}
        size={value.size}
        style={value.style}
        onChange={value.onChange}
        parser={value.parser}
        formatter={value.formatter}
        min={value.min}
        max={value.max}
        prefix={value.prefix}
        suffix={value.suffix}
        defaultValue={value.defaultValue}
        readOnly={value.readOnly}
      />
    );
  }
  if (value.type === "TextArea") {
    return (
      <TextArea
        disabled={value.disabled}
        autoComplete={value.autoComplete}
        placeholder={value.placeholder}
        size={value.size}
        style={value.style}
        onChange={value.onChange}
        defaultValue={value.defaultValue}
        readOnly={value.readOnly}
      />
    );
  }
  if (value.type === "DatePicker") {
    return (
      // @ts-ignore
      <DatePicker
        disabled={value.disabled}
        placeholder={value.placeholder}
        size={value.size}
        style={value.style}
        onChange={value.onChange}
        picker={value.picker}
        mode={value.mode}
        disabledDate={value.disabledDate}
        defaultValue={value.defaultValue}
      />
    );
  }
}

function renderLoading() {
  return <Skeleton.Input active={true} block={true} />;
}

function getDefaultFormatter() {
  return (value: any) => {
    if (value === undefined || value === null) return "";
    const num = Number(value);
    return `${num.toLocaleString("id-ID")}`;
  };
}

function getDefaultParser() {
  return (value: any) => {
    if (value === undefined || value === null) return "";
    const cleanedValue = value.replace(/\$\s?/g, "");
    const parsedValue = cleanedValue.replace(/\./g, "").replace(",", ".");
    return parsedValue;
  };
}

export default function InputForm(props: InputProps) {
  let oldProps = JSON.parse(JSON.stringify(defaultProps));
  oldProps["formatter"] = getDefaultFormatter();
  oldProps["parser"] = getDefaultParser();
  let { viewValue, ...newProps } = props;

  let value = Object.assign(oldProps, JSON.parse(JSON.stringify(newProps)));
  value.onChange = props.onChange;
  value.visibilityToggle = props.visibilityToggle;
  value.rules = props.rules;
  value.suffix = props.suffix;

  function renderComponent() {
    if (value.loading) {
      return renderLoading();
    }
    if (props.pageState == PageState.view) {
      return (
        <>
          <Typography
            style={{ fontWeight: 600, fontSize: 18, ...props.viewStyle }}
          >
            {props.viewValue ? props.viewValue : "-"}
          </Typography>
        </>
      );
    } else {
      return InputFormHandle(value);
    }
  }

  return (
    <Form.Item
      name={props.name}
      tooltip={props.tooltip}
      label={value.label}
      rules={value.rules}
      hidden={value.hidden}
      required={value.required}
      style={value.styleFormItem}
      validateFirst
    >
      {renderComponent()}
    </Form.Item>
  );
}
