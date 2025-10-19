import type { RenderFormFieldsProps } from "../../types";

const RenderFormFields = ({
  formItem: { type, name, placeholder, options },
  value,
  onChange,
}: RenderFormFieldsProps) => {
  switch (type) {
    case "text":
    case "email":
    case "password":
      return (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    case "textarea":
      return (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    case "select":
      return (
        <select name={name} value={value} onChange={onChange}>
          <option value="">Select</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    case "radio":
      return (
        <div>
          {options?.map((opt) => (
            <label key={opt.value}>
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={onChange}
              />
              {opt.label}
            </label>
          ))}
        </div>
      );
    case "checkbox":
      return (
        <input
          type="checkbox"
          name={name}
          checked={value}
          onChange={(e) =>
            onChange({
              ...e,
              target: {
                ...e.target,
                value: e.target.checked,
                name: name,
              },
            })
          }
        />
      );
  }
};

export default RenderFormFields;
