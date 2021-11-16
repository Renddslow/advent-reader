import { h } from 'preact';
import { styled } from 'goober';

type Props = {
  id: string;
  label: string;
  value: string;
  disabled: boolean;
  required?: boolean;
  elementType?: string;
  onChange: (value: string) => void;
};

const FormControl = styled('div')`
  width: 100%;
  display: block;
`;

const Label = styled('label')`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 600;
`;

const InputStyled = styled('input')`
  padding: 8px 12px;
  border-radius: 4px;
  border: 2px solid #afafaf;
  font-size: 16px;
  width: 100%;
`;

const Input = ({
  label,
  onChange,
  value,
  id,
  elementType,
  required = false,
  disabled = false,
}: Props) => {
  const handleChange = (e) => onChange(e.target.value);

  return (
    <FormControl>
      <Label for={id}>{label}</Label>
      <InputStyled
        required={required}
        id={id}
        type={elementType || 'text'}
        disabled={disabled}
        onChange={handleChange}
        value={value}
      />
    </FormControl>
  );
};

export default Input;
