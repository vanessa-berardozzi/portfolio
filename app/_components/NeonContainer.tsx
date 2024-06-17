import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export const NeonContainer = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => {
	return (
		<span
			className={cn(
				' shadow-[0_0_1px_#fff,inset_0_0_2px_#fff,0_0_2px_#fff,0_0_2px_#fff,0_0_15px_#fff]',
			)}
			{...props}
		/>
	);
};
