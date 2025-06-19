
import { useSelector } from "react-redux";



export default function Modals() {
    const { isOpen, componentName } = useSelector(
        (state) => state.allCommonModal
    );

    const renderComponent = () => {
        switch (componentName) {
            case "AddedCartItems":
                return
            // <AddedCartItems />



            default:
                return null;
        }
    };
    return <>{isOpen && renderComponent()}</>;
}
