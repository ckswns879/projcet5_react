import './style/nav.css';
import './style/header.css';
import './style/index.css';
import MySection from './MySection';

function MyMain() {
  return (
    <>
    <main>
    <MySection h1="HTML" p="testHTML"/>    
    <MySection h1="css" /> 
    <MySection h1="js"/> 
    <MySection h1="react"/> 
    </main>
    </>
  );
}

export default MyMain;
