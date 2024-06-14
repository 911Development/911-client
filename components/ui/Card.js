const Card = ({ className, style, children }) => (
  <div className={`card py-8 px-6 ${className}`} style={style}>
    {children}
  </div>
);

const CardHeader = ({ clasName, children }) => (
  <div className={`card-header ${clasName}`}>{children}</div>
);

const CardBody = ({ clasName, children }) => (
  <div className={`card-body ${clasName}`}>{children}</div>
);

const CardFooter = ({ clasName, children }) => (
  <div className={`card-footer ${clasName}`}>{children}</div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
