import Link from 'next/link';
import useSWR from 'swr';
const fetcher = (url)=>fetch(url).then(r=>r.json());
export default function Home(){ 
  const {data}=useSWR('/api/dashboard', fetcher);
  return (<div className="container">
    <h1>CAFEX Dashboard</h1>
    <div className="grid">
      <div className="card"><h3>Total Cafés</h3><p>{data?data.cafesCount: '...'}</p></div>
      <div className="card"><h3>Total Revenue</h3><p>{data?data.totalRevenue+' €':'...'}</p></div>
      <div className="card"><h3>Low Stock Alerts</h3><p>{data?data.lowStock.length: '...'}</p></div>
    </div>
    <div className="nav">
      <Link href="/suppliers"><a>Suppliers</a></Link> | <Link href="/stock"><a>Stock</a></Link> | <Link href="/cafes"><a>Cafés</a></Link>
    </div>
    <p style={{marginTop:20}}>This is a demo prototype. For full features, deploy backend DB or use Supabase integration.</p>
  </div>);
}