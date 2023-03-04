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
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";

export default function PurchaseModal({ isOpen, onOpen, onClose }) {
  const {
    removeItem,
    cartList,
    clear,
    getOrderProductsInfo,
    itemsInfo,
    finalPrice,
    clearAll,
  } = useContext(CartContext);

  const navigateTo = useNavigate();

  console.log("cartListEnModal", cartList);

  const handleClose = () => {
    onClose();
    clearAll();
    navigateTo("/");
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gracias por tu compra!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Hola</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
