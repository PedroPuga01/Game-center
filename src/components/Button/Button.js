import './button.module.css'

const Button = ({value, variant}) =>{
    return <button className={[value]}>{value}</button>;
}

export default Button