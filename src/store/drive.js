import GDrive from "react-native-google-drive-api-wrapper";

export const drive = () => {
  return () => {

     GDrive.init();

  }

}

export default drive;