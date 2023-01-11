import { IImageProps, Image } from "native-base";

type Props = IImageProps & {

}

function UserPhoto({ size, ...rest }: Props) {
  return (
    <Image
      w={size}
      h={size}
      rounded="full"
      borderBottomColor="gray.400"
      {...rest}
    />
  );
}

export default UserPhoto