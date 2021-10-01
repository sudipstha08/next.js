import { Button } from "../components";
import "antd/dist/antd.css";

export default {
  title: "Button",
  component: Button,
};

const Template = (args: any) => <Button {...args}>Click me</Button>;

export const Green: any = Template.bind({});

Green.args = {
  type: "primary",
  disabled: false,
  danger: true,
};

// export const Red = () => (
//   <Button disabled={false} htmlType="button" type="primary">
//     Press me
//   </Button>
// );
