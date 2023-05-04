import OrderForm from "../orderForm/orderForm";
import FullScreenModalWrapper from "../fullScreenModalWrapper/fullScreenModalWrapper";
import { IOrder } from "@/types/order.types";
interface IEditOrderModal {
  open: boolean;
  handleClose: () => void;
  order: IOrder;
}
const EditOrderModal = ({ open, handleClose, order }: IEditOrderModal) => {
  return (
    <FullScreenModalWrapper open={open} handleClose={handleClose}>
      <OrderForm order={order} closeModal={handleClose}/>
    </FullScreenModalWrapper>
  );
};

export default EditOrderModal;
