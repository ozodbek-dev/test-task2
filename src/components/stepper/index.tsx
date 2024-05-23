import { ConfigProvider, Steps, ThemeConfig } from "antd";

import { IStepperProps } from "./stepper.type";

const theme: ThemeConfig = {
	components: {
		Steps: {
			colorPrimary: "#2970FF",
			titleLineHeight: 32,
      iconSize: 32,
      fontSize:18,
			colorTextLabel: "#fff",
			padding: 0,
		},
	},
};

const Stepper = ({
  stepsCount=8,
  activeStep = 1,
  steps = [],
  ...props
}: IStepperProps): JSX.Element => {
  const placeholderSteps = Array(stepsCount).fill({});
  return (
		<ConfigProvider theme={theme}>
			<Steps
				current={activeStep - 1}
				labelPlacement='vertical'
				items={steps?.length > 0 ? steps : placeholderSteps}
				{...props}
				className=' !w-full [&_.ant-steps-item-icon]:!me-0 [&_::after]:!bg-[#2970FF] 
        '
			/>
		</ConfigProvider>
	);
};

export default Stepper;
