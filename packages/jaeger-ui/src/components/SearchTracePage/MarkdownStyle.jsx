const style = `
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 16px;
  }

  th {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  td {
    border: 1px solid #ccc;
    padding: 8px;
  }
  summary {
    cursor: pointer;
  }
  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    font-size: 12px;
  }

  h5 {
    font-size: 10px;
  }

  h6 {
    font-size: 8px;
  }
  .markdown-statistics {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .markdown-statistic {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 16px;
    padding: 5px;
  }
  
  .markdown-statistic-label {
    font-size: 8px;
    color: #666;
  }
  
  .markdown-statistic-value {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

`;

export default style;