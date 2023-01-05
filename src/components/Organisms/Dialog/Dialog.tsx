import Typography from 'components/Atoms/Typography/Typography';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useContext } from 'react';
import styled from 'styled-components';
import { DialogDetail, getDialogElement } from './dialog.utils';
import { closeDialog, FormType, selectDialogState } from './dialogSlice';

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
              <Typography variant='dialog-title' color='secondary'>
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
