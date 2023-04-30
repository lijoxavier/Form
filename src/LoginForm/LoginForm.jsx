import { useEffect, useState } from "react"

const LoginForm =()=>{
    const [user,setUser]=useState({
        name:"",
        email:"",
        gender:"",
        skills:[],
        country:"",
        dob:""
    })
    const [errors,setErrors]=useState({
        name:{
            hasError:false,
            msg:''
        },
        email:{
            hasError:false,
            msg:''
        },
        gender:{
            hasError: false,
            msg: ''
        },
         skills: {
            hasError: false,
            msg: ''
        },
        country: {
            hasError: false,
            msg: ''
        },
        dob:{
            hasError:false,
            msg:''
,        }
    })

    const handleSubmit=(event)=>{
        event.preventDefault()
        // setUser((prev) => ({
        //     ...prev,
        //     name: event.target.value

        // }))
        console.log(user);
    // user.name===""?setErrors((prev)=>(
    //     {
    //         ...prev,
    //         [event.target.name]:true
    //     }
    // )
    // ):console.log(user?.name);
    // user.name === "" ? setErrors((prev)=>({ 
    //     ...prev,
    //     name:true
    // })):setErrors((prev)=>({
    //     ...prev,
    //     name:false,
    // })
    // )

        // user.email === "" ? setErrors(errors.email = true) : ""
    // console.log(errors);
    // user?.name?.length>5?console.log("name length between 5"):"";

    // if(user.name===""){ it is same as (!user.name)
    //     if(!user.name){
    //     setErrors((prev)=>({
    //         ...prev,
    //         name:{
    //             hasError:true,
    //             msg:'aaaaaa'
    //         }
    //     }))
    // }
    const submitError={...errors}
    if(!user.name){
        submitError.name.hasError=true
        submitError.name.msg="cant empty name"
    }
     if(!user.email){
        submitError.email.hasError = true
        submitError.email.msg = "cant empty email"
    }
    if (!user.country) {
            submitError.country.hasError = true
            submitError.country.msg = "cant empty country"
    }
    if (!user.gender) {
            submitError.gender.hasError = true
            submitError.gender.msg = "cant empty gender"
    }
    if (user.skills.length===0) {
            submitError.skills.hasError = true
            submitError.skills.msg = "cant empty skills"
    }
    if(!user.dob){
        submitError.dob.hasError = true
        submitError.dob.msg = "cant empty dob"

    }
    setErrors(submitError)
    
 if(Object.values(errors).some((error)=>error===true)){
    return false
 }
 return true
    
    
}
    const handleChange=(event)=>{
        setUser((prev)=> ({
            ...prev,
            [event.target.name]:event.target.value
            
        }))
        isFormValid(event.target.name,event.target.value)
    }
    const isFormValid=(fieldName,fieldValue)=>{
        const newErrors={...errors}
        let hasError=false
        let msg=""
        console.log(fieldName);
        if(fieldName==="name"){

            if(!fieldValue){
                // newErrors[fieldName].hasError = true
                // newErrors[fieldName].msg = "name is empty"

                hasError=true
                msg="name is empty"

            }
            else if(fieldValue.length<5){
                hasError = true
                msg = "to short"


            }
            else {
                // newErrors[fieldName].hasError = false
                // newErrors[fieldName].msg = ""

                hasError = false
                msg = ""

            }

        }

        else if(fieldName==="country"){

            if(!fieldValue){
                hasError=true
                msg="select country not [select]"
            }
            else {
                hasError = false
                msg = ""
            }
        }
        else if(fieldName==="email"){

            // if(!fieldValue.includes("@")){
            //     newErrors[fieldName].hasError = true
            //     newErrors[fieldName].msg = "include @"

            // }
            // else if (!fieldValue.includes(".")){
            //     newErrors[fieldName].hasError = true
            //     newErrors[fieldName].msg = "include ."
            // }
            
            if ( (fieldValue === "" ||
            // !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
            //     fieldValue
            //     ))
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ )
                 ){
                    // newErrors[fieldName].hasError = true
                    // newErrors[fieldName].msg = "invalid email"
                    
                    hasError=true
                    msg="invalid emaill"
                    
                }

            // validate by splitting words from @ and show error messages

            // const [localPart, domainName] = fieldValue.split("@");
            // if (!fieldValue) {
            //     hasError = true;
            //     msg = "Email is required";
            // } else if (!localPart) {
            //     hasError = true;
            //     msg = "Local part is required";
            // } else if (!domainName) {
            //     hasError = true;
            //     msg = "Domain name is required";
            // } else if (!/^[a-zA-Z0-9._%+-]+$/.test(localPart)) {
            //     hasError = true;
            //     msg = "Local part contains invalid characters";
            // } else if (!/^[a-zA-Z0-9.-]+$/.test(domainName)) {
            //     hasError = true;
            //     msg = "Domain name contains invalid characters";
            // } else if (!/\.[a-zA-Z]{2,}$/.test(domainName)) {
            //     hasError = true;
            //     msg = "Domain name must end with a valid TLD";
            // }

            else {
                hasError = false
                msg = ""
            }

        }

       

        else{
            hasError = false
            msg = ""
        }
            // fieldValue.length > 5 ? errors[fieldName] = true : errors[fieldName] = false
        newErrors[fieldName].hasError = hasError;
        newErrors[fieldName].msg = msg;
        setErrors(newErrors);
        
        console.log(errors);

    }
    // console.log(user);

    const handleBlur=(event)=>{
        const {name,value}=event.target
       
        const newErrors={...errors}
        if(name==="name" && value===""){
        
            newErrors.name.hasError=true
            newErrors.name.msg="name empty 👍"
        }
        else if(name==="email" && !value){
            newErrors.email.hasError = true
            newErrors.email.msg = "email is empty 😊"
        }
        // else if (name === "gender" && !["male","female"].includes(value)) {
        //     newErrors.gender.hasError = true
        //     newErrors.gender.msg = "gender is empty 😊"
        // }


        // else if (name === "skills" && value==="javascript") {
        //     newErrors[name].hasError = true
        //     newErrors[name].msg = "skills is empty 😊"
        // }

        
        else{
            newErrors[name].hasError = false
            newErrors[name].msg = ""
        }
        console.log(value);
        setErrors(newErrors)
        console.log(errors);
        
        
    }

    const handleChecked=(event)=>{
        let newSkills=[...user.skills]
        const newErrors={...errors}
        const{checked,value,name}=event.target
        if(checked){
            newSkills.push(value)
        }else{
            newSkills=newSkills.filter((newSkill) => newSkill !== value)
            
        }
        // console.log(newSkills);
        setUser((prev)=>({
            ...prev,

            [name]:newSkills
        }))
        
        newErrors.skills.hasError=newSkills.length === 0
        newErrors.skills.msg ="skills is empty 😊"
        setErrors(newErrors)

    }
    // console.log(user);
    return (
        <div>
            <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="name">Name </label>
                <input type="text"
                 id="name" 
                name="name"
                 onChange={handleChange}
                //  value={user.name}
                 autoComplete="off"
                 onBlur={handleBlur}
                 />
                 <br />
                    {errors.name.hasError && <span style={{color:"red"}}>{errors.name.msg}</span>}

                    {/* {errors.name && <span>name between 5</span>} */}
                {/* {user?.name.length>5 && <span>number between 5</span> } */}
            </div>
            <div>
                <label htmlFor="email">Email </label>
                    <input type="text" id="email" name="email" onChange={handleChange}  onBlur={handleBlur}/>
                    <br />
                    {errors.email.hasError && <span style={{ color: "red" }}>{errors.email.msg}</span>}
            </div>

            <div>
                <label htmlFor="gender">Gender: </label>
                <br />
                <input type="radio" name="gender" id="male"  value="male" onBlur={handleBlur} onChange={handleChange} />
                <label htmlFor="male">male</label>
                    <input type="radio" name="gender" id="female"  value="female" onBlur={handleBlur} onChange={handleChange}/>
                <label htmlFor="female">Female</label>
                <br />
                    {errors.gender.hasError && <span style={{ color: "red" }}>{errors.gender.msg}</span>}
            </div>

            <div>
                <label htmlFor="skills">skills</label>
                <br />
                <input type="checkbox" name="skills" id="javascript" value="javascript"  onBlur={handleBlur} onChange={handleChecked}/>
                <label htmlFor="javascript">javascript</label>
                    <input type="checkbox" name="skills" id="html" value="html" onBlur={handleBlur} onChange={handleChecked} />
                <label htmlFor="html">Html</label>
                    <input type="checkbox" name="skills" id="css" value="css" onBlur={handleBlur} onChange={handleChecked} />
                <label htmlFor="css">Css</label>
                    <input type="checkbox" name="skills" id="php" value="php" onBlur={handleBlur} onChange={handleChecked} />
                <label htmlFor="php">Php</label>
                <br />
                    {errors.skills.hasError && <span style={{ color: "red" }}>{errors.skills.msg}</span>}
            </div>


            <div>
                <label htmlFor="dob">Date of birth</label>
                <input type="date" name="dob" id="dob"  onChange={handleChange}/>
                <br />
                    {errors.dob.hasError && <span style={{ color: "red" }}>{errors.dob.msg}</span>}
            </div>

            <div>
                    <label htmlFor="">Country</label>
                    <br />
                    <select name="country" id="" onChange={handleChange}>
                    <option value="">select</option>
                        <option value="India">India</option>
                        <option value="UAE">UAE</option>
                        <option value="UK">UK</option>
                </select>
                    <br />
                    {errors.country.hasError && <span style={{ color: "red" }}>{errors.country.msg}</span>}
            </div>

            <div>
                <input type="submit" value="submit" />
            </div>

            </form>
        </div>
    )
}

export default LoginForm