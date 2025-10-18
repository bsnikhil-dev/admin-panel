import type { ReactNode } from "react";

export interface userDetails {
  userName: string;
  email: string;
  password: string;
  role: string;
}
export interface CheckAuthenticationProps {
  isAuthenticated: boolean;
  userDetails: userDetails;
  children: ReactNode;
}

export type FieldType = "text" | "email" | "password" | "select" | "checkbox";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: { label: string; value: string }[];
  validation?: Record<string, any>;
}

export interface DynamicFormProps {
  formControls: FormField[];
  buttonText?: string;
}

export interface RenderFormFieldsProps {
  formItem: FormField;
}
