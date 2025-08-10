import useSWR from 'swr';
const fetcher = (url)=>fetch(url).then(r=>r.json());
export default function Suppliers(){
  const {data}=useSWR('/api/suppliers', fetcher);
  return (<div className="container"><h1>Suppliers</h1>
    <table className="table"><thead><tr><th>Name</th><th>Category</th><th>Price index</th></tr></thead>
    <tbody>{data?data.map(s=>(<tr key={s.id}><td>{s.name}</td><td>{s.category}</td><td>{s.price_index}</td></tr>)):null}</tbody></table>
  </div>);
}