import { cva, type VariantProps } from 'class-variance-authority';
import { Text, TouchableOpacity, View } from 'react-native';

import { cn } from '../lib/utils';

const buttonVariants = cva('flex flex-row justify-center rounded-3xl', {
  variants: {
    variant: {
      default: 'bg-blue-700',
      outline: 'border-gray-600 bg-transparent border',
      destructive: 'bg-destructive',
      ghost: 'bg-slate-700',
      link: 'text-primary underline-offset-4',
    },
    size: {
      default: 'h-12 w-80 py-3',
      sm: 'h-8 px-2',
      lg: 'h-12 px-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const buttonTextVariants = cva('text-center font-medium', {
  variants: {
    variant: {
      default: 'text-white',
      outline: 'text-gray-600',
      destructive: 'text-destructive-foreground',
      ghost: 'text-primary-foreground',
      link: 'text-primary-foreground underline',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string;
  labelClasses?: string;
  icon?: React.ReactNode;
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  icon,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {!!icon && (
        <View className="mr-3 items-center justify-center">{icon}</View>
      )}

      <Text
        className={cn(
          buttonTextVariants({ variant, size, className: labelClasses })
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export { Button, buttonTextVariants, buttonVariants };
