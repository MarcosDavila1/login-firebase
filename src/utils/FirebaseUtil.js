import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup
} from "firebase/auth";

const {
    REACT_APP_API_KEY, 
    REACT_APP_AUTH_DOMAIN, 
    REACT_APP_PROJECT_ID, 
    REACT_APP_STORAGE_BUCKET, 
    REACT_APP_MESSAGING_SENDER_ID, 
    REACT_APP_APP_ID
  } = process.env;

export const config = {
    apiKey: `${REACT_APP_API_KEY}`,
    authDomain: `${REACT_APP_AUTH_DOMAIN}`,
    projectId: `${REACT_APP_PROJECT_ID}`,
    storageBucket: `${REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${REACT_APP_MESSAGING_SENDER_ID}`,
    appId: `${REACT_APP_APP_ID}`
};

export function firebaseRegistrarUsuario(email, password){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user
        })
        .catch((error) => {
            const errorMessage = error.message;
            return errorMessage
        });
}

export async function firebaseLogin(email, password){
    try {
        const auth = getAuth();
        const autenticacion = await signInWithEmailAndPassword(auth, email, password)
        return autenticacion.user
    } catch (error) {
        return 'Usuario o contraseña incorrecto'
    }
}

export async function cerrarSesion(){
    try {
        const auth = getAuth();
        const sesion = await auth.signOut()    
        return sesion
    } catch (error) {
        console.log(error)
    }
}

export async function iniciarSesionGoogle(){
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        const signIn = await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(signIn);
        return credential
    } catch (error) {
        return 'No se pudo iniciar sesión'
    }   
}

export async function iniciarSesionFacebook(){
    try {
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        const signIn = await signInWithPopup(auth, provider)
        const credential = FacebookAuthProvider.credentialFromResult(signIn);
        return credential
    } catch (error) {
        return 'No se pudo iniciar sesión'
    }   
}




