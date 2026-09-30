import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'pill' | 'nav';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', ...props }, ref) => {
    
    let variantStyles = '';
    
    if (variant === 'primary') {
      variantStyles = 'bg-[#3b5ce4] text-white hover:bg-[#304bc2] font-semibold px-8 py-3.5 rounded-[8px] shadow-sm transition-all duration-300 focus:ring-4 focus:ring-[#3b5ce4]/30 focus:outline-none';
    } else if (variant === 'nav') {
      variantStyles = 'bg-[#3b5ce4] text-white hover:bg-[#304bc2] font-medium px-5 py-2.5 text-[15px] rounded-[6px] shadow-sm transition-all duration-300 focus:ring-4 focus:ring-[#3b5ce4]/30 focus:outline-none';
    } else if (variant === 'pill') {
      variantStyles = 'border-[1px] border-[#3b59df] text-[#3b59df] bg-[#eff3fd] hover:bg-[#3b59df] hover:text-white active:bg-[#3b59df] active:text-white font-medium px-6 py-[7px] text-[15px] rounded-full transition-all duration-300 focus:outline-none';
    }

    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center ${variantStyles} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
