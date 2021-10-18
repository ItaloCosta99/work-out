import './style.css';

export function Status(props) {
  let hoverText = '';
  if (props.color === 'red') {
    hoverText = 'Já iniciou'
  } else if (props.color === 'green') {
    hoverText = 'Para o futuro'
  } else if (props.color === 'yellow') {
    hoverText = 'Próximo do início'
  }
  return (
    <>
      <div className={`status tooltip status-` + props.color}>
        <span className="tooltiptext">{hoverText}</span>
      </div>
    </>
  );
}