import { useEffect, useState } from "react";

const initialPassword = "";

const initialPasswordConfig = {
  passwordLengthMin: 1,
  passwordLengthMax: 30,
  passwordLength: 8,
  lowercase: true,
  uppercase: true,
  special: true,
  grouping: false,
  setting: "simple"
}

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState(initialPassword)
  const [passwordConfig, setPasswordConfig] = useState(initialPasswordConfig)

  
  
  const generate = () => {
    const characterTypes = [];
    
    const character = {
      lowercase: Array.from('abcdefghijklmnopqrstuvwxyz'),
      uppercase: Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
      digits: Array.from('1234567890'),
      special: Array.from('!@#$%^&*-_=+?.'),
      grouping: Array.from('(){}[]')
    }

    if(passwordConfig.lowercase){
      characterTypes.push("lowercase")
    }
    if(passwordConfig.uppercase){
      characterTypes.push("uppercase")
    }
    if(passwordConfig.special){
      characterTypes.push("special")
    }
    if(passwordConfig.grouping){
      characterTypes.push("grouping")
    }

    let password = ''

    for (let i = 0; i < passwordConfig.passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characterTypes.length);
      const randomCharacterType = characterTypes[randomIndex];
      
      const characterTypeArray = character[randomCharacterType]
      randomIndex = Math.floor(Math.random() * characterTypeArray.length);

      password += characterTypeArray[randomIndex];
    }

    setPassword(password);

    return password;
  }

  const handleChange = (e) => {

    const {name, value, id} = e.target;
    switch(name) {
      case "setting":
        setPasswordConfig({
          ...passwordConfig,
          setting: id
        })
        break;

      case "passwordLengthRange":
        setPasswordConfig({
          ...passwordConfig,
          passwordLength: Number(value)
        })
        break;

      default:
        throw Error(`unknown name: ${name}`)
    }
  }

  const passwordLengthIncrease = (amount) => {
    setPasswordConfig({
      ...passwordConfig,
      passwordLength: passwordConfig.passwordLength + amount
    })
  }
  
  const passwordLengthDecrease = (amount) => {
    setPasswordConfig({
      ...passwordConfig,
      passwordLength: passwordConfig.passwordLength - amount
    })
  }

  useEffect(() => {
    generate()
  }, [])
  
  useEffect(() => {
    generate()
  },
  [
    passwordConfig.passwordLength,
    passwordConfig.lowercase,
    passwordConfig.uppercase,
    passwordConfig.special,
    passwordConfig.grouping
  ])

  return {
    password,
    passwordConfig,
    generate,
    handleChange,
    passwordLengthIncrease,
    passwordLengthDecrease,
  }
}