import './form-input.scss';

const FormInput = ({label, value,handleChange, ...otherProps}) => (
    <div className="group">
        <input {...otherProps} onChange={handleChange} value={value} className="form-input"/>
        {
            label? <label className={`form-input-label ${value.length ? 'shrink' : ''}`} >{label}</label>: null
        } 
    </div>

);


export default FormInput;