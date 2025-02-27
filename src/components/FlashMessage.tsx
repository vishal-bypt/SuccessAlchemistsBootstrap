import { Alert } from "@material-tailwind/react";


interface FlashMessageProps {
    message: string;
    type: string;
}

const FlashMessage: React.FC<FlashMessageProps> = ({ message, type }) => {
    return (
        <Alert
            open={true}
            color={type == "success" ? "green" : "red"}
            onClose={() => { }}
            animate={{
                mount: { y: 0 },
                unmount: { y: 100 },
            }}
        >
            {message}
        </Alert>
    );
}


export default FlashMessage;