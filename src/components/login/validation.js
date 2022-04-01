
export const renderField = ({input, label, className, type, meta: {touched, error, warning}})=>{
    return (<div>
            <input {...input} className={className} type={type} placeholder={label} />
            {touched && ((error && <span className="text-danger" >{error}</span>) || warning && <span>{warning}</span>)}
    </div>)
}

export const validate = values =>{
    
    const error = {}
    const {userName, password} = values;
    if(!userName){
        error.userName = "!Required"
    }else if(userName.length<5 || userName.length>8 ){
        error.userName = "UserName must be 5-8 length"
    }else if(!/[^a-zA-Z0-9 ]/i.test(userName)){
        error.userName = "UserName should be alphanumeric with special character"
    }

    if(!password){
        error.password = "!Required"
    }else if(password.length>=8 || password.length<=20 ){
        error.password = "Password must be 8-20 length"
    }

    return error;
}