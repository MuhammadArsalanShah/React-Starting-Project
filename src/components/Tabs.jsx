export default function Tabs({ buttons, children, ContainerElement }) {
  return (
    <>
      <ContainerElement>{buttons}</ContainerElement>
      {children}
    </>
  );
}
