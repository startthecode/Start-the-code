import { useEffect } from "react";


export const UpdateTitle = (pageTitle) => {



    useEffect(()=>{
    
    window.document.title = `${pageTitle} - Start The Code`
    },[pageTitle])
    
    
    return (
        
    <div>
      
    </div>
  )
}


