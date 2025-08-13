import { Box, Checkbox, FormControlLabel, Radio, styled, type CheckboxProps, type RadioProps } from '@mui/material';
import cls from './style.module.scss';

const BpIcon = styled('span')(({ theme }) => ({
  padding: 0,
  borderRadius: '50%',
  width: 24,
  height: 24,
  boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: '#f5f8fa',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto #009F6B',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: '#ebf1f5',
    ...theme.applyStyles('dark', {
      backgroundColor: '#009F6B',
    }),
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
    ...theme.applyStyles('dark', {
      background: 'rgba(57,75,89,.5)',
    }),
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
    backgroundColor: '#394b59',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
  }),
}));

// const BpCheckboxIcon = styled('span')

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#fff',
  outline: '1px auto #009F6B',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 24,
    height: 24,
    backgroundImage: 'radial-gradient(#009F6B,#009F6B 52%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#fff',
    // outline: '2px auto #009F6B',
  },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      sx={{
        // display: "none",
        padding: 0,
        pr: 1,
        '&.Mui-checked': {
          color: '#009F6B',
        },
        '&.Mui-disabled': {
          color: 'rgba(206,217,224,.5)',
        },
      }}
      {...props}
    />
  );
}

function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      disableRipple
      color="default"
      defaultChecked={props.checked}
      // checkedIcon={<BpCheckedCheckboxIcon />}
      // icon={<BpCheckboxIcon />}
      sx={{
        // display: "none",
        padding: 0,
        pr: 1,
        color: "#969696",
        '&.Mui-checked': {
          color: '#009F6B',
        },
        '&.Mui-disabled': {
          color: 'rgba(206,217,224,.5)',
        },
      }}
      {...props}
    />
  );
}

const ChoiceField = ({ 
  answer, 
  onChange, 
  type,
  // isChecked,
  id,
  selectedId,
  checkedValues,
  style
}: {
  answer: { label: { ru: string, uz: string } };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  // isChecked?: boolean;
  id: string;
  selectedId: string;
  checkedValues: string[];
  style: string,
}) => {
  const isChecked = type == "radio" ? selectedId === id : checkedValues.includes(id);
  return (
    <Box
      key={id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        transition: 'border 0.3s',
        width: style === "wrap" ? "auto" : "100%",
        // width: "auto"
      }}
    >
      {style == "wrap" ? <FormControlLabel 
        value={id}
        className={cls.choiceField}
        control={type == "radio" ? <BpRadio sx={{
          display: "none",
        }} /> : <BpCheckbox checked={isChecked} onChange={onChange} sx={{
          display: "none",
        }} />}
        label={answer.label.uz}
        sx={{ 
          marginLeft: 0,
          marginRight: 0,
          width: 'auto',
          border: isChecked ? '1px solid #009966' : '1px solid #ddd',
          backgroundColor: isChecked ? '#f9fff9' : '#fff',
          // borderRadius: 3,
          transition: 'background-color 0.3s',
          p: "12px 24px",
          borderRadius: 1.75,
          color: isChecked ? '#009966' : "inherit",
        }}
        classes={{
          label: cls.choiceFieldLabel,
          root: cls.choiceFieldRoot,
        }}
      /> : 
      <FormControlLabel 
        value={id}
        className={cls.choiceField}
        control={type == "radio" ? <BpRadio sx={{
          // display: style === "wrap" ? "none" : "block",
          p: 0,
          pr: 1.5
        }} /> : <BpCheckbox checked={isChecked} onChange={onChange} sx={{
          // display: style === "wrap" ? "none" : "flex",
          color: isChecked ? '#009F6B' : '#969696',
          borderColor: "#969696",
          padding: 0,
          pr: 1.5
        }} />}
        label={answer.label.uz}
        sx={{ 
          marginLeft: 0,
          marginRight: 0,
          width: '100%',
          outline: isChecked ? '2px solid #009966' : '1px solid #ddd',
          backgroundColor: isChecked ? '#f9fff9' : '#fff',
          borderRadius: 3,
          transition: 'background-color 0.3s',
          p: "12px 16px",
        }}
        classes={{
          label: cls.choiceFieldLabel,
          root: cls.choiceFieldRoot,
        }}
      />}
    </Box>
  )
}

export default ChoiceField;