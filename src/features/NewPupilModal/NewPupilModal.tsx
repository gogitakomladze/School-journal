import { Modal, Input, Form, Button } from "antd";

import { TPupil } from "@src/@types/general";
import { useGlobalProvider } from "@src/provider/GlobalProvider";

type NewPupilModalProps = {
  onCancel: () => void;
};

export function NewPupilModal({ onCancel }: NewPupilModalProps) {
  const { setPupils } = useGlobalProvider();

  function addPupil(pupil: TPupil) {
    setPupils((prev) => [...prev, pupil]);
    onCancel();
  }

  return (
    <Modal
      centered
      width={400}
      title="დაამატე ახალი მოსწავლე"
      open={true}
      onCancel={onCancel}
      footer={false}
    >
      <Form<TPupil> onFinish={(values) => addPupil(values)}>
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "სახელი აუცილებელი ველია" }]}
        >
          <Input placeholder="მოსწავლის სახელი" />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "გვარი აუცილებელი ველია" }]}
        >
          <Input placeholder="მოსწავლის გვარი" />
        </Form.Item>
        <Form.Item
          name="idNumber"
          rules={[
            { required: true, message: "პირადი ნომერი აუცილებელი ველია" },
          ]}
        >
          <Input placeholder="მოსწავლის პირადი ნომერი" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            დამატება
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
