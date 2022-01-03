
import React from 'react';
import { FormInstance } from "antd";
import { Rule } from 'rc-field-form/lib/interface';

export = FormBuilder;
export as namespace FormBuilder;

declare const FormBuilder: React.FC<FormBuilderInterface> & {
    defineWidget: (key: string, component: React.ReactComponentElement, metaConvertor?: (field: FieldType) => FieldType) => void,
    useForceUpdate: () => () => void,
}

export declare type FormItemLayoutType = {
    labelCol?: any,
    wrapperCol?: any,
}

export declare type RenderFunction = (value: any, form: FormInstance<any>, initialValues: any) => React.ReactNode;

export declare type FieldTypeOption = {
    label: string | React.ReactElement,
    value: any,
    disabled?: boolean
}

export declare type FieldType = {
    /** Required. The field key. Could be nested like user.name.last. It's just the key value passed to getFieldDecorator(key, options) */
    key: string;

    /** Alternative of key. In form v4, if you need nested property for colleced form values like : { name: { first, last } } you can define an array for the name property: ['name', 'first']. If you prefer name.first, use key to define it. */
    name?: string | string[];

    /** Label text. */
    label?: string | React.ReactElement;

    /** placeholder. */
    placeholder?: string | string[];

    /** Whether the field is in view mode. Note if a field is in viewMode but FormBuilder is not, the label in the field is still right aligned. */
    viewMode?: boolean;

    /** Whether the field is in view mode. Note if a field is in viewMode but FormBuilder is not, the label in the field is still right aligned. */
    readOnly?: boolean;

    /** If set, there is a question mark icon besides label to show the tooltip. */
    tooltip?: string | React.ReactNode;

    /** Which component used to render field for editing. The component should be able to be managed by antd form. */
    widget?: string | React.ReactComponentElement;

    /** Props passed to widget. */
    widgetProps?: any,  //TODO

    /** Which component used to render field in view mode. */
    viewWidget?: string | React.ReactComponentElement;

    /** Props passed to viewWidget */
    viewWidgetProps?: any,  //TODO

    /** This applies formItemLayout only to this field rather than which defined in the root meta. */
    formItemLayout?: FormItemLayoutType | FormItemLayoutType[];

    /** If provided, this is used for rendering the whole field in both edit and view mode, should render <Form.Item>, getFieldDecorator itself. widget property will be ignored. */
    render?: RenderFunction;

    /** If provided, this is used for rendering field value in view mode, viewWidget will be ignored. */
    renderView?: RenderFunction;

    /** How many columns the field should take up. */
    colSpan?: number;

    /** The initialValue to be passed to the field widget. In view mode, it's the value to be display. */
    initialValue?: any;

    /** Get the initialValue of the field. This may be used to combine multiple fields into one field */
    getInitialValue?: (field: FieldType, initialValues: any, form: FormInstance<any>) => any;

    /** If set to true, every widget in field will be given a disabled property regardless of if it's supported. */
    disabled?: boolean;

    dynamic?: boolean;

    /** In multiple columns layout, used to clear left, right or both side fields. Like the clear property in css. Could be left: the field starts from a new row; right: no fields behind the field; both: no other fields in the same row. */
    clear?: 'left' | 'right' | 'both';

    /** If your field widget is a funcional component which doesn't implement forwardRef, set this to true so that React doesn't prompt warning message. */
    forwardRef?: boolean;

    /** By default, each field is wrapped with <Form.Item>, if set to true, it just use getFieldDecorators. */
    noFormItem?: boolean;

    /** The same with old noFormItem. Provlide the alias noStyle to be consitent with antd v4. */
    noStyle?: boolean;

    /** The children of widget defined in meta. */
    children?: React.ReactNode;

    /** Whether the field is required. */
    required?: boolean;

    /** If a field is required, you can define what message provided if no input. By default, it's ${field.label} is required. */
    message?: string;

    /** Only used by select, radio-group. checkbox-group components. */
    options?: string[] | FieldTypeOption[],

    /** The props passed to <Form.Item>. Below properties are short way to pass props to <Form.Item>. See more from antd's doc */
    formItemProps?: any;

    /** Used with label, whether to display : after label text. */
    colon?: boolean;

    /** The extra prompt message. It is similar to help. Usage example: to display error message and prompt message at the same time. */
    extra?: string | React.ReactNode;

    /** Used with validateStatus, this option specifies the validation status icon. Recommended to be used only with Input. */
    hasFeedback?: boolean;

    /** The prompt message. If not provided, the prompt message will be generated by the validation rule. */
    help?: string | React.ReactNode;

    /** Set sub label htmlFor. */
    htmlFor?: string;

    /** The layout of label. You can set span offset to something like {span: 3, offset: 12} or sm: {span: 3, offset: 12} same as with <Col>. */
    labelCol?: any;

    /** The validation status. If not provided, it will be generated by validation rule. options: 'success' 'warning' 'error' 'validating' */
    validateStatus?: string;

    /** The layout for input controls, same as labelCol. */
    wrapperCol?: any;

    /** The options to pass to getFieldDecorator(id, options). Below properties are short way to pass options to getFieldDecorator(id, options). See more from antd's doc */
    fieldProps?: any;

    /** Specify how to get value from event or other onChange arguments */
    getValueFromEvent?: (...args: any[]) => any;

    /** Get the component props according to field value. */
    getValueProps?: (value: any) => any;

    /** Normalize value to form component */
    normalize?: (value: any, prevValue: any, allValues: any) => any;

    /** Keep the field even if field removed. */
    preserve?: string;

    /** Includes validation rules. Please refer to "Validation Rules" part for details. */
    rules?: Rule[],

    /** When to collect the value of children node */
    trigger?: string;

    /** Whether stop validate on first rule of error for this field. */
    validateFirst?: boolean;

    /** When to validate the value of children node. */
    validateTrigger?: string | string[];

    /** Props of children node, for example, the prop of Switch is 'checked'. */
    valuePropName?: string;
}

export declare type Meta = {
    columns?: number;
    formItemLayout?: FormItemLayoutType | FormItemLayoutType[];
    viewMode?: boolean;
    disabled?: boolean;
    initialValues?: any;
    fields?: FieldType | FieldType[];
    gutter?: number;
}

export interface FormBuilderInterface {
    meta: Meta | FieldType | FieldType[];
    form: FormInstance<any>;
    viewMode?: boolean;
    initialValues?: any;
    disabled?: boolean;
}

