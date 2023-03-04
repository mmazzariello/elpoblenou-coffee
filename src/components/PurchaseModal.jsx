import { useContext } from "react";
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
import history from "../modules/history";

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

  console.log("cartListEnModal", cartList);
  //   console.log("clearAll", clearAll());

  const handleClose = () => {
    onClose();
    clearAll();
    // history.push("/");
  };

  //   const { onOpen, onClose } = useDisclosure();
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
