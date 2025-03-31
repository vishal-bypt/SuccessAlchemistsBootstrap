import { toast, ToastPosition } from "react-toastify";

const options = {
    position: "top-right" as ToastPosition,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "light",
};

const success = (message:any) => toast.success(message, options);

const error = (err:any) => toast.error(err, options);

export default { success, error };