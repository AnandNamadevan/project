import VDiv from '../container/vdiv'
import Button from '../container/button'
import './log.css'
import useLogin from '../hook/useLogin'

import crossSymbolImage from './icons8-google-48.png';
import iconbutton from './Icon Button.png';
import box from './Box.png';
import Icon from './Icon.png';
import boxone from './Box (1).png'
import eyeopen from './Icon Button (1).png'
import eyeclose from './Icon Button (2).png'
import { Modal } from 'react-bootstrap';
import SearchGroup from '../container/searchgroup'

function Login() {
    const { handleLight, handleDark, color, handleSearchChange, handleSearchCick, searchvalue, handleNameChange, handleNameCick, namevalue, handlePasswordChange, handlePasswordCick, passwordImage, handleFocus, handleBlur, isInputActive, passwordvalue, handleClipboardCick, handleBlurphone, handleFocusphone, isInputActivephone, isPopupVisible, setPopupVisible } = useLogin({ eyeopen, eyeclose })
    
    const textColor = color === "white" ? "black" : "white";

    const textColorforinput = color === "white" ? "white" : "#1D2023";

    const textColorforinputthirdpart = color === "white" ? "#BCC3D0" : "#7F8C9959";

    const textColorforinputthirdpartbutton = color === "white" ? "white" : "#1D2023";

    console.log(searchvalue, "searchvalue")
    return (
        <>

            <VDiv className={"container-fluid"}>

                <VDiv>
                    <h6 className='mt-3'>Hi Their</h6>
                    <h6> The Current Theme is :  {color === "white" ? "Light Mode" : "Dark Mode"}</h6>
                    <div onClick={() => handleLight()}> <h6  >Light Mode</h6>
                    </div>
                    <div onClick={() => handleDark()}>
                        <h6  >Dark Mode</h6>
                    </div>

                    <hr style={{
                        color: "white",
                        "background-color": "black",
                        height: "2px",
                        "border-radius": "8px",
                        opacity: 1,
                    }}></hr>
                </VDiv>
                <VDiv>
                    <div style={{ backgroundColor: color }}>
                        <h6 className='fs-3' style={{ color: textColor }}>Spinners</h6>
                        <div class="spinner-border text-success spinner-border m-2" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-danger spinner-border-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </VDiv>
                <VDiv style={{ backgroundColor: color }} >
                    
                    <VDiv className="d-flex flex-wrap justify-content-around align-items-center" id="changecolor">
                        <div className="mb-3 ">
                            <h6 style={{ color: textColor }}>Primary 32 size</h6>
                            <Button className="buttoncolorone" label="Button" />
                        </div>

                        <div className="mb-3 ">
                            <h6 style={{ color: textColor }}>Loading State</h6>
                            <button style={{ border: 'none', backgroundColor: textColorforinputthirdpartbutton }}>
                                <div className="buttoncolortwo">
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                        <div className="spinner-border spinner-border-sm" role="status">
                                            <span className="visually-hidden"></span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div className="mb-3 ">
                            <h6 style={{ color: textColor }}>Disabled State</h6>
                            <Button className="buttoncolorthree text-muted" style={{ backgroundColor: textColorforinputthirdpart }} label="Button" />
                        </div>

                        <div className="mb-3 ">
                            <h6 style={{ color: textColor }}>Primary 44 size</h6>
                            <Button className="buttoncolorfour" label="Button" />
                        </div>
                    </VDiv>
                  
                    <VDiv className="d-flex flex-wrap justify-content-around align-items-center" >

                        <div className="mb-3">
                            <h6 style={{ color: textColor }}>White 32 size</h6>
                            <Button style={{

                                border: "none",
                                backgroundColor: "white",
                                borderRadius: "4px",
                                width: "335px",
                                height: "32px",
                            }} label={"Button"} />
                        </div>
                        <div className="mb-3 ">
                            <h6 style={{ color: textColor }}>Loading State</h6>
                            <button style={{ border: "none", backgroundColor: textColorforinputthirdpartbutton }}>
                                <div style={{
                                    backgroundColor: "white",
                                    border: "none",
                                    color: "black",

                                    borderRadius: "4px",
                                    width: "335px",
                                    height: "32px"
                                }}>
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                        <div class="spinner-border spinner-border-sm " role="status">
                                            <span class="visually-hidden"></span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div>
                            <h6 style={{ color: textColor }}>Disabled State</h6>
                            <Button className={"buttoncolorthree text-muted"} style={{ backgroundColor: textColorforinputthirdpart }} label={"Button"} />
                        </div>
                        <div>
                            <h6 style={{ color: textColor }}>White 44 size</h6>
                            <Button className={"font-weight-bold"} style={{
                                border: "none",
                                backgroundColor: "white",
                                borderRadius: "4px",
                                width: "335px",
                                height: "44px",
                                fontWeight: "bold"
                            }} label={"Button"} />
                        </div>

                    </VDiv>

                    <VDiv className="d-flex flex-wrap justify-content-around align-items-center" id="changecolor">

                        <div>
                            <h6 style={{ color: textColor }}>Secondary 32 size</h6>
                            <Button className={"buttoncolorone"} style={{ fontWeight: "bold", color: textColor, backgroundColor: textColorforinputthirdpart }} label={"Button"} />
                        </div>
                        <div >
                            <h6 style={{ color: textColor }}>Loading State</h6>
                            <button style={{ border: "none", backgroundColor: textColorforinputthirdpartbutton }}>
                                <div style={{
                                    backgroundColor: textColorforinputthirdpart,
                                    border: "none",
                                    color: textColor,

                                    borderRadius: "4px",
                                    width: "335px",
                                    height: "32px"
                                }}>
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                        <div class="spinner-border spinner-border-sm " role="status">
                                            <span class="visually-hidden"></span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div>
                            <h6 style={{ color: textColor }}>Disabled State</h6>
                            <Button className={"buttoncolorthree text-muted"} style={{ backgroundColor: textColorforinputthirdpart }} label={"Button"} />
                        </div>
                        <div>
                            <h6 style={{ color: textColor }}>Secondary 44 size</h6>
                            <Button style={{
                                backgroundColor: textColorforinputthirdpart,
                                border: "none",
                                color: textColor,

                                borderRadius: "4px",
                                width: "335px",
                                height: "44px"
                            }} label={"Button"} />
                        </div>

                    </VDiv>
                    <VDiv className="d-flex flex-wrap justify-content-around align-items-center" id="changecolor">

                        <div>
                            <h6 style={{ color: textColor }}>Ghost 32 size</h6>
                            <Button style={{

                                border: "none",
                                backgroundColor: textColorforinput,
                                color: textColorforinput === "white" ? "#1D2023" : "white",
                                width: "335px",
                                borderRadius: "4px",
                                height: "32px",
                            }} label={"Button"} />
                        </div>
                        <div >
                            <h6 style={{ color: textColor }}>Loading State</h6>
                            <button style={{ border: "none", backgroundColor: textColorforinputthirdpartbutton }}>
                                <div style={{
                                    backgroundColor: textColorforinput,
                                    border: "none",
                                    color: "black",

                                    borderRadius: "4px",
                                    width: "335px",
                                    height: "32px"
                                }}>
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                        <div class="spinner-border spinner-border-sm" style={{ color: textColorforinput === "white" ? "#1D2023" : "white" }} role="status">
                                            <span class="visually-hidden"></span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div>
                            <h6 style={{ color: textColor }}>Disabled State</h6>
                            <Button className={"buttoncolorthree text-muted"} style={{ backgroundColor: textColorforinputthirdpart }} label={"Button"} />
                        </div>
                        <div>
                            <h6 style={{ color: textColor }}>Ghost 44 size</h6>
                            <Button className={"font-weight-bold"} style={{
                                border: "none",
                                color: textColorforinput,
                                borderRadius: "4px",
                                width: "335px",
                                height: "44px",
                                fontWeight: "bold"
                            }} label={"Button"} />
                        </div>

                    </VDiv>
                    <VDiv className="d-flex flex-wrap justify-content-around align-items-center" id="changecolor">
                        <div>
                            <h6 style={{ color: textColor }}>Negative 32 size</h6>
                            <Button className={"buttoncolorone"} style={{ backgroundColor: textColorforinputthirdpart, fontWeight: "bold", color: "red " }} label={"Button"} />
                        </div>
                        <div >
                            <h6 style={{ color: textColor }}>Loading State</h6>
                            <button style={{ border: "none", backgroundColor: textColorforinputthirdpartbutton }}>
                                <div style={{
                                    backgroundColor: textColorforinputthirdpart,
                                    border: "none",
                                    color: "black",

                                    borderRadius: "4px",
                                    width: "335px",
                                    height: "32px"
                                }}>
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                        <div class="spinner-border spinner-border-sm  text-danger" role="status">
                                            <span class="visually-hidden"></span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div>
                            <h6 style={{ color: textColor }}>Disabled State</h6>
                            <Button className={"buttoncolorthree text-muted"} style={{ backgroundColor: textColorforinputthirdpart }} label={"Button"} />
                        </div>
                        <div>
                            <h6 style={{ color: textColor }}>Negative 44 size</h6>
                            <Button style={{
                                backgroundColor: textColorforinputthirdpart,
                                border: "none",
                                color: "red",

                                borderRadius: "4px",
                                width: "335px",
                                height: "44px"
                            }} label={"Button"} />
                        </div>

                    </VDiv>
                    <VDiv className="d-flex flex-wrap justify-content-around align-items-center" id="changecolor">
                        <div>
                            <h6 style={{ color: textColor }}>Icon Button 32 size</h6>
                            <img className='d-flex justify-content-center align-items-center' style={{ position: "absolute", zIndex: "1", margin: "8px 6px 0px 65px" }} width="18" src={crossSymbolImage} alt="" />

                            <Button className={"buttoncolorone"} style={{ backgroundColor: textColorforinputthirdpart, fontWeight: "bold", color: textColor, position: "relative" }} label={"Sign Up With Google"} />
                        </div>
                        <div >
                            <h6 style={{ color: textColor }}>Loading State</h6>
                            <button style={{ border: "none", backgroundColor: textColorforinputthirdpartbutton }}>
                                <div style={{ backgroundColor: textColorforinputthirdpart, border: "none", color: textColor, borderRadius: "4px", width: "335px", height: "32px" }}>
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                        <div class="spinner-border spinner-border-sm " role="status">
                                            <span class="visually-hidden"></span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div>
                            <h6 style={{ color: textColor }}>Disabled State</h6>
                            <img className='d-flex justify-content-center align-items-center' style={{ position: "absolute", zIndex: "1", margin: "8px 6px 0px 65px" }} width="18" src={crossSymbolImage} alt="" />

                            <Button className={"buttoncolorone"} style={{ backgroundColor: textColorforinputthirdpart, color: textColor, position: "relative" }} label={"Sign Up With Google"} />
                            {/* <Button className={"buttoncolorthree text-muted"} style={{backgroundColor:textColorforinputthirdpart}} label={"Button"} /> */}
                        </div>
                        <div>
                            <h6 style={{ color: textColor }}>Icon Button 44 size</h6>
                            <img className='d-flex justify-content-center align-items-center' style={{ position: "absolute", zIndex: "1", margin: "14px 10px 12px 69px" }} width="18" src={crossSymbolImage} alt="" />

                            <Button style={{
                                backgroundColor: textColorforinputthirdpart,
                                border: "none",
                                color: textColor,

                                borderRadius: "4px",
                                width: "335px",
                                height: "44px",
                                fontWeight: "bold",
                                position: "relative"
                            }} label={"Sign Up With Google"} />
                        </div>

                    </VDiv>


                    <h3 style={{ border: "none", color: textColor }}>Input Box</h3>
                    <VDiv className={"mt-3 px-3"}>
                        <label className='ml-1' style={{ border: "none", color: textColor }}>Phone</label>
                        <SearchGroup className={
                            isInputActivephone === true ?
                                "form-group position-relative  mt-1" :
                                "form-group position-relative settingsearchinput mt-1"} width="20" value={searchvalue} onFocus={handleFocusphone} onBlur={handleBlurphone} placeHolder={"Placeholder"} src={searchvalue === undefined ? "" : searchvalue === "" ? "" : iconbutton} onChange={(event) => handleSearchChange(event)} onClick={(event) => handleSearchCick(event)} />
                        <h6 style={{ border: "none", color: textColor }}>We will nerver share your detials with any one</h6>


                        <label className='ml-1  mt-3 text-danger' >Phone</label>
                        <SearchGroup className={"form-group position-relative  mt-1"} style={{ borderColor: "red" }} width="20" value={searchvalue} placeHolder={"Placeholder"} src={searchvalue === undefined ? boxone : searchvalue === "" ? boxone : iconbutton} onChange={(event) => handleSearchChange(event)} onClick={(event) => handleSearchCick(event)} />
                        <h6 className='text-danger'>Please enter a valid phone number!</h6>

                        <label className='ml-1' style={{ border: "none", color: textColor }}>Name</label>
                        <SearchGroup className={"form-group position-relative  mt-1"} width="20" value={namevalue} placeHolder={"Placeholder"} src={isInputActive === false ?? namevalue === undefined ? box : namevalue === "" ? box : iconbutton} onChange={(event) => handleNameChange(event)} onClick={(event) => handleNameCick(event)} onFocus={handleFocus} onBlur={handleBlur} />

                        <label className='ml-1 mt-3 ' style={{ border: "none", color: textColor }}>Password</label>
                        <SearchGroup className={"form-group position-relative  mt-1"} width="25" id="eye" type={"password"} value={passwordvalue} placeHolder={"Placeholder"} src={passwordImage} onChange={(event) => handlePasswordChange(event)} onClick={(event) => handlePasswordCick(event, eyeclose)} />
                        <h6 style={{ border: "none", color: textColor }}>Password should be 8 characters long</h6>

                        <label className='ml-1 mt-3' style={{ border: "none", color: textColor }}>Username</label>
                        <SearchGroup className={"form-group position-relative  mt-1"} enabled={true} width="20" value={""} placeHolder={"Placeholder"} src={boxone} onChange={(event) => handleSearchChange(event)} onClick={(event) => handleSearchCick(event)} />
                        <h6 style={{ border: "none", color: textColor }}>You con't do anything with this input field</h6>

                        {isPopupVisible && (
                            <div className='b-0'>
                                <Modal show={isPopupVisible} onHide={() => setPopupVisible(false)} backdrop="static">
                                    <div className='popupdatas'>
                                        <p className=' paragraph'>Text Copied to ClipBoard</p>
                                    </div>
                                </Modal>
                            </div>
                        )}
                        <label className='ml-1 mt-3' style={{ border: "none", color: textColor }}>Username </label>
                        <SearchGroup className={"form-group position-relative  mt-1"} width="20" value={"Anand"} placeHolder={"Placeholder"} src={Icon} onClick={(event) => handleClipboardCick(event)} />
                        <h6 style={{ border: "none", color: textColor }}>You con't change the username but you can copy it</h6>
                    </VDiv>
                </VDiv>
            </VDiv>
        </>
    )
}

export default Login