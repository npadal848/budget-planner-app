
export const renderField = ({input, label, className, type, meta: {touched, error, warning}})=>{
    return (<div>
            <input {...input} className={className} type={type} placeholder={label} />
            {touched && ((error && <span className="text-danger" >{error}</span>) || warning && <span>{warning}</span>)}
    </div>)
}

export const validateSignInForm = values =>{
    console.log("values:", values)
    
    const error = {}
    const {userName, password, confirmPassword} = values;
    if(!userName){
        error.userName = "!Required"
    }else if(userName.length>=5 || userName.length<=8 ){
        error.userName = "UserName must be 5-8 length"
    }else if(!/\w$/i.test(userName)){
        error.userName = "UserName should be alphanumeric"
    }

    if(!password){
        error.password = "!Required"
    }else if(password.length>=8 || password.length<=20 ){
        error.password = "Password must be 8-20 length"
    }
    if(!confirmPassword){
        error.confirmPassword = "!Required"
    }else if(confirmPassword.length>=8 || confirmPassword.length<=20 ){
        error.password = "Password must be 8-20 length"
    }else if(password.length!==confirmPassword.length){
        error.password = "Password and confirm password not matching"
    }
    return error;
}