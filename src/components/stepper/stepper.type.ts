import { Steps } from "antd";

export interface IStepperProps extends React.ComponentProps<typeof Steps> {
	stepsCount: number;
	steps?:Record<string, any>[];
	activeStep: number;
}
