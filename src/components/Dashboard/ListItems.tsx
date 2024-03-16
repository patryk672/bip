import Link from 'next/link';
import { ListItemButton, ListItemText } from '@mui/material';

import { data } from '@/data/data';

export default function ListItems() {
  return data.map(item => (
    <Link key={item.slug} href={`/${item.slug}`}>
      <ListItemButton>
        <ListItemText primary={item.title} />
      </ListItemButton>
    </Link>
  ));
}
