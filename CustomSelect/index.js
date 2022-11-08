import React, { forwardRef, useRef } from 'react';
import Input from '@cogoport/front/components/Input';
import Button from '@cogoport/front/components/Button';
import IconCaretDown from './ic-caret.svg';
import IcClear from './ic-clear.svg';
import {
	Chip,
	Container,
	ChipContainer,
	SubContainer,
	UtilDiv,
	Placeholder,
	Value,
} from './styles';

const SelectInput = forwardRef(
	(
		{
			onFocus = () => {},
			onClick = () => {},
			labelKey = {},
			selectedOptions = [],
			caret = true,
			show = false,
			multiple = false,
			disabled = false,
			isSearchable = true,
			value = '',
			showPopover = false,
			valueKey = '',
			handleChange,
			...rest
		},
		ref,
	) => {
		const inputRef = useRef(null);

		const handleClick = () => {
			if (!disabled) {
				if (isSearchable) {
					inputRef.current.focus();
					onClick();
				} else {
					onClick();
				}
			}
		};

		return (
			<Container
				onClick={!disabled ? handleClick : null}
				ref={ref}
				className="custom-select-input-container"
			>
				<SubContainer
					className={`custom-select-input-subcontainer ${
						selectedOptions.length === 0 ? 'placeholder' : ''
					} ${show ? 'show' : ''} ${disabled ? 'disable' : ''} ${
						multiple ? 'multiple' : ''
					}`}
				>
					<ChipContainer
						className={`custom-select-input-chipcontainer ${
							multiple ? 'multiple' : ''
						}`}
					>
						{selectedOptions.length > 0 && multiple
							? selectedOptions.map((option) => {
									return (
										<Chip className="custom-select-input-chip">
											{option[labelKey]}{' '}
											<Button
												className="custom-select-input-chip-button"
												ghost
												// id={id}
												onClick={() => handleChange(option[valueKey], option)}
												style={{
													padding: 0,
													background: 'transparent',
													marginLeft: 1,
													border: 'none',
												}}
											>
												<IcClear className="clear-btn custom-select-input-chip-icon" />
											</Button>
										</Chip>
									);
							  })
							: null}

						<Input
							{...rest}
							placeholder=""
							onFocus={onFocus}
							onBlur={onFocus}
							disabled={disabled}
							ref={inputRef}
							value={value}
							onKeyDown={(e) => {
								if (
									e.key === 'Backspace' &&
									!disabled &&
									!value &&
									selectedOptions.length &&
									multiple
								) {
									const option = selectedOptions[selectedOptions.length - 1];
									handleChange(option[valueKey], option);
								}
							}}
							onChange={(e) => {
								rest.onChange(e);
								inputRef.current.style.width = `${
									inputRef.current.value.length * 8 + 2
								}px`;
							}}
						/>
						{selectedOptions.length > 0 &&
						!multiple &&
						!value &&
						!showPopover ? (
							<Value className="custom-select-input-select-value">
								{selectedOptions[0]?.[labelKey]}
							</Value>
						) : null}
						{(selectedOptions.length === 0 && !value) ||
						(showPopover && !value) ? (
							<Placeholder className="custom-select-input-select-placeholder">
								{rest.placeholder || 'Select Options'}
							</Placeholder>
						) : null}
					</ChipContainer>

					<UtilDiv
						className={`custom-select-input-select-actions ${
							showPopover ? 'showpopover' : ''
						}`}
					>
						{caret && <IconCaretDown size={1} color="black" />}
					</UtilDiv>
				</SubContainer>
			</Container>
		);
	},
);

export default SelectInput;
