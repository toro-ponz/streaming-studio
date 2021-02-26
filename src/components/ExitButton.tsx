import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';

const ExitButton: React.FC = () => {
  const label = 'Exit';
  const onClick = useCallback(() => window.app.exit(), []);
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={onClick}>
        {label}
      </Button>
    </div>
  );
};

export default ExitButton;
