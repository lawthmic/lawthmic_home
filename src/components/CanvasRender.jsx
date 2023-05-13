import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  

  var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
  chinese = chinese.split("");
  
  var font_size =10;
  var columns = 600/font_size; 
  
  var drops = [];
  
  for(var x=0;x<columns;x++){
    drops[x]=1;
  }


  const draw = (ctx, frameCount) => {
    
    ctx.fillStyle = '#000000'
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
    
    ctx.fillStyle = '#0F0'
    ctx.font = font_size+'px arial'

    for(var i=0;i<drops.length;i++){
      var text = chinese[Math.floor(Math.random()*chinese.length)]
      ctx.fillText(text,i*font_size,drops[i]*font_size)

      if(drops[i]*font_size>ctx.canvas.height && Math.random() >0.975)
      drops[i]=0
    
    //increment y coordinate
    drops[i]++
    }
    
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId

    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }

    //setInterval(draw,100);
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas