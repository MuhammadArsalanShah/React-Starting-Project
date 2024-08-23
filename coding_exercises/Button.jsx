export default function Button({ children, mode='filled', Icon, className, ...props }) {
  // Todo: Build this component!

  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>
  // console.log(children);
  let classList = `button ${mode}-button`;

  if (Icon) {
    classList += ' icon-button'
  }

  if (className) {
    classList += " " + className;
  }

  return (
    <button className={classList} {...props}>
      {Icon && <span className="button-icon"> <Icon /> </span>}
      <span>{children}</span>
    </button>
  );
}
