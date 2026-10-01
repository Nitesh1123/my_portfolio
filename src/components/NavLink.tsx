// TODO: Reusable nav link component
// Props: href (string), label (string), isActive (boolean), onClick (function)
// Shows active underline glow when isActive is true

export const NavLink = ({ href, label, isActive, onClick }: { href: string; label: string; isActive?: boolean; onClick?: () => void }) => {
  return (
    <button onClick={onClick} className={isActive ? "text-primary font-bold" : "text-muted-foreground"}>
      {label}
    </button>
  );
};
