import { Input } from "antd";
import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { TCustomInputMaskProps } from "../input.types";
import { useHooks } from "hooks";
import { cn } from "lib/utils";

const InputMaskComponent = (props: TCustomInputMaskProps) => {
	const {
		field: { value="+998", name },
		className = "",
		mask = "+999 (99) 999-99-99",
		label = "",
		form: { setFieldValue, setFieldTouched, errors, touched },
		onChange = () => {},
		onBlur = () => {},
		errorMessage = "",
		rootClassName = "",
	} = props;
	const [isError, setIsError] = useState(false);
	const { get } = useHooks();

	return (
		<div className={rootClassName + " field-container"}>
			{label ? <p className='input__label'>{label}</p> : null}
			<InputMask
				formatChars={{
					"9": "[0-9]",
					A: "[A-Z]",
				}}
				size='large'
				mask={mask}
				placeholder='+998 (__) ___-__-__'
				status={get(errors, name) && get(touched, name) && (get(errors, name) || isError) ? "error" : ""}
				onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
					if (e.target.value.replace(/_|_/g, "").length < mask.length) {
						setIsError(true);
					} else {
						setIsError(false);
					}
					setFieldTouched(name, true);
					onBlur(e);
				}}
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					onChange(e);
					setFieldValue(name, e.target.value, true);
				}}
				className='input-text'
			>
				{(inputProps: any) => <Input className={`${className} block`} {...inputProps} />}
			</InputMask>
			{((!!get(touched, name) && !!get(errors, name)) || isError) && (
				<p className={cn(!!get(touched, name) && !!get(errors, name) && "text-rose-600 text-[14px]")}>
					{errorMessage ? errorMessage : <>{get(errors, name)}</>}
				</p>
			)}
		</div>
	);
};

export default InputMaskComponent;
