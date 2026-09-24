// destinations-card.jsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export function DestinationsCard({ Dest }) {
  const navigate = useNavigate();
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 hover:shadow-2xs hover:scale-102 duration-120  hover:brightness-100 ">
      <img
        src={Dest.image}
        alt={`${Dest.name}, ${Dest.country}`}
        className="relative z-20 aspect-video w-full object-cover  "
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">from ${Dest.price}</Badge>
        </CardAction>
        <CardTitle>{Dest.name}</CardTitle>
        <CardDescription>{Dest.country}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => {
            navigate(`${Dest.id}`);
          }}
        >
          {" "}
          View Destination
        </Button>
      </CardFooter>
    </Card>
  );
}
