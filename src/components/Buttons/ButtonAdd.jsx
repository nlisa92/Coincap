import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const ButtonAdd = ({ onClick, children = "Добавить" }) => {
  return (
    <Button type="primary" icon={<PlusOutlined />} onClick={onClick}>
      {children}
    </Button>
  );
};
export default ButtonAdd;
