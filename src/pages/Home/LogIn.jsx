import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/slices/AuthSlice";
import { useState } from "react";

const LogIn = () => {
  const initialState = {
    name: "",
    password: "",
    image: "",
  };

  const [userInfo, setUserInfo] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    dispatch(logIn(userInfo));
  };

  return (
    <div className="h-screen grid place-items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4" onChange={handleChange}>
          <Input label="Name" color="blue" size="lg" type="text" name="name" />
          <Input
            label="Password"
            color="blue"
            size="lg"
            type="password"
            name="password"
          />
          <Input
            label="image URL address"
            color="blue"
            size="lg"
            name="image"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            color="blue"
            fullWidth
            onClick={handleClick}
          >
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Image is Optional
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LogIn;
