'use client';
import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useForm } from 'react-hook-form';

import { Button, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { Dialog } from '@mui/material';
import { supabaseSignIn, supabaseSignUp } from '@/lib/features/profile/authHelper';

interface UserFormData {
  email: string;
  password: string;
}

const UserDialog: FC<{ onClose: () => void }> = (props) => {
  const { onClose } = props;

  const [activeTab, setActiveTab] = useState('signIn');
  const [formMessage, setFormMessage] = useState({ text: '', color: '' });

  const onTabChange = (event: React.SyntheticEvent, newValue: string): void => {
    setActiveTab(newValue);
  };

  const { register, handleSubmit } = useForm<UserFormData>();

  const onLoginClick = async (data: UserFormData): Promise<void> => {
    await supabaseSignIn(data.email, data.password).catch((error) => {
      setFormMessage({ text: error.message, color: 'error' });
    });
  };

  const onRegisterClick = async (data: UserFormData): Promise<void> => {
    await supabaseSignUp(data.email, data.password)
      .then(() => {
        setFormMessage({ text: 'please check your mail box', color: 'green' });
      })
      .catch((error) => {
        setFormMessage({ text: error.message, color: 'error' });
      });
  };

  return (
    <Dialog open={true}>
      <TabContext value={activeTab}>
        <DialogTitle>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={onTabChange} aria-label="lab API tabs example">
              <Tab label="Sign In" value="signIn" />
              <Tab label="Sign Up" value="signUp" />
            </TabList>
          </Box>
        </DialogTitle>

        <DialogContent className=" min-h-96">
          <TabPanel value="signIn">
            <TextField
              {...register('email', {})}
              margin="dense"
              autoFocus
              required
              id="email"
              name="email"
              label="email"
              fullWidth
              variant="standard"
            />
            <TextField
              {...register('password', {})}
              margin="dense"
              required
              id="password"
              name="password"
              label="password"
              fullWidth
              variant="standard"
              type="password"
            />

            <Button variant="outlined" className="mt-6 w-full" onClick={handleSubmit(onLoginClick)}>
              Log in
            </Button>

            {formMessage.text ? (
              <Typography color="error" className="mt-3">
                {formMessage.text}
              </Typography>
            ) : null}
          </TabPanel>

          <TabPanel value="signUp">
            <TextField
              {...register('email', {})}
              margin="dense"
              autoFocus
              required
              id="email"
              name="email"
              label="email"
              fullWidth
              variant="standard"
            />
            <TextField
              {...register('password', {})}
              margin="dense"
              required
              id="password"
              name="password"
              label="password"
              fullWidth
              variant="standard"
              type="password"
            />

            <Button variant="outlined" className="mt-6 w-full" onClick={handleSubmit(onRegisterClick)}>
              register
            </Button>

            {formMessage.text ? (
              <Typography color="error" className="mt-3">
                {formMessage.text}
              </Typography>
            ) : null}
          </TabPanel>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </TabContext>
    </Dialog>
  );
};

export default UserDialog;
