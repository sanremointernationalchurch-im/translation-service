import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1>Welcome</h1>

      <p>
        This is the homepage of your translation system.
      </p>

      <p>
        <Link href="/room/main">
          Open Room (demo)
        </Link>
      </p>
    </div>
  );
}
