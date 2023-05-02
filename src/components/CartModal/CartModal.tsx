import FullScreenModalWrapper from "../fullScreenModalWrapper/fullScreenModalWrapper";
import Cart from "./cart";

interface ICartModal {
  handleClose: () => void;
  open: boolean;
}

const CartModal = ({ handleClose, open }: ICartModal) => {
  return (
    <FullScreenModalWrapper handleClose={handleClose} open={open}>
      <Cart handleClose={handleClose} />
    </FullScreenModalWrapper>
  );
};

export default CartModal;
