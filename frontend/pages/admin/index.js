import {useState} from 'react'
export default function Admin(){ 
  const [running,setRunning]=useState(false)
  const [source,setSource]=useState('phone')
  return (<div style={{padding:16,fontFamily:'Arial'}}>
    <h1>Admin Dashboard</h1>
    <label>Audio Source: <select value={source} onChange={e=>setSource(e.target.value)}><option value="phone">Smartphone</option><option value="laptop">Laptop</option><option value="soundboard">Soundboard</option></select></label>
    <div style={{marginTop:12}}>
      <button onClick={()=>setRunning(true)} disabled={running}>Start Session</button>
      <button onClick={()=>setRunning(false)} disabled={!running}>Stop Session</button>
    </div>
    <p style={{marginTop:12}}>QR code and live preview will appear here when running. (Demo mode: simulated text)</p>
  </div>)
}
