import Button from 'components/Atoms/Button/Button';
import Typography from 'components/Atoms/Typography/Typography';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useContext } from 'react';
import styled from 'styled-components';
import { getDialogElement } from './dialog.utils';
import { closeDialog, selectDialogState } from './dialogSlice';
import CloseIcon from 'assets/icon/cancel-cross.svg';

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
  width: 400px;
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

const Dialog = () => {
  const dispatch = useAppDispatch();
  const theme = useContext(ThemeContext);
  const { isOpen, formType } = useAppSelector(selectDialogState);

  if (!formType) return null;
  const dialogDetail = getDialogElement(formType);

  const handleClose = () => {
    dispatch(closeDialog());
  };

  return (
    <Modal>
      <Overlay onClick={handleClose} />
      <ModalContent theme={theme} isOpen={isOpen}>
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
            <div>{dialogDetail.component && dialogDetail.component()}</div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default Dialog;
