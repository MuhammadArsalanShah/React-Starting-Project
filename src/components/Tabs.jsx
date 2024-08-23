export default function Tabs({ buttons, children, ContainerElement = 'menu' }) {
  return (
    <>
      <ContainerElement>{buttons}</ContainerElement>
      {children}
    </>
  );
}
