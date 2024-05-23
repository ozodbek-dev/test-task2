import { useHooks } from "hooks";
import "./index.scss";
import { Layout } from "antd";
import HeaderComponent from "components/Layout/header";
import { Content } from "antd/es/layout/layout";
const NotFound = () => {
  const { t } = useHooks();
  return (
    <Layout className="h-full">
      <Layout>
        <HeaderComponent />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: "black",
          }}
          className="!h-[calc(100vh-64px)] overflow-auto"
        >
          <main className="main">
            <h1 className="h1">
              4<span>&#xf6e2;</span>4
            </h1>
            <h2 className="h2">{t("Error: 404 page not found")}</h2>
            <p className="p">
              {t("Sorry, the page you're looking for cannot be accessed")}
            </p>
          </main>
        </Content>
      </Layout>
    </Layout>
  );
};

export default NotFound;
