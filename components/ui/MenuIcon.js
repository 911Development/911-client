const MenuIcon = ({ onClick }) => (
  <span onClick={onClick}>
    <div className="bg-primary h-0.5 w-8 mb-1" />
    <div className="bg-primary h-0.5 w-6 mb-1 ms-auto" />
    <div className="bg-primary h-0.5 w-4 ms-auto" />
  </span>
);

export default MenuIcon;
