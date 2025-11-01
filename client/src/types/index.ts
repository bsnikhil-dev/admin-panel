import type React from 'react';
import type { ReactNode } from 'react';

export interface userDetails {
  username: string;
  email: string;
  password?: string;
  role: string;
}
export interface CheckAuthenticationProps {
  isAuthenticated: boolean;
  userDetails: userDetails;
  children: ReactNode;
}

export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'select'
  | 'checkbox'
  | 'textarea'
  | 'radio';

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
  formData: Record<string, any>;
  onChange: (e: React.ChangeEvent<any>) => void;
  buttonText?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface RenderFormFieldsProps {
  formItem: FormField;
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export interface Destination {
  title: string;
  description: string;
}
export interface SearchDropDownProps {
  showSearchDropDown: boolean;
  setShowSearchDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  destinationList: Destination[];
}
