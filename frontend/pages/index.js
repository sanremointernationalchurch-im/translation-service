import Link from 'next/link';
export default function Home(){
return(<div style={{padding:40}}><h1>Home</h1>
<Link href='/admin'>Admin</Link><br/>
<Link href='/room/main'>Room</Link></div>);
}