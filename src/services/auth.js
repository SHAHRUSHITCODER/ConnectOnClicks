import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const SignUp = (fullname, email, password) => {
  if (!fullname || !email || !password) {
    alert("Enter data");
  } else {
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        const { uid } = cred.user;
        auth().currentUser.updateProfile({
          displayName: fullname,
        });

        console.log(fullname + " SignedUp");

        // Return both uid and fullname
        return { uid, fullname };
      })
      
      .catch((err) => alert(err.code, err.message));
  }
};





const signIn = async (email, password,navigation) => {

  try {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    await auth().signInWithEmailAndPassword(email, password);

    // If successful, log the user's UID to the console
    console.log(auth().currentUser.uid);
    if (navigation) {
      navigation.navigate('Upload');
    } else {
      console.error('Navigation object is undefined');
    }
  } catch (error) {
    // If there's an error during sign-in, alert the error details
    alert(error.message);
  }
};

const signOut = () => {
  return auth().signOut();
};

const Auth = {
  SignUp,
  signIn,
  signOut
};

export default Auth;
