import './CheatSheet.css';

const CheatSheets = () => {
  return (
    <div className="cs-container">
      <h1>Cheat Sheets</h1>
      <h3>Download CheatSheet:</h3>
      <a href="../../assets/html.pdf" download>HTML</a>
      <a href="../../assets/css.pdf" download>CSS</a>
      <a href="../../assets/javascript.pdf" download>JS</a>
    </div>
  );
};

export default CheatSheets;