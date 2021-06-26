import './custom-button.scss';

const CustomButton = ({children,isSignInWithGoogle,...otherProps}) => (
    <button className={`custom-button ${isSignInWithGoogle ? 'sign-in-google': ''}`} {...otherProps}>{children}</button>
);

export default CustomButton;