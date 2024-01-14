import { supabase } from 'lib/supabaseClient';

export const findAll = async <T>(table: string): Promise<T[]> => {
  const res = await supabase.from(table).select('*');

  return res.data ?? [];
};

// id is string for convenience to handle params
export const findById = async <T>(table: string, id: string): Promise<T | undefined> => {
  const res = await supabase.from(table).select('*').eq('id', id).single();

  return res.data ?? undefined;
};

export const findAllByColumn = async <T>(
  table: string,
  column: string,
  value: string
): Promise<T[]> => {
  const res = await supabase.from(table).select('*').eq(column, value);

  return res.data ?? [];
};

export const findAllInColumn = async <T>(
  table: string,
  column: string,
  values: number[] | string[]
): Promise<T[]> => {
  const res = await supabase.from(table).select('*').in(column, values);

  return res.data ?? [];
};

export const insert = async <T>(table: string, values: Omit<T, 'id'>[]) => {
  return await supabase.from(table).insert(values).select();
};
