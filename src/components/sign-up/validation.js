
export const renderField = ({input, label, className, type, meta: {touched, error, warning}})=>{
    return (<div>
            <input {...input} className={className} type={type} placeholder={label} />
            {touched && ((error && <span className="text-danger" >{error}</span>) || warning && <span>{warning}</span>)}
    </div>)
}

export const validate = values =>{
    console.log("values:", values)
    
    const errors= {}
    const {userName, email, password, confirmPassword} = values;
    if(!userName){
        errors.userName = "!Required"
    }else if(userName.length<5 || userName.length>10 ){
        errors.userName = "UserName must be 5-10 length"
    }else if(!/[^a-zA-Z0-9 ]/i.test(userName)){
        errors.userName = "UserName should be alphanumeric"
    }

    if(!email){
        errors.email = "!Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        errors.email = "Invalid email address"
    }

    if(!password){
        errors.password = "!Required"
    }else{
        errors = validatePassword(password, errors)
    }

    if(!confirmPassword){
        errors.confirmPassword = "!Required"
    }else {
        errors = validatePassword(password, errors)
    } 

    if((password && confirmPassword) && password.length!==confirmPassword.length){
        errors.password = "Password and confirm password are not matching"
    }
    return errors;
}

const validatePassword = (password, errors)=>{
    
    if (password.length < 8) {
        errors.password="Your password must be at least 8 characters";
    }else if (password.search(/[a-z]/i) < 0) {
        errors.password="Your password must contain at least one letter."; 
    }else if (password.search(/[0-9]/) < 0) {
        errors.password="Your password must contain at least one digit.";
    }
    return errors;
}