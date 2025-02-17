import { Button, Form, Input } from 'antd';


const FormComp = () => {

  const [form] = Form.useForm()
  

  return (
    <Form
      layout={'horizontal'}
      form={form}
      
      style={{
        maxWidth:  600,
      }}
    >

      
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>

    </Form>
  )
}


export default FormComp;