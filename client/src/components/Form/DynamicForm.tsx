import type { DynamicFormProps } from "../../types";
import RenderFormFields from "../../utils/utilityComponents/RenderFormFields";

const DynamicForm = ({ formControls, buttonText }: DynamicFormProps) => {
  return (
    <form>
      <div>
        {formControls.map((formItem) => {
          return (
            <div key={formItem.name}>
              <label htmlFor={formItem.label}>{formItem.label}</label>
              <RenderFormFields formItem={formItem} />
            </div>
          );
        })}
      </div>
      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
};

export default DynamicForm;
