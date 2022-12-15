import React from 'react';
import Content from './Database.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navigator.css';

const Navigator = () => {
    console.log("Content", Content);
    const [formData, setFormData] = React.useState(null);
    const [icon, setIcon] = React.useState(null);
    const renderFormData = (data) => {
        setFormData(data.tab);
    }
    const [value, setValue] = React.useState('')
    React.useEffect(()=>{
        setFormData(Content.tabs[0].tab);
        const initialTab = Content.tabs[0].tab;
        //const iconType = getInitialRenderTab('Unavailable')
        //setIcon(iconType);
    },[]);

    const getInitialRenderTab = (data) => {
        console.log("data", data);
        const status = data.tab.id === 1 ? 'Available' : 'Unavailable';
        switch(status) {
            case 'Available': {
                return "fa-solid fa-circle-dot Available"
            }
            case 'Completed': {
                return "fa-solid fa-circle-check"
            }
            case 'Invalid': {
                return "fa-solid fa-circle-exclamation"
            }
            case 'Unavailable': {
                return "fa-solid fa-circle Unavailable"
            }
            default: {
                return;
            }
        }
    }
    const formValidation = (e,data) => {
        if(e.target.value !== '') {
            setValue((currentFormData) => {
                const nextFormData = {
                  ...currentFormData,
                  [e.target.name]: e.target.value ,
            }})
        }
        else {

        }
    }
    const handleSubmit = () =>{
        return;
    }
    return(
        <div id="app" style={{textAlign: "center"}}>
             <h1>The Navigator</h1>
             <div className='Main' style={{display: "flex", margin:"10%"}}>
                <div className='Tabs'>
                    {Content.tabs.map((item,key)=>(
                        <div key={key} className='tabList'>
                            <FontAwesomeIcon icon={getInitialRenderTab(item)} className={`${getInitialRenderTab(item)} dynamicIcon}` }
                                onClick={()=>renderFormData(item)}/> 
                            <hr className='line '></hr>
                            <div className='arrow_box'></div>
                        </div>
                    ))}
                </div>
                <div className='mainContent'>
                    <h2>{formData?.name}</h2>
                    <form className='formContent' onSubmit={()=>handleSubmit()}>
                        <p className='description'>{formData?.description}</p>
                        <input
                            className="textfield"
                            type="text"
                            name={formData?.name}
                            value={value}
                            onChange={(e)=>formValidation(e,formData)}
                        />
                    </form>
                </div>
             </div>
        </div>
       
    )
}

export default Navigator;