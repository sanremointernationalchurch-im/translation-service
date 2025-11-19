import {useEffect,useRef,useState} from 'react'
export default function Room(){ 
  const [lang,setLang]=useState('en')
  const [lines,setLines]=useState([])
  const containerRef=useRef(null)
  useEffect(()=>{
    const t=setInterval(()=>{
      const ts=new Date().toISOString()
      setLines(l=>[...l, {id:ts, text:`[${lang}] Demo translated line at ${ts}`}].slice(-500))
    },1500)
    return ()=>clearInterval(t)
  },[lang])
  useEffect(()=>{ const el=containerRef.current; if(el) el.scrollTop=el.scrollHeight },[lines])
  return (<div style={{padding:16,fontFamily:'Arial'}}><h2>Live Room (Demo)</h2><label>Language: <select value={lang} onChange={e=>setLang(e.target.value)}><option value="en">English</option><option value="it">Italian</option><option value="es">Spanish</option><option value="other">Other languages...</option></select></label><div ref={containerRef} style={{marginTop:12,border:'1px solid #ddd',padding:10,height:420,overflow:'auto'}}>{lines.map(l=> <div key={l.id} style={{padding:'8px 0'}}>{l.text}</div>)}</div></div>)
}
