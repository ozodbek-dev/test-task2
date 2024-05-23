interface IConfig {
  APP_NAME: string;
  API_ROOT: string;
}

const config: IConfig = {
	APP_NAME: "Test App",
	API_ROOT: import.meta.env.VITE_API_URL || "",
};

export default config;
