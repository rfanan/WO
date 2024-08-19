import Modal from "antd/es/modal";

export function defaultErrorModal(message: any = null) {
    let defaultMessage = (
        <div>Something error happened with the system, please try again or contact support!</div>
    )
    if (message) {
        defaultMessage = message;
    }
    return (
        Modal.error({
            title: 'Error!',
            content: (
                <>
                    {defaultMessage}
                </>
            ),
        })
    )
}