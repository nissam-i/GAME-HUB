import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    icon,
    children,
    ...props
}, ref) => {
    const variants = {
        primary: 'bg-brand-purple text-white hover:bg-brand-purple/90 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]',
        secondary: 'bg-white text-black hover:bg-gray-100',
        outline: 'border border-white/20 text-white hover:bg-white/10',
        glass: 'bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20',
        ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
    };

    return (
        <motion.button
            ref={ref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'relative flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant],
                sizes[size],
                className
            )}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {!isLoading && icon && <span className="mr-2">{icon}</span>}
            {children as React.ReactNode}
        </motion.button>
    );
});

Button.displayName = "Button";
