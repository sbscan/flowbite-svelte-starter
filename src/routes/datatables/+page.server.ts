import type { PageServerLoad } from './$types';
import db from '$lib/server/db.server.ts';

export const load: PageServerLoad = async () => {
  const rows = await db.query('SELECT * FROM erp_personel');
  return { rows };
};