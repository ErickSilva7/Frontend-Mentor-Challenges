import '../../styles/keyboard.scss'
import Key from './key'

const Keyboard = () => {
    return (
        <div className='calculator__keyboard'>
            <Key type='number' >7</Key>
            <Key type='number' >8</Key>
            <Key type='number' >9</Key>
            <Key type='del' >del</Key>
            <Key type='number' >4</Key>
            <Key type='number' >5</Key>
            <Key type='number' >6</Key>
            <Key type='operation' >+</Key>
            <Key type='number' >1</Key>
            <Key type='number' >2</Key>
            <Key type='number' >3</Key>
            <Key type='operation' >-</Key>
            <Key type='number' >.</Key>
            <Key type='number' >0</Key>
            <Key type='operation' >÷</Key>
            <Key type='operation' >x</Key>
            <Key type='reset' >reset</Key>
            <Key type='equal' >=</Key>
        </div>
    )
}

export default Keyboard