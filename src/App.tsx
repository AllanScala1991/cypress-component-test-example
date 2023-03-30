import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Label } from './components/Label'
import { Title } from './components/Title'

const loginClick = () => {
  alert("Botão de login foi acionado.")
}

function App() {
  return (
    <div className='loginContainer'>
      <div className='loginBox'>
        <Title color='#FFFFFF' fontSize={4} text='Login'/>
        <Label color='#FFFFFF' fontSize={2} text='Usuário'/>
        <Input fontSize={2} type='text' placeholder='Digite seu usuário' />
        <Label color='#FFFFFF' fontSize={2} text='Senha'/>
        <Input fontSize={2} type='password' placeholder='Digite sua senha' />
        <Button backgroundColor='#8257E5' buttonText='Acessar' textColor='#FFFFFF' onClick={loginClick}/>
      </div>
    </div>
    
  )
}

export default App
