import { Modal, Form, InputNumber, Button } from "antd";
import { useState } from "react";

const AddCurrencyModal = ({ open, currency, onCancel, onOk }) => {
  const [form] = Form.useForm();
  const [total, setTotal] = useState(0);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onOk({
        ...currency,
        amount: values.amount,
      });
      form.resetFields();
      setTotal(0);
    });
  };

  return (
    <Modal
      open={open}
      title={`Купить ${currency?.name}`}
      onCancel={() => {
        form.resetFields();
        setTotal(0);
        onCancel();
      }}
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          Добавить
        </Button>,
      ]}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        onValuesChange={(changedValues) => {
          if (changedValues.amount && currency?.priceUsd) {
            const value =
              Number(changedValues.amount) * Number(currency.priceUsd);
            setTotal(value);
          }
        }}
      >
        <Form.Item
          label="Введите количество"
          name="amount"
          rules={[{ required: true, message: "Введите количество" }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>
      </Form>

      {currency && <div>Итого: {total.toFixed(2)} $</div>}
    </Modal>
  );
};

export default AddCurrencyModal;
