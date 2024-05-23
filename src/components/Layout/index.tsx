// Import images
import "react-toastify/dist/ReactToastify.css";

import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import ModalProvider from "components/providers/modal-provider";
import { ToastContainer } from "react-toastify";
const { Content } = Layout;

const App: React.FC = () => {
	return (
		<Layout className='h-full'>
			<ModalProvider />
			<Layout>
				<Header />
				<ToastContainer />
				<Content
					style={{
						padding: 24,
						minHeight: 280,
						background: "#0A090C",
					}}
					className='!h-[calc(100vh-64px)] overflow-auto'
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default App;
