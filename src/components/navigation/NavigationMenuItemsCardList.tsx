interface NavigationMenuItemsCardListProps {
  children: React.ReactNode;
}

export default function NavigationMenuItemsCardList({
  children,
}: NavigationMenuItemsCardListProps) {
  return (
    <ul className="grid gap-x-4 gap-y-1 p-4 font-sans md:w-[480px] lg:w-[520px] lg:grid-cols-[.9fr_1fr]">
      {children}
    </ul>
  );
}
