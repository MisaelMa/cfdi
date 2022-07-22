/**
 *schema
 *
 * @param locations
 */
export const schema = (locations: string[]): string => {
  const schemaL = locations.join(' ');
  return ` ${schemaL}`;
};
