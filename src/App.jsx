import { ImagesProvider } from "./context/imagesprovider";
import Images from "./components/images-list/Images";


function App() {
  return (
    <>
   
      <ImagesProvider>
        <Images />
      </ImagesProvider>
    </>
  );
}

export default App;
