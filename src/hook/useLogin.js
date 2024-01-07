import { useState } from "react";
 


export default function useLogin({ eyeopen, eyeclose }) {
  const [color, setColor] = useState("white")

  const [searchvalue, setSearchvalue] = useState()
  const [namevalue, setNamevalue] = useState()
  const [passwordvalue, setPasswordvalue] = useState()
  const [passwordImage, setPasswordimage] = useState(eyeopen)
  const [isInputActive, setIsInputActive] = useState(false);
  const [isInputActivephone, setIsInputActivephone] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const handleLight = () => {

    setColor("white")


  }

  const handleDark = () => {

    setColor("#1D2023")
  }
  const handleSearchChange = (event) => {
    setSearchvalue(event.target.value)
  }
  const handleSearchCick = (event) => {
    setSearchvalue("")
  }
  const handleNameChange = (event) => {
    setNamevalue(event.target.value)
  }
  const handleNameCick = (event) => {
    setNamevalue("")
  }
  const handlePasswordChange = (event) => {
    setPasswordvalue(event.target.value)
  }
  const handlePasswordCick = (eyeclosed) => {
    console.log(eyeclosed, "eyeclosed")
    const eye = document.getElementById("eye");
    if (eye.type === "password") {
      eye.type = "text";

    } else {
      eye.type = "password";

    }
    if (passwordImage === eyeclose) {

      setPasswordimage(eyeopen)
    } else {
      setPasswordimage(eyeclose)
    }
  }
 
  const handleFocus = () => {
    setIsInputActive(true);
  };

  const handleBlur = () => {
    setIsInputActive(false);
  };
  const handleFocusphone = () => {
    setIsInputActivephone(true);
  };

  const handleBlurphone = () => {
    setIsInputActivephone(false);
  };
  const handleClipboardCick =()=>{
    
    setPopupVisible(true);

    // Set a timeout to hide the popup after 3 seconds (adjust as needed)
    setTimeout(() => {
      setPopupVisible(false);
    }, 1000);
  }
  return {
    handleLight, handleDark, color, handleSearchChange, handleSearchCick, searchvalue, handleNameChange, handleNameCick, namevalue, handlePasswordChange, handlePasswordCick, passwordImage,handleFocus,handleBlur,isInputActive,passwordvalue,handleBlurphone,handleFocusphone,isInputActivephone,handleClipboardCick,isPopupVisible,setPopupVisible
  }


}
