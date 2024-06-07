import ChatBot from 'react-simple-chatbot'
//import { ThemeProvider } from 'styled-components'
import './App.css'

function App() {

  //* estilos

  // const theme = {
  //   background: 'black',
  //   fontfamily: 'Helvetica',
  //   fontColor: 'white',
  //   botBubbleColor: 'violet',
  //   userFontColor: 'white',
  //   userBubbleColor: 'violet',
  //   HeaderBGColor: 'violet',
  //   HeaderFontColor: 'white',
  //   HeaderFontSize: "20px"
  // }

  const steps = [
    { id: "1", message: "Hola, soy Hotaru, ¿cómo estás? Dime tu nombre y comencemos...", trigger: "2" },
    { id: "2", user: true, trigger: "3" },
    { id: "3", message: "Un gusto saludarte, {previousValue}, sobre que producto necesitas informacion?", trigger: "4" },
    { id: "4", user: true, trigger: "5" },
    { id: "5", message: "Por informacion sobre {previousValue} busca nuestros productos en la seccion servicios a clientes en nuestra web", trigger: "6" },
    {id: "6", user: true, trigger: "7"},
    { id: "7", message: "Si no tienes mas preguntas, me despido de ti. Gracias por tu interes en nuestros servicios", end: true }
  ];

  return (
    <>
    {/* <ThemeProvider theme= { theme }> */}
     <ChatBot steps= {steps} 
     headerTitle = "Chatea con Hotaru Bot" 
     //speechSynthesis = {{enable: true, lang: "en"}}  
     
     /> 
     {/* </ThemeProvider> */}
     
    </>
  )
}

export default App
