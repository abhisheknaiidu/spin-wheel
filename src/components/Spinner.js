/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { GoogleSpreadsheet } from "google-spreadsheet";

export const Spinner = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const spinning = selectedItem !== null ? 'spinning' : '';


// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = 'fampay@fampay-305208.iam.gserviceaccount.com';
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4O3f/gRC0au9k\nRpx0DDaVh8MqlXqnIu34tBtCj+yoshPo93PqNIJXviCoLrXWtts6sTmb4uQDHk/h\noMmW7eJxSHaZ2DO+kY6zhvVOvtwKSz6AVdN1tRhYBU9LqEJflH0h7l33yVvYpXJe\nwdzAuKSxGzRf9OcblPtJrf/zmeJkR0MEnwYlJVsfWpDEO+UdGn/Zhd222+zjjip+\nBKAbMKLB8TiD5pGcjYVqMBrXrnT8HTb+t0A1Jk31t/y86c1gNT1liuicmVAfORO7\nDYvrnvfGj8A190Rhc/5IKcOBWFyGjHewrFAsLfYjl7+6PlhKyqm8R2ZSk7CAJu7d\nrsYkpN8PAgMBAAECggEAViJTpa0BkuCGISNURXtqT7nkGPY/HIJbsVH/hrzEgFCV\nt29uDdtT71LwcME5+fOPBt9SGFxZj02uOkaSyZJZsu4WqTHoa1ohVjUsXo8kUFnC\nlHzL+zXadlixLKWztn01jdYkr9NAMkeT89J+c8pAEZ+u+ogFPyOF4vpLduiE7K2J\nkIlTq+J2vOn6W11pWuHr+ONPVsdn59GIbf0lv8HSCumaC6rUh8VbnQ6FRxcCDbnO\nQPlJpj0EU6zrD/7z3t/oIl6C5qXz38QIHIdnIBvs2/eU9kqq1gzy81H6QS9Vhqw6\nKAFnBSQd8btOdFQvLk6z824IlDZOafTaNUrGAEzo1QKBgQD5m5rz57ai8HBDsqi2\nqOK2Hj6BxWc5avGc0jx5chWgvYTG9zud3t8kr/bPhE9nqr3x2o+H2ZyzyILCcWBf\nQQmUUtYnKWe1q55tJ7BLnz5ByMRFwy2kNw5Pp4LY1L2k7onMVudD2baUMPJc31dI\nYMkMHI+aQX3cYMjnOpp61yS8cwKBgQC880U61Kw6RVvo0rKNb1C/6XIkmnhq34DZ\nuMkiiccr+EDfcKEs14/DF04kKB6WkjQe/59tzUnw7bzJ/zBq5wGX2ehqkMJNd5pN\nAX63NLqJCMYT0kRWhfG5RP6dJbI3x5XqELA9al1SomyBClhUiI0IXq/ylL5dG7Ft\neF5wEF0n9QKBgQCvGGXRVSk8Ebhe9PP+9mfa40pr1CM+FvQYUy5S7yGW2XtL62Cp\ntQ8JeFqFZcYh7ZdDElN/M7sGLtDzP38gMspafuV1IUl8GkCPR7kWw0Vz9jcgzPK2\ncFycqeBS5KGIEkEd05R1d0Lpn5BUb+OVhTdjRKHDzs9QiaBE/Eojg8pkWwKBgHVn\nLr/0PyNhz07mA/2vidwE4GBv/pxhTX16vLcSJshiU2TCZdMoCXKt+2ap6v+hznLo\nYBZotSXXgjN8tYfnC21f/3Kfiat6wkxQvnx1beYRponQX5fnWB/HB/F657aS88ph\nHjC680uSEptHY0T7J65oryiqVXIi7+bWIM++yzM1AoGADNCltAh8a9lfFrPIlh6E\nQblVML6g6gUcZeOlPeHVJncTvPtwtg5Rl/PFzRE/b9/cDEgWG10LSIyfqyUaRfNo\n0IL9QI4yk1R4mw0xC6vnjN7JagwSs4HcdR5NH0tdNDjY2oix5mlgx+qsqr1xZcxv\nPhLJQW7t0mv08HgqY85m5TI=\n-----END PRIVATE KEY-----\n";

// const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
// const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

useEffect(() => {
    if(selectedItem !== null) {
        const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        const spinIndex = selectedItem-2 >= 0 ? selectedItem-2 : items.length - 1 - selectedItem  - 1;
        // if(selectedItem == 0) 
        console.log(selectedItem);
        console.log(items[spinIndex]);
        const newRow = { web_client: "nads pwa", timestamp: date, spin_result_index: spinIndex };
        const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
        const appendSpreadsheet = async (newRow) => {
            try {
              await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
              });
              // loads document properties and worksheets
              await doc.loadInfo();
          
              const sheet = doc.sheetsById[SHEET_ID];
              const result = await sheet.addRow(newRow);
            } catch (e) {
              console.error('Error: ', e);
            }
          };
          appendSpreadsheet(newRow);
    }
}, [selectedItem])



    const wheelVars = {
        '--nb-item': items.length,
        '--selected-item': selectedItem,
      };
    const handleItem = () => {
        setSelectedItem(Math.floor(Math.random() * items.length));
      }
    return (
        <>
        <div className="wheel-top">
            <div className="wheel-upper"></div>
            <div className="wheel-triangle"></div>
        </div>
        <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={handleItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
        </div>
      </div>
      </>
    )
}

export default Spinner;
