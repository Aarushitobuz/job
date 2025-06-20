import React, { Children } from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    className?: string;
};

const Button = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',  
    className = '',
    }: ButtonProps) => {
    const baseStyles = `px-5 py-2.5 rounded-lg text-sm md:text-base font-semibold transition`;
    const variantStyles = {
        primary: 'bg-[#55a81f] text-white hover:bg-green-700',
        secondary: 'bg-[#0c3c56] text-white hover:bg-black-900',
    };
    return (
        <button 
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >{children}</button>
    );
};

export default Button;