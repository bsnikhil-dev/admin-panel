import type { RenderFormFieldsProps } from "../../types";

const RenderFormFields = ({
  formItem: { type, name, placeholder },
}: RenderFormFieldsProps) => {
  switch (type) {
    case "text":
    case "email":
    case "password":
      return <input type={type} placeholder={placeholder} id={name} />;
  }
};

export default RenderFormFields;
