import '../../styles/keyboard basic key.scss'

const Key = (props) => {
    if (props.type === 'number') {
        return (
            <button className='keyboard__basic__key'>1</button>
        )
    }
    if (props.type === 'del') {
        return (
            <button className='keyboard__basic__key'>2</button>
        )
    } 
    if (props.type === 'operation') {
        return (
            <button className='keyboard__basic__key'>3</button>
        )
    }
    if (props.type === 'reset') {
        return (
            <button className='keyboard__basic__key'>4</button>
        )
    }
    if (props.type === 'equal') {
        return (
            <button className='keyboard__basic__key'>5</button>
        )
    }
}

export default Key