import React from "react";
import { Typography, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import SearchBar from "./SearchBar";
import { Link }  from "react-router-dom"

const { Title } = Typography;

const AppHeader: React.FC = () => {
  return (
    <div>
      <div>
        <Title level={2}>Quản lý sinh viên</Title>
        {/* <Link to="/add-student"> */}
          <Button type="primary" icon={<PlusOutlined />}>
            Thêm mới
          </Button>
        {/* </Link> */}
      </div>
      <SearchBar/>
    </div>
  );
};

export default AppHeader;
