
type statusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: statusProps) => {
    let message;
    if (props.status === 'loading') {
        message = 'Loading'
    } else if (props.status === 'success') {
        message = 'Data Fetched Successfully'
    } else {
        message = 'error'
    }

    return (
        <div style={{ color: 'green' }}>Status - {message}</div>
    )
}

export default Status