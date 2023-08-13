import { Button } from "@chakra-ui/react";

type IButtonProps = {
  onClick: () => void;
};

export const CustomButton = ({ onClick }: IButtonProps) => {
  return (
    <Button colorScheme="teal" size="sm" width="100%" onClick={onClick}>
      Entrar
    </Button>
  );
};
