import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";

const Input = () => {
  const [count, setCount] = useState(0);

  const handleSubtractOne = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddOne = () => {
    setCount(count + 1);
  };

  
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <IconButton onClick={handleSubtractOne}>
          <RemoveIcon />
        </IconButton>
<IconButton>
{count}
</IconButton>
        

        <IconButton onClick={handleAddOne}>
          <AddIcon />
        </IconButton>
      </Stack>
    </div>
  );
};

export default Input;
