import useSWR from 'swr';
const fetcher = (url)=>fetch(url).then(r=>r.json());
export default function Stock(){
  const {data}=useSWR('/api/stock', fetcher);
  return (<div className="container"><h1>Stock & Inventory</h1>
    <table className="table"><thead><tr><th>Product</th><th>Qty</th><th>Unit</th><th>Threshold</th></tr></thead>
    <tbody>{data?data.map(i=>(<tr key={i.id}><td>{i.name}</td><td>{i.qty}</td><td>{i.unit}</td><td>{i.threshold}</td></tr>)):null}</tbody></table>
  </div>);
}