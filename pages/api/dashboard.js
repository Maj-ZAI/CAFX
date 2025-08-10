
import fs from 'fs';
import path from 'path';
export default function handler(req, res){
  const p = path.join(process.cwd(), 'data', 'db.json');
  const db = JSON.parse(fs.readFileSync(p,'utf-8'));
  const totalRevenue = db.cafes.reduce((s,c)=>s+c.revenue,0);
  const lowStock = db.stock.filter(s=>s.qty < s.threshold);
  res.status(200).json({cafesCount: db.cafes.length, totalRevenue, lowStock});
}
