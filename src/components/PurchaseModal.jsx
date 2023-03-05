import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";

export default function PurchaseModal({ isOpen, onOpen, onClose, orderId }) {
  const { clearAll } = useContext(CartContext);

  const navigateTo = useNavigate();

  const handleClose = () => {
    onClose();
    clearAll();
    navigateTo("/");
  };

  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thank you for your order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              We have received your order #{orderId} and it is now being
              processed.
            </Text>
            <Text my={4}>
              You will receive an email shortly with the details of your
              purchase and a confirmation number.
            </Text>
            <Text>
              We appreciate your business and hope you enjoy your purchase!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
