import './App.css';
import Boxes from "./screens/boxes/Boxes";
import {Button} from "@material-ui/core";
import PrintIcon from '@material-ui/icons/Print';

import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import {useRef} from "react";
import PageToPrint from "./screens/PageToPrint";

function App() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      <Boxes  />

      <div className="print-btn">
        <Button
            variant="contained"
            color="primary"
            startIcon={<PrintIcon/>}
            onClick={handlePrint}
        >
          Print
        </Button>
      </div>

      <div style={{display:'none'}}><PageToPrint ref={componentRef}/></div>

    </div>
  );
}

export default App;
