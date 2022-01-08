// 可以根据条件判断拼接className的一款插件
import classNames from 'classnames';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';

export type ButtonType = 'link' | 'primary' | 'danger' | 'default';
export type ButtonSize = 'small' | 'large' | 'middle';

// 额外的属性
interface ButtonProps {
    children: any;
    classNames?: string;
    type?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean;
    href?: string;
}

// 按钮的属性(将原生的type去掉，防止冲突)
type ButtonBaseProps = ButtonProps & Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>;
// a链接的属性
type ABaseProps = ButtonProps & Omit<AnchorHTMLAttributes<HTMLElement>, 'type'>;

const Button: FC<Partial<ButtonBaseProps & ABaseProps>> = props => {
    const { children, size, type, className: originalClasses, ...rest } = props;
    // a链接的disabled是添加到style里，button的disabled直接有这个属性
    const classes = classNames('btn', originalClasses, `btn-${type}`, `btn-${size}`, {
        disabled: type === 'link' && props.disabled,
    });
    if (type === 'link' && props.href) {
        return (
            <a className={classes} href={props.href} {...rest}>
                {children}
            </a>
        );
    }
    return (
        <button className={classes} disabled={props.disabled} {...rest}>
            {children}
        </button>
    );
};

export default Button;
