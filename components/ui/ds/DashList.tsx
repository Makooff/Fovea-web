/**
 * Liste à tirets rouges — la seule puce de la DA.
 *
 * <DashList items={["Budget ads jusqu'à 500€ par mois", "1 tournage"]} />
 */
export default function DashList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`fv-list font-poppins space-y-2 ${className}`.trim()}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
