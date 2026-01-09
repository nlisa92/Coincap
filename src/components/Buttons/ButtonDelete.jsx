import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const ButtonDelete = ({ onClick }) => {
  return (
    <Button
      danger
      type="text"
      icon={<DeleteOutlined />}
      onClick={onClick}
    ></Button>
  );
};
export default ButtonDelete;
