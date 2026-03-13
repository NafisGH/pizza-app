import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import type { SearchProps } from './Search.props';
import serchIcon from '../../assets/searchIcon.svg';

const Search = forwardRef<HTMLInputElement, SearchProps>(
	function Input({ isValid = true, className, ...props }, ref) {
		return (
			<div className={styles['input-wrapper']}>
				<input
					ref={ref}
					className={cn(styles['input'], className, {
						[styles['invalid']]: !isValid
					})}
					{...props}
				/>
				<img className={styles['icon']} src={serchIcon} alt='лупа'/>
			</div>
			
		);
	}
);

export default Search;
