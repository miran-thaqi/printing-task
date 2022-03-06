import {Card, CardContent} from "@material-ui/core";
import './id-cart.css';

function IdCard() {

  return (
        <Card className="id-card" variant="outlined">
          <CardContent>
            <div className="id-card_user-img" />

          </CardContent>
        </Card>
  );
}

export default IdCard;
