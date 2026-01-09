import { Modal, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import ButtonDelete from "../Buttons/ButtonDelete";

const PortfolioModal = ({ open, items, onDelete, onClose }) => {
  const total = items.reduce((sum, item) => {
    return sum + Number(item.amount) * Number(item.priceUsd);
  }, 0);

  return (
    <Modal
      open={open}
      title="Портфель"
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Закрыть
        </Button>,
      ]}
    >
      {items.length === 0 ? (
        <p>Портфель пуст</p>
      ) : (
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <div>
                <strong>{item.name}</strong>
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  Количество: {item.amount}
                </div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  Стоимость: {(item.amount * item.priceUsd).toFixed(2)} $
                </div>
              </div>

              <ButtonDelete
                danger
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => {
                  console.log(item.id);
                  onDelete(item.id);
                }}
              />
            </div>
          ))}

          <h3 style={{ marginTop: 16 }}>Итого: {total.toFixed(2)} $</h3>
        </div>
      )}
    </Modal>
  );
};

export default PortfolioModal;
