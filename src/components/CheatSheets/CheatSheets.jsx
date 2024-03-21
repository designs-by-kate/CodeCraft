import './CheatSheet.css';

const CheatSheets = () => {
  return (
    <div className="cs-container">
      <h1>Cheat Sheets</h1>
      <h3>Download CheatSheet:</h3>
      <a href="html.pdf" download type="application/pdf">HTML</a>
      <a href="css.pdf" download type="application/pdf">CSS</a>
      <a href="javascript.pdf" download type="application/pdf">JS</a>
    </div>
  );
};

export default CheatSheets;