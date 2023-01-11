import Button from 'components/Atoms/Button/Button';
import Typography from 'components/Atoms/Typography/Typography';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useContext, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { DialogWidth, getDialogElement } from './dialog.utils';
import { closeDialog, FormType, openDialog, selectDialogState } from './dialogSlice';
import CloseIcon from 'assets/icon/cancel-cross.svg';
import { RequestData, useRegisterMutation, useLoginMutation, LoginResponse } from 'services/user';
import { toast } from 'react-toastify';

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(0, 0, 0, 0.85);
`;

type ModalProps = {
  isOpen: boolean;
};

const ModalContent = styled.div<ModalProps>`
  z-index: 102;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  background: ${(props) => props.theme?.palette.light};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  & > .dialog-header {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.theme?.palette.primary};
    padding: 1.625rem;
    & > button {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }
`;

const ModalActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Dialog = () => {
  const dispatch = useAppDispatch();
  const theme = useContext(ThemeContext);
  const { isOpen, formType } = useAppSelector(selectDialogState);
  const [data, setData] = useState<RequestData>({
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
  });
  const [register] = useRegisterMutation();
  const [login] = useLoginMutation();

  if (!formType) return null;
  const dialogDetail = getDialogElement(formType);

  const handleClose = () => {
    dispatch(closeDialog());
  };

  const handleRegister = () => {
    dispatch(closeDialog());
    dispatch(openDialog(FormType.login));
  };

  const handleLogin = () => {
    dispatch(closeDialog());
    dispatch(openDialog(FormType.register));
  };

  const handleSubmitRegister = async () => {
    try {
      const user = await register(data).unwrap();
      dispatch(closeDialog());
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitLogin = async () => {
    const { firstName, lastName, email, ...rest } = data;
    try {
      const user = await login({ ...rest }).unwrap();
      dispatch(closeDialog());
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [name.trim()]: value,
    });
  };

  const setWidth = (width: DialogWidth): CSSProperties => {
    let scale = 1;

    if (width === 'md') scale = 1.1;
    if (width === 'lg') scale = 1.4;

    const style: CSSProperties = {
      width: `${400 * scale}px`,
    };
    return style;
  };

  return (
    <Modal>
      <Overlay onClick={handleClose} />
      <ModalContent
        theme={theme}
        isOpen={isOpen}
        style={setWidth(dialogDetail?.width as DialogWidth)}
      >
        {dialogDetail && (
          <>
            <div className={'dialog-header'}>
              <Button
                variant={'icon-button'}
                className={'header_actions_button--mobile'}
                onClick={handleClose}
                style={{ ...{ padding: 0 } }}
              >
                <img src={CloseIcon} height={'12px'} alt={''} />
              </Button>
              <Typography
                variant='dialog-title'
                color='secondary'
                style={{ ...{ textTransform: 'uppercase' } }}
              >
                {dialogDetail.title}
              </Typography>
            </div>
            <div>
              {dialogDetail.component && dialogDetail.component({ handleChange: handleChange })}
            </div>
            <ModalActions>
              {formType === 'register' ? (
                <>
                  <Button
                    variant='primary-light'
                    size='md'
                    type='submit'
                    onClick={handleSubmitRegister}
                  >
                    Create Account
                  </Button>
                  <Typography variant='paragraph' color='secondary'>
                    If you already have an account just
                    <Button variant='button-text-light' size='sm' onClick={handleRegister}>
                      SIGN IN
                    </Button>
                  </Typography>
                </>
              ) : formType === 'login' ? (
                <>
                  <Button
                    variant='primary-light'
                    size='md'
                    type='submit'
                    onClick={handleSubmitLogin}
                  >
                    Log In
                  </Button>
                  <Typography variant='paragraph' color='secondary'>
                    If you do not have an account
                    <Button variant='button-text-light' size='sm' onClick={handleLogin}>
                      SIGN UP
                    </Button>
                  </Typography>
                </>
              ) : null}
            </ModalActions>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default Dialog;
