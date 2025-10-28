import { Link } from "react-router";

interface MenuButtonsProps {
  path: string;
  label: string;
}

export default function MenuButton({ path, label }: MenuButtonsProps) {
  return (
    <Link to={path} className="hover:marker-highlight">
      {label}
    </Link>
  );
}
