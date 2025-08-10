
import fs from 'fs';
import path from 'path';
export default function handler(req,res){
  const p = path.join(process.cwd(), 'data', 'db.json');
  const db = JSON.parse(fs.readFileSync(p,'utf-8'));
  res.status(200).json(db.suppliers);
}
