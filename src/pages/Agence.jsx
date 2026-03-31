import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const agence = () => {
    const imageDivRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function(){
        gsap.to(imageDivRef.current,{
        scrollTrigger:{
            trigger: imageDivRef.current,
            markers:true,
            start: 'top 29.5%',
            end: 'top -100%',
            scrub:true,
            pin:true



        }

        })
       
        

    })

  return (
    <div>
        <div className='section1'>
        <div ref={imageDivRef} className='absolute  overflow-hidden h-[20vw] rounded-4xl w-[15vw]  top-60 left-[30vw]  bg-red-500'>
            <img   className=' h-full object-cover w-full ' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" /> 
        </div>
     <div className=' relative font-[font2] '>
       <div className='mt-[55vh]'>
         <h1 className='text-[20vw]   uppercase text-center leading-[17vw]' >Soixan7e <br />
             Douze
         </h1> 
       </div>
       <div className='pl-[40%] mt-15'>
        <p className='text-6xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>

       </div>
     </div>
    </div>
    <div className="setion2 h-screen">
        
    </div>
    </div>
  )
}

export default agence


