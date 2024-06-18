import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => {
	return (
		<span
			className={cn(
				'bg-accent/40 font-mono border border-accent px-1 py-0.5  text-primary rounded-xl',
				className
			)}
			{...props}
		/>
	);
};
