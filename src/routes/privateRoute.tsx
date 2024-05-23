import { Navigate } from "react-router-dom";
interface IProps {
	children: JSX.Element;
}

function Private({ children }: IProps) {
	const hasAccess = true;
	if (hasAccess) {
		return children;
	}
	return <Navigate to='/create' />;
}

export default Private;
