interface RepositoryItemProps {
  repository: string;
  description: string;
  href: string;
}

export function RepositoryItem({
  repository = "default",
  description,
  href = "#",
}: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository}</strong>
      <p>{description}</p>

      <a href={href}>Acessar repositório</a>
    </li>
  );
}
