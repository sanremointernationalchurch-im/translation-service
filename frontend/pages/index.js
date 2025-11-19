import Link from 'next/link'
import '../styles/global.css'
export default function Home(){ return (<div className="container"><h1>Translation Service 02</h1><p><Link href="/admin">Admin Dashboard</Link></p><p><Link href="/room/main">Open Room (demo)</Link></p></div>) }
