import { Box, FormControlLabel, Radio } from '@mui/material';
import cls from './style.module.scss';

const ChoiceField = ({ 
  answer, 
  // onChange, 
  // type,
  // isChecked,
  id
}: {
  answer: { label: { ru: string } };
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // type: string;
  // isChecked?: boolean;
  id: string;
}) => {
  return (
    // <label
    //   className={cls.choiceField}
    // >
    //   <input
    //     className={cls.choiceFieldInput}
    //     type={type}
    //     checked={isChecked}
    //     onChange={onChange}
    //   />
    //   {answer.label.ru}
    // </label>
    <Box
      key={id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        transition: 'border 0.3s',
      }}
    >
      <FormControlLabel 
        value={id}
        className={cls.choiceField}
        control={<Radio color="success" sx={{
          p:0,
          marginRight: 1.5,
        }} />}
        label={answer.label.ru}
        sx={{ 
          marginLeft: 0,
          marginRight: 0,
          width: '100%',
          border: "3" === id ? '2px solid #009966' : '1px solid #ddd',
          backgroundColor: "3" === id ? '#f9fff9' : '#fff',
          borderRadius: 3,
          p: "12px 16px",
        }}
        classes={{
          label: cls.choiceFieldLabel,
          root: cls.choiceFieldRoot,
        }}
      />
    </Box>
  )
}

export default ChoiceField;