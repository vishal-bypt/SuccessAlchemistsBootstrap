import { Bounce, ToastContainer } from 'react-toastify';


const Toast = () => {
    return (
        <ToastContainer
            position="top-right"
            //autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            //toastStyle={{ backgroundColor: "red", color: "#fff" }}
            style={{ zIndex: 99999 }} 
            transition={Bounce}
        />
    );
}


export default Toast;