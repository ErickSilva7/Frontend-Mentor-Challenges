import '../../styles/keyboard.scss'
import Key from './key'

const Keyboard = () => {
    return (
        <div className='calculator__keyboard'>
            <Key type='number' />
            <Key type='number' />
            <Key type='number' />
            <Key type='del' />
            <Key type='number' />
            <Key type='number' />
            <Key type='number' />
            <Key type='operation' />
            <Key type='number' />
            <Key type='number' />
            <Key type='number' />
            <Key type='operation' />
            <Key type='number' />
            <Key type='number' />
            <Key type='operation' />
            <Key type='operation' />
            <Key type='reset' />
            <Key type='equal' /> 
        </div>
    )
}

export default Keyboard