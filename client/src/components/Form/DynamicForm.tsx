import type { DynamicFormProps } from "../../types";
import RenderFormFields from "../../utils/utilityComponents/RenderFormFields";

const DynamicForm = ({
  formControls,
  formData,
  onChange,
  buttonText,
  onSubmit,
}: DynamicFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        {formControls.map((formItem) => {
          return (
            <div key={formItem.name}>
              <label htmlFor={formItem.label}>{formItem.label}</label>
              <RenderFormFields
                formItem={formItem}
                value={formData[formItem.name] || ""}
                onChange={onChange}
              />
            </div>
          );
        })}
      </div>
      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
};

export default DynamicForm;
