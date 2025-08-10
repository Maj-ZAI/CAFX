import useSWR from 'swr';
const fetcher = (url)=>fetch(url).then(r=>r.json());
export default function Cafes(){
  const {data}=useSWR('/api/cafes', fetcher);
  return (<div className="container"><h1>List of Cafés</h1>
    <ul>{data?data.map(c=>(<li key={c.id}>{c.name} — {c.location} — Revenue: {c.revenue}€</li>)):null}</ul>
  </div>);
}