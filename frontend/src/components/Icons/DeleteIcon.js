import styled from "styled-components";
import React, { useState } from "react";
import { Delete } from "@styled-icons/material-sharp";
import { Text, Button, Modal } from "../../components";
import api from "../../services/api";

const DeleteIconComponent = ({ naverId }) => {
  const [isDeleteConfirm, setDeleteConfirm] = useState(false);

  async function handleConfirm() {
    try {
      await api.delete(`/navers/${naverId}`);
      setDeleteConfirm(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <DeleteIcon size="24" onClick={() => setDeleteConfirm(naverId)} />
      {isDeleteConfirm && (
        <Modal>
          <Confirm>
            <Text fontSize="large" fontWeight="large" marginBottom="24px">
              Excluir Naver
            </Text>
            <Text fontWeight="small" marginBottom="32px">
              Tem certeza que deseja excluir este Naver?
            </Text>
            <Buttons>
              <Button onClick={() => setDeleteConfirm(false)}>Cancelar</Button>
              <Button marginSize="0 0 0 24px" primary onClick={handleConfirm}>
                Confirmar
              </Button>
            </Buttons>
          </Confirm>
        </Modal>
      )}
    </>
  );
};

const Confirm = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  flex-direction: column;
  width: 40%;
  background-color: #fff;
  padding: 32px;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;

const DeleteIcon = styled(Delete)`
  color: #212121;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    color: #313030;
  }
`;

export default DeleteIconComponent;
