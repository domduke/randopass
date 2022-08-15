const PasswordStrengthBar = ({ score }) => {
  var strColor;
  var strWidth;

  switch (score) {
    case 0:
      strColor = 'red';
      strWidth = '20%';
      break;
    case 1:
      strColor = 'orange';
      strWidth = '40%';
      break;
    case 2:
      strColor = 'yellow';
      strWidth = '60%';
      break;
    case 3:
      strColor = '#5cff47';
      strWidth = '80%';
      break;
    case 4:
      strColor = 'green';
      strWidth = '100%';
      break;
    default:
  }

  var style = { backgroundColor: strColor, height: '5px', width: strWidth, marginBottom: '15px', transition: 'all 300ms ease-in-out' }

  return (
    <div style={style} />
  );

}

export default PasswordStrengthBar;