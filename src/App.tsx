import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import zhCN from "antd/es/locale/zh_CN";
import router from "./router";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </ConfigProvider>
  );
}

export default App;
