import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const ButtonAdd = ({ onClick }) => {
  return (
    <Button type="primary" icon={<PlusOutlined />} onClick={onClick}></Button>
  );
};
export default ButtonAdd;
